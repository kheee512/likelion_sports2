import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Calendar.css";
import { useParams } from "react-router-dom";

function Calendar() {
  const { sport } = useParams();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents(sport);
  }, [sport]);

  const fetchEvents = async (sport) => {
    try {
      const access_token = localStorage.getItem("access_token"); // 실제 액세스 토큰 값으로 대체
      // const sport_id = "your_sport_id_here"; // 실제 sport_id 값으로 대체
      // const team_id = "your_team_id_here"; // 실제 team_id 값으로 대체

      const response = await axios.post(
        `https://localhost:8000/select-team`,
        {
          sport_name: sport,
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

  // const events = [
  //   {
  //     date: "2023-08-01T12:00:00Z",
  //     time: "12:00",
  //     ourTeam: "Team A",
  //     opponentTeam: "Team B",
  //   },
  //   {
  //     date: "2023-08-01T15:00:00Z",
  //     time: "15:00",
  //     ourTeam: "Team C",
  //     opponentTeam: "Team D",
  //   },
  //   {
  //     date: "2023-08-02T18:00:00Z",
  //     time: "18:00",
  //     ourTeam: "Team E",
  //     opponentTeam: "Team F",
  //   },
  // ];

  // 8월 달력 배열 생성
  const augustDays = Array.from({ length: 31 }, (_, i) => i + 1);

  // 날짜별로 이벤트를 그룹화합니다.
  const eventsByDate = events.reduce((acc, event) => {
    const date = new Date(event.date).getDate(); // 이벤트 날짜의 일(day)을 추출합니다.
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(event);
    return acc;
  }, {});

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div>
      <div className="calendar-title">
        <h1>
          <span className="highlight">{sport}</span> August schedule
        </h1>
      </div>
      <div className="calendar">
        <div className="calendar-weekdays">
          {weekdays.map((day, index) => (
            <div key={index} className="calendar-weekday">
              {day}
            </div>
          ))}
        </div>
        <div className="calendar-days">
          {augustDays.map((day) => (
            <div
              key={day}
              className="calendar-day"
              style={day === 1 ? { gridColumnStart: 5 } : {}}
            >
              <h2>8월 {day}일</h2>
              {eventsByDate[day] ? (
                <ul>
                  {eventsByDate[day].map((event, index) => (
                    <li key={index}>
                      {event.time} - {event.ourTeam} vs {event.opponentTeam} -
                      결과: {event.score}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>경기 없음</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
