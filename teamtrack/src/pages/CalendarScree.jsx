import Calendar from "./Calendar";
import '../styles/CalendarScreen.css';

function CalendarScreen() {
  return (
    <div className="calendar-screen">
      <div className="nav-bar"></div>
      <div className="content">
        <div className="side-bar">
          <div className="profile">프로필</div>
          <div className="advertise">광고</div>
        </div>
        <div className="calendar">
          <Calendar />
        </div>
      </div>
    </div>
  );
}

export default CalendarScreen;
