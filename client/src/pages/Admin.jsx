import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";

import { Bar } from "react-chartjs-2";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

function Admin() {
  const [bookings, setBookings] = useState([]);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // 🔁 CHANGE THIS ONLY
  const BASE_URL = "https://your-backend.onrender.com";

  // ================= FETCH =================
  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(`${BASE_URL}/api/bookings`, {
        headers: { Authorization: token }
      });

      setBookings(res.data);
    } catch (error) {
      console.log("Fetch Error:", error);
    }
  };

  // ================= AUTH =================
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/admin-login");
      return;
    }

    fetchBookings();
  }, [navigate]);

  // ================= UPDATE =================
  const markCompleted = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await axios.put(
        `${BASE_URL}/api/bookings/${id}`,
        {},
        {
          headers: { Authorization: token }
        }
      );

      fetchBookings();
    } catch (error) {
      console.log(error);
    }
  };

  // ================= DELETE =================
  const deleteBooking = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await axios.delete(`${BASE_URL}/api/bookings/${id}`, {
        headers: { Authorization: token }
      });

      fetchBookings();
    } catch (error) {
      console.log(error);
    }
  };

  // ================= EXPORT =================
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(bookings);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Bookings");

    const buffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array"
    });

    const file = new Blob([buffer], {
      type:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    });

    saveAs(file, "bookings.xlsx");
  };

  // ================= DASHBOARD =================
  const total = bookings.length;
  const pending = bookings.filter(b => b.status === "Pending").length;
  const completed = bookings.filter(b => b.status === "Completed").length;

  const chartData = {
    labels: ["Total", "Pending", "Completed"],
    datasets: [
      {
        label: "Bookings",
        data: [total, pending, completed],
        backgroundColor: ["#0d6efd", "#ffc107", "#28a745"]
      }
    ]
  };

  // ================= FILTER + SEARCH =================
  const filteredBookings = bookings.filter(item =>
    (filter === "All" || item.status === filter) &&
    (
      item.fullName.toLowerCase().includes(search.toLowerCase()) ||
      item.mobile.includes(search) ||
      item.serviceType.toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <>
      <Navbar />

      <section className="admin">

        <h1>Admin Dashboard</h1>

        {/* ACTION BUTTONS */}
        <div style={{ marginBottom: "20px" }}>
          <button onClick={exportToExcel}>📥 Export Excel</button>

          <button
            style={{ marginLeft: "10px", background: "red", color: "white" }}
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/admin-login");
            }}
          >
            Logout
          </button>
        </div>

        {/* STATS */}
        <div className="stats">
          <div className="stat-card">Total: {total}</div>
          <div className="stat-card">Pending: {pending}</div>
          <div className="stat-card">Completed: {completed}</div>
        </div>

        {/* CHART */}
        <div className="chart">
          <Bar data={chartData} />
        </div>

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search by name, mobile, service..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px",
            width: "100%",
            maxWidth: "400px",
            marginBottom: "15px"
          }}
        />

        {/* FILTER */}
        <div style={{ marginBottom: "20px" }}>
          <button onClick={() => setFilter("All")}>All</button>
          <button onClick={() => setFilter("Pending")}>Pending</button>
          <button onClick={() => setFilter("Completed")}>Completed</button>
        </div>

        {/* TABLE */}
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
              {filteredBookings.map((item, index) => (
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
                      <button onClick={() => markCompleted(item._id)}>
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