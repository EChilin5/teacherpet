import React from "react";
import Button from "react-bootstrap/esm/Button";
import AppointmentForm from "../Components/MentorCalendarComponents/AppointmentForm";

const MentorCalendar = () => {
  return (
    <div>
      <div>
        <h1>Mentor's Information Section</h1>
      </div>
      <div className="personal-details">
        <h4>Professional: Math wiz</h4>
        <h4>Approval rating: 5 stars</h4>
        <h4>Email: email@test.com</h4>
      </div>
      <div className="calendar-section"></div>
      <div className="appointment-section">
        <AppointmentForm />
      </div>

      <div className="rating"></div>
    </div>
  );
};

export default MentorCalendar;
