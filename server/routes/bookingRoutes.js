const jwt = require("jsonwebtoken");

const verifyAdmin = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(403).json({ message: "No token" });
  }

  try {
    jwt.verify(token, "secretkey");
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
};

const express = require("express");
const router = express.Router();

const {
  createBooking,
  getAllBookings
} = require("../controllers/bookingController");

router.post("/", createBooking);
router.get("/", verifyAdmin, getAllBookings);


router.put("/:id", async (req, res) => {
  try {
    const Booking = require("../models/Booking");

    const updated = await Booking.findByIdAndUpdate(
      req.params.id,
      { status: "Completed" },
      { new: true }
    );

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const Booking = require("../models/Booking");

    await Booking.findByIdAndDelete(req.params.id);

    res.json({ message: "Booking deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;