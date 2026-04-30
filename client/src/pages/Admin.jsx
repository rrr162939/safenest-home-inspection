import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

function Admin() {
  const [bookings, setBookings] = useState([]);
  const [filter, setFilter] = useState("All");
  const navigate = useNavigate();

  // ✅ Fetch bookings
  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/bookings",
        {
          headers: {
            Authorization: token
          }
        }
      );

      setBookings(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // ✅ Check auth + load data
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/admin-login");
      return;
    }

    fetchBookings();
  }, [navigate]);

  // ✅ Mark as completed
  const markCompleted = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await axios.put(
        `http://localhost:5000/api/bookings/${id}`,
        {},
        {
          headers: {
            Authorization: token
          }
        }
      );

      fetchBookings();
    } catch (error) {
      console.log(error);
    }
  };

  // ✅ Delete booking
  const deleteBooking = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await axios.delete(
        `http://localhost:5000/api/bookings/${id}`,
        {
          headers: {
            Authorization: token
          }
        }
      );

      fetchBookings();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <section className="admin">
        <h1>Admin Dashboard</h1>

        {/* ✅ Logout */}
        <button
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/admin-login");
          }}
        >
          Logout
        </button>

        {/* ✅ Filter Buttons */}
        <div style={{ marginBottom: "20px" }}>
          <button onClick={() => setFilter("All")}>All</button>
          <button onClick={() => setFilter("Pending")}>Pending</button>
          <button onClick={() => setFilter("Completed")}>Completed</button>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Mobile</th>
                <th>Service</th>
                <th>Date</th>
                <th>Problem</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {bookings
                .filter(
                  (item) =>
                    filter === "All" || item.status === filter
                )
                .map((item, index) => (
                  <tr key={index}>
                    <td>{item.fullName}</td>
                    <td>{item.mobile}</td>
                    <td>{item.serviceType}</td>
                    <td>{item.preferredDate}</td>
                    <td>{item.problem}</td>

                    <td>
                      {item.status === "Completed"
                        ? "✅ Completed"
                        : "⏳ Pending"}
                    </td>

                    <td>
                      {item.status !== "Completed" && (
                        <button
                          onClick={() => markCompleted(item._id)}
                        >
                          Mark Completed
                        </button>
                      )}

                      <button
                        style={{
                          background: "red",
                          marginLeft: "10px",
                          color: "white"
                        }}
                        onClick={() => deleteBooking(item._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default Admin;