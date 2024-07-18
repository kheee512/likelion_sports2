import Calendar from "./Calendar";
import "../styles/CalendarScreen.css";
import ad1 from "../images/ad1.png";
import ad2 from "../images/ad2.png";

function CalendarScreen() {
  return (
    <div className="calendar-screen">
      <div className="nav-bar"></div>
      <div className="content">
        <div className="side-bar">
          <div className="profile"></div>
          <div className="advertise">
            <h2>Advertisement based on user</h2>
            <img
              src={ad1}
              alt="광고 사진"
              className="ad"
            />
            <img
              src={ad2}
              alt="광고 사진"
              className="ad"
            />
          </div>
        </div>
        <div className="calendar">
          <Calendar />
        </div>
      </div>
    </div>
  );
}

export default CalendarScreen;
