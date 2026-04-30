const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  fullName: String,
  mobile: String,
  email: String,
  address: String,
  serviceType: String,
  problem: String,
  preferredDate: String,

  status: {
  type: String,
  default: "Pending"
}

}, { timestamps: true });

module.exports = mongoose.model("Booking", bookingSchema);