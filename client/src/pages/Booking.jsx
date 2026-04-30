import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Booking() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    address: "",
    serviceType: "",
    problem: "",
    preferredDate: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      "http://localhost:5000/api/bookings",
      formData
    );

    console.log("Response:", res.data);

    alert("Booking Submitted Successfully!");

    setFormData({
      fullName: "",
      mobile: "",
      email: "",
      address: "",
      serviceType: "",
      problem: "",
      preferredDate: "",
    });

  } catch (error) {
    console.log("Error:", error);
    alert("Booking failed");
  }
};

  return (
    <>
      <Navbar />

      <section className="booking-section">
        <h1>Book Home Inspection</h1>

        <form onSubmit={handleSubmit} className="booking-form">

          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            placeholder="Full Name"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            placeholder="Mobile Number"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email Address"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="address"
            value={formData.address}
            placeholder="Property Address"
            onChange={handleChange}
            required
          />

          <select
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            required
          >
            <option value="">Select Service</option>
            <option>Roof Inspection</option>
            <option>Plumbing Inspection</option>
            <option>Electrical Inspection</option>
            <option>Pest Damage Inspection</option>
          </select>

          <textarea
            name="problem"
            value={formData.problem}
            placeholder="Describe Your Problem"
            rows="5"
            onChange={handleChange}
            required
          />

          <input
            type="date"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            required
          />

          <button type="submit">Submit Booking</button>

        </form>
      </section>

      <Footer />
    </>
  );
}

export default Booking;