const express = require('express');
const router = express.Router();
const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

// GET /doctors
// Query params:
//   - state (optional): filter doctors licensed in this state
//   - limit (optional, default 20)
//   - offset (optional, default 0)
router.get('/', async (req, res) => {
  const { state } = req.query;
  const limit = parseInt(req.query.limit) || 20;
  const offset = parseInt(req.query.offset) || 0;

  const doctors = await prisma.doctor.findMany({
    where: state
      ? {
          licenses: {
            some: { state, active: true },
          },
        }
      : {},
    skip: offset,
    take: limit,
    include: {
      user: true,
      ratings: true,
    },
  });

  const result = doctors.map(d => ({
    id: d.id,
    bio: d.bio,
    ratingsAverage:
      d.ratings.length > 0
        ? d.ratings.reduce((sum, r) => sum + r.score, 0) / d.ratings.length
        : null,
  }));

  res.json(result);
});

// GET /doctors/:id
// URL param: id - doctor ID
router.get('/:id', async (req, res) => {
  const doctor = await prisma.doctor.findUnique({
    where: { id: parseInt(req.params.id) },
    include: {
      user: true,
      ratings: true,
      licenses: true,
      timeSlots: true,
    },
  });

  if (!doctor) return res.status(404).json({ error: 'Doctor not found' });

  const ratingsAverage =
    doctor.ratings.length > 0
      ? doctor.ratings.reduce((sum, r) => sum + r.score, 0) / doctor.ratings.length
      : null;

  res.json({
    id: doctor.id,
    bio: doctor.bio,
    ratingsAverage,
    email: doctor.user.email,
    phone: doctor.user.phone,
    address: doctor.user.address,
    licenses: doctor.licenses,
  });
});

module.exports = router;
