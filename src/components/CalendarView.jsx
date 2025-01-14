import React from "react";
import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

const CalendarView = ({ localizer, events, onSelectEvent }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 h-[600px] lg:w-[1100px]">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "100%" }}
        onSelectEvent={onSelectEvent}
      />
    </div>
  );
};

export default CalendarView;
