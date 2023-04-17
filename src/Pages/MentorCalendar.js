import React from "react";
import Button from "react-bootstrap/esm/Button";
import AppointmentForm from "../Components/MentorCalendarComponents/AppointmentForm";
import CalendarChart from "../Components/MentorCalendarComponents/CalendarChart";
import Image from "react-bootstrap/esm/Image";
import "react-calendar/dist/Calendar.css";
import "./MentorCalendar.css";

const MentorCalendar = () => {
  return (
    <div className="mentor-calendar-main">
      <div className="mentor-calendar-header">
        <div className="mentor-info">
          <h1>Mentor Edgar Information Section</h1>
          <h4>Professional: Math wiz</h4>
          <h4>Approval rating: 5 stars</h4>
          <h4>Email: email@test.com</h4>
        </div>
        <div className="mentor-image">
          <Image
            src="data:image/png;base64,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"
            alt="person"
          />
        </div>
      </div>
      <div className="calendar-section">
        <CalendarChart />{" "}
      </div>
      <div className="appointment-section">
        <AppointmentForm />
      </div>

      <div className="rating"></div>
    </div>
  );
};

export default MentorCalendar;
