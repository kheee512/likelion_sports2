import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Calendar.css";
import { useParams } from "react-router-dom";
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

  // 팀 이름에 따른 이미지 매핑 객체
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
    // 추가적인 팀과 로고 경로를 여기에 추가
  };

  // const events = [
  //   {
  //     date: "2023-08-01T12:00:00Z",
  //     time: "18:30",
  //     ourTeam: "삼성",
  //     opponentTeam: "lg",
  //   },
  //   {
  //     date: "2023-08-02T15:00:00Z",
  //     time: "18:30",
  //     ourTeam: "삼성",
  //     opponentTeam: "ssg",
  //   },
  //   {
  //     date: "2023-08-03T18:00:00Z",
  //     time: "18:00",
  //     ourTeam: "삼성",
  //     opponentTeam: "ssg",
  //   },
  //   {
  //     date: "2023-08-06T18:00:00Z",
  //     time: "18:00",
  //     ourTeam: "삼성",
  //     opponentTeam: "한화",
  //   },
  //   {
  //     date: "2023-08-07T18:00:00Z",
  //     time: "18:00",
  //     ourTeam: "삼성",
  //     opponentTeam: "한화",
  //   },
  //   {
  //     date: "2023-08-08T18:00:00Z",
  //     time: "18:00",
  //     ourTeam: "삼성",
  //     opponentTeam: "한화",
  //   },
  //   {
  //     date: "2023-08-09T18:00:00Z",
  //     time: "18:00",
  //     ourTeam: "삼성",
  //     opponentTeam: "기아",
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
                      {event.time} - {event.ourTeam} vs {event.opponentTeam}
                      {teamLogos[event.opponentTeam] && (
                        <img
                          src={teamLogos[event.opponentTeam]}
                          alt={`${event.opponentTeam} logo`}
                          className="team-logo"
                        />
                      )}
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
