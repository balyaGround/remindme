import React, { useState, useEffect } from "react";
import "../calendar/CobaCalendar.scss";
import buildCalendar from "./build";
// eslint-disable-next-line no-unused-vars
import dayStyles, { beforeToday } from "./styles";
import Header from "./Header";

export default function Calendar({ value, onChange }) {
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value]);

  return (
    <div className="calendar__container">
      <div className="calendar">
        <Header value={value} setValue={onChange} />
        <div className="body">
          <div className="day-names">
            {["S", "M", "T", "W", "T", "F", "S"].map((d, index) => (
              <div className="week" key={index}>
                {d}
              </div>
            ))}
          </div>
          {calendar.map((week, index) => (
            <div key={index}>
              {week.map((day, index) => (
                <div className="day" onClick={() => onChange(day)} key={index}>
                  <div className={dayStyles(day, value)}>
                    {day.format("D").toString()}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
