import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/NavigationMenu.css";

function NavigationMenu() {
  const navigate = useNavigate();
  const [pendingBooking, setPendingBooking] = useState(null);
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  useEffect(() => {
    const savedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    const activeCheckIn = savedBookings.find((b) => b.status === "Booking pending");
    const activeCheckOut = savedBookings.find((b) => b.status === "Booking confirmed");

    setPendingBooking(activeCheckIn);
    setConfirmedBooking(activeCheckOut);
  }, []);

  const handleCheckInNavigation = () => {
    if (pendingBooking) {
      navigate(`/checkin/${pendingBooking.id}`);
    } else {
      alert("No active bookings available for check-in.");
    }
  };

  const handleCheckOutNavigation = () => {
    if (confirmedBooking) {
      navigate(`/checkout/${confirmedBooking.id}`);
    } else {
      alert("No confirmed bookings available for check-out.");
    }
  };

  return (
    <nav className="nav-container">
      <div className="nav-logo">ParkNow</div>
      <ul className="nav-links">
        <li onClick={() => navigate("/home")} className="nav-item">
          Search Booking
        </li>
        <li onClick={() => navigate("/home")} className="nav-item">
          Cancel Booking
        </li>
        <li onClick={handleCheckInNavigation} className="nav-item">
          Check In
        </li>
        <li onClick={handleCheckOutNavigation} className="nav-item">
          Check Out
        </li>
      </ul>
    </nav>
  );
}

export default NavigationMenu;
