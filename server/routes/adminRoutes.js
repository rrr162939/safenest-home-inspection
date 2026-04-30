const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

// Simple static admin (for now)
const ADMIN = {
  email: "rr244934@gmail.com",
  password: "Mamatha@123"
};

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === ADMIN.email && password === ADMIN.password) {
    const token = jwt.sign({ email }, "secretkey", { expiresIn: "1d" });

    return res.json({
      success: true,
      token
    });
  }

  res.status(401).json({ message: "Invalid credentials" });
});

module.exports = router;