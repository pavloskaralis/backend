const express = require('express');
const router = express.Router();
const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();
const { notify } = require('../services/notificationService');
const { bookingScope } = require('../policies/bookingPolicy');

// GET /bookings
router.get('/', bookingScope, async (req, res) => {
  const limit = parseInt(req.query.limit) || 20;
  const offset = parseInt(req.query.offset) || 0;

  const bookings = await prisma.booking.findMany({
    where: req.bookingScope,
    skip: offset,
    take: limit,
    include: { customer: true, doctor: true, timeSlot: true },
  });

  res.json(bookings);
});

// GET /bookings/:id
router.get('/:id', bookingScope, async (req, res) => {
  const booking = await prisma.booking.findUnique({
    where: { id: parseInt(req.params.id) },
    include: { customer: true, doctor: true, timeSlot: true },
  });

  if (!booking) return res.status(404).json({ error: 'Booking not found' });

  // Check policy: only allow if belongs to req.bookingScope
  if (
    (req.user.customerId && booking.customerId !== req.user.customerId) ||
    (req.user.doctorId && booking.doctorId !== req.user.doctorId)
  ) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  res.json(booking);
});

// POST /bookings
router.post('/', bookingScope, async (req, res) => {
  const { timeSlotId, date, status } = req.body;
  const customerId = req.user.customerId;
  const booking = await prisma.booking.create({
    data: { customerId, timeSlotId, date, status },
    include: { customer: true, doctor: true, timeSlot: true },
  });
  notify(booking, 'CREATED');
  res.status(201).json(booking);
});

// PATCH /bookings/:id
router.patch('/:id', bookingScope, async (req, res) => {
  const { status, date } = req.body;
  const booking = await prisma.booking.findUnique({
    where: { id: parseInt(req.params.id) },
  });

  if (!booking) return res.status(404).json({ error: 'Booking not found' });

  // Policy check
  if (
    (req.user.customerId && booking.customerId !== req.user.customerId) ||
    (req.user.doctorId && booking.doctorId !== req.user.doctorId)
  ) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  const updated = await prisma.booking.update({
    where: { id: parseInt(req.params.id) },
    data: { status, date },
    include: { customer: true, doctor: true, timeSlot: true },
  });

  notify(updated, 'UPDATED');
  res.json(updated);
});

module.exports = router;
