const express = require('express');
const router = express.Router();
const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();
const { canModifyRating } = require('../policies/ratingPolicy');
const { notify } = require('../services/notificationService');

// GET /ratings
// Query params: doctorId (optional), customerId (optional)
router.get('/', async (req, res) => {
  const { doctorId, customerId } = req.query;
  const where = {};
  if (doctorId) where.doctorId = parseInt(doctorId);
  if (customerId) where.customerId = parseInt(customerId);

  const ratings = await prisma.rating.findMany({
    where,
    include: { doctor: true, customer: true },
  });

  res.json(ratings);
});

// POST /ratings
// Payload: { doctorId, score, comment }
router.post('/', async (req, res) => {
  const { doctorId, score, comment } = req.body;
  const customerId = req.user.customerId;

  if (!customerId) return res.status(403).json({ error: 'Only customers can leave ratings' });

  const rating = await prisma.rating.create({
    data: { doctorId, customerId, score, comment },
    include: { doctor: true, customer: true },
  });

  notify(rating, 'RATING_CREATED');
  res.status(201).json(rating);
});

// PATCH /ratings/:id
// Payload: { score?, comment? }
router.patch('/:id', async (req, res) => {
  const ratingId = parseInt(req.params.id);
  const rating = await prisma.rating.findUnique({ where: { id: ratingId } });

  if (!rating) return res.status(404).json({ error: 'Rating not found' });
  if (!canModifyRating(req, rating)) return res.status(403).json({ error: 'Forbidden' });

  const updated = await prisma.rating.update({
    where: { id: ratingId },
    data: { score: req.body.score, comment: req.body.comment },
    include: { doctor: true, customer: true },
  });

  notify(updated, 'RATING_UPDATED');
  res.json(updated);
});

// DELETE /ratings/:id
router.delete('/:id', async (req, res) => {
  const ratingId = parseInt(req.params.id);
  const rating = await prisma.rating.findUnique({ where: { id: ratingId } });

  if (!rating) return res.status(404).json({ error: 'Rating not found' });
  if (!canModifyRating(req, rating)) return res.status(403).json({ error: 'Forbidden' });

  await prisma.rating.delete({ where: { id: ratingId } });

  notify(rating, 'RATING_DELETED');
  res.status(204).send();
});

module.exports = router;
