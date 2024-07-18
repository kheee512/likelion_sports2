import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  CalendarContainer, CalendarBackground, CalendarHeader, CalendarHeaderText, 
  CalendarLine, CalendarVerticalLine, MonthCircle, MonthText, 
  WeekdaysContainer, Weekday, DaysContainer, Day, 
  VerticalDaysContainer, VerticalDay
} from "../styles/CalendarStyle";
import icon_1 from "../images/기아-logo.png";
import icon_2 from "../images/두산-logo.png";
import icon_3 from "../images/롯데-logo.png";
import icon_4 from "../images/삼성-logo.png";
import icon_5 from "../images/키움-logo.png";
import icon_6 from "../images/한화-logo.png";
import icon_7 from "../images/kt-logo.png";
import icon_8 from "../images/lg-logo.png";
import icon_9 from "../images/nc-logo.png";
import icon_10 from "../images/ssg-logo.png";

const Calendar = () => {
  const { sport } = useParams();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents(sport);
  }, [sport]);

  const fetchEvents = async (sport) => {
    try {
      const access_token = localStorage.getItem("access_token");
      const response = await axios.post(
        `http://localhost:8000/select-team`,
        {
          sport_name: "야구",
          team_name: "삼성",
        },
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      setEvents(response.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const teamLogos = {
    기아: icon_1,
    두산: icon_2,
    롯데: icon_3,
    삼성: icon_4,
    키움: icon_5,
    한화: icon_6,
    kt: icon_7,
    lg: icon_8,
    nc: icon_9,
    ssg: icon_10,
  };

  const augustDays = Array.from({ length: 31 }, (_, i) => i + 1);

  const eventsByDate = events.reduce((acc, event) => {
    const date = new Date(event.date).getDate();
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(event);
    return acc;
  }, {});

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <CalendarContainer>
      <CalendarBackground />
      <CalendarHeader />
      <CalendarHeaderText>Calendar</CalendarHeaderText>
      <CalendarLine />
      <CalendarVerticalLine />
      <MonthCircle />
      <MonthText>8</MonthText>
      <WeekdaysContainer>
        {weekdays.map((day, index) => (
          <Weekday key={index}>{day}</Weekday>
        ))}
      </WeekdaysContainer>
      <DaysContainer>
        {augustDays.map((day) => (
          <Day key={day}>
            <div>{day}</div>
            {eventsByDate[day] ? (
              eventsByDate[day].map((event, index) => (
                <div key={index}>
                  {event.time} - {event.ourTeam} vs {event.opponentTeam}
                  {teamLogos[event.opponentTeam] && (
                    <img
                      src={teamLogos[event.opponentTeam]}
                      alt={`${event.opponentTeam} logo`}
                      className="team-logo"
                      style={{ width: '30px', height: '30px' }}
                    />
                  )}
                </div>
              ))
            ) : (
              <div></div>
            )}
          </Day>
        ))}
      </DaysContainer>
      <VerticalDaysContainer>
        {[1, 2, 3, 4, 5].map((day, index) => (
          <VerticalDay key={index}>{day}</VerticalDay>
        ))}
      </VerticalDaysContainer>
    </CalendarContainer>
  );
};

export default Calendar;