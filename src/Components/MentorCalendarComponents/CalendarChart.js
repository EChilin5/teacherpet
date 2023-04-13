import React, { useState } from "react";
import Calendar from "react-calendar";
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
} from "@syncfusion/ej2-react-schedule";

const CalendarChart = () => {
  const [date, setDate] = useState(new Date());

  const data = [
    {
      Id: 2,
      Subject: "Meeting",
      StartTime: new Date(2018, 1, 15, 10, 0),
      EndTime: new Date(2018, 1, 15, 12, 30),
      IsAllDay: false,
      Status: "Completed",
      Priority: "High",
    },
  ];
  const fieldsData = {
    id: "Id",
    subject: { name: "Subject" },
    isAllDay: { name: "IsAllDay" },
    startTime: { name: "StartTime" },
    endTime: { name: "EndTime" },
  };
  const eventSettings = { dataSource: data, fields: fieldsData };
  return (
    <div>
      Calendar
      <div className="calendar-container">
        <ScheduleComponent
          height="550px"
          selectedDate={new Date(2023, 4, 13)}
          eventSettings={eventSettings}
        >
          <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
        </ScheduleComponent>
      </div>
      <div className="text-center">Selected date: {date.toDateString()}</div>
    </div>
  );
};

export default CalendarChart;
