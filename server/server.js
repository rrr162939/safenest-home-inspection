require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const adminRoutes = require("./routes/adminRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

const app = express();

// ✅ FIRST apply middleware
app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());

// ✅ THEN routes
app.use("/api/admin", adminRoutes);
app.use("/api/bookings", bookingRoutes);

// ✅ DB connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected Successfully"))
.catch((err) => console.log(err));

// ✅ Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});