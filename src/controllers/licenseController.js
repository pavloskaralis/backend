const express = require('express');
const router = express.Router();
const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();
const { licenseScope } = require('../policies/licensePolicy');
const { bookingService } = require('../services/bookingService');

// GET /licenses
// Returns all licenses for the authenticated doctor
router.get('/', licenseScope, async (req, res) => {
  const licenses = await prisma.license.findMany({
    where: req.licenseScope,
  });
  res.json(licenses);
});

// GET /licenses/:id
// URL param: id - license ID
router.get('/:id', licenseScope, async (req, res) => {
  const license = await prisma.license.findFirst({
    where: { id: parseInt(req.params.id), ...req.licenseScope },
  });
  if (!license) return res.status(404).json({ error: 'License not found' });
  res.json(license);
});

// POST /licenses
// Body payload: { state: string, active: boolean }
router.post('/', licenseScope, async (req, res) => {
  const doctorId = req.user.doctorId;
  const { state, active } = req.body;

  const license = await prisma.license.create({
    data: { doctorId, state, active },
  });

  res.status(201).json(license);
});

// PATCH /licenses/:id
// URL param: id - license ID
// Body payload: { state?, active? }
// Calls bookingService to check affected bookings
router.patch('/:id', licenseScope, async (req, res) => {
  const { state, active } = req.body;
  const licenseId = parseInt(req.params.id);
  const doctorId = req.user.doctorId;

  const updated = await prisma.license.updateMany({
    where: { id: licenseId, ...req.licenseScope },
    data: { state, active },
  });

  if (updated.count === 0) return res.status(404).json({ error: 'License not found or forbidden' });

  // Check affected bookings for this license change
  bookingService.checkAffectedBookings(doctorId, licenseId);

  const license = await prisma.license.findUnique({ where: { id: licenseId } });
  res.json(license);
});

module.exports = router;
