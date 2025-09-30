const express = require('express');
const router = express.Router();
const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();
const { notify } = require('../services/notificationService');
const { bookingScope } = require('../policies/bookingPolicy');

// GET /bookings
// Query params:
//   - limit (optional, default 20): number of bookings to return
//   - offset (optional, default 0): pagination offset
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
// URL param:
//   - id: booking ID
router.get('/:id', bookingScope, async (req, res) => {
  const booking = await prisma.booking.findFirst({
    where: {
      id: parseInt(req.params.id),
      ...req.bookingScope,
    },
    include: { customer: true, doctor: true, timeSlot: true },
  });

  if (!booking) return res.status(404).json({ error: 'Booking not found' });

  res.json(booking);
});

// POST /bookings
// Body payload:
//   - timeSlotId: ID of the timeslot
//   - date: string (YYYY-MM-DD) for the booking
//   - status: booking status (enum or string)
// Uses customerId from auth middleware (req.user.customerId)
router.post('/', bookingScope, async (req, res) => {
  const { timeSlotId, date, status } = req.body;
  const customerId = req.user.customerId;

  const timeSlot = await prisma.timeSlot.findUnique({
    where: { id: timeSlotId },
  });
  if (!timeSlot) return res.status(404).json({ error: 'TimeSlot not found' });

  const booking = await prisma.booking.create({
    data: {
      customerId,
      doctorId: timeSlot.doctorId,
      timeSlotId,
      date,
      status,
    },
    include: { customer: true, doctor: true, timeSlot: true },
  });

  notify(booking, 'CREATED');
  res.status(201).json(booking);
});

// PATCH /bookings/:id
// URL param:
//   - id: booking ID
// Body payload:
//   - status (optional): new booking status
//   - date (optional): new date string (YYYY-MM-DD)
router.patch('/:id', bookingScope, async (req, res) => {
  const { status, date } = req.body;

  const updated = await prisma.booking.updateMany({
    where: {
      id: parseInt(req.params.id),
      ...req.bookingScope,
    },
    data: { status, date },
  });

  if (updated.count === 0) return res.status(404).json({ error: 'Booking not found or forbidden' });

  const booking = await prisma.booking.findUnique({
    where: { id: parseInt(req.params.id) },
    include: { customer: true, doctor: true, timeSlot: true },
  });

  notify(booking, 'UPDATED');
  res.json(booking);
});

module.exports = router;
