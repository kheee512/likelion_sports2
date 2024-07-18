import { Route, Routes } from "react-router-dom";
// import Auth from "./components/Auth";
import CalendarScreen from "./pages/CalendarScree";
import Login from "./pages/Login";
// import Home from "./components/Home";
// import KakaoLogin from "./components/KakaoLogin";

// <Route path="/" element={<KakaoLogin />} />
// <Route path="/auth/kakao" element={<Auth />} />
// <Route path="/home" element={<Home />} />
// <Route path="/calendar" element={<Calendar />} />

function App() {
  return (
    <div className="App">
      <Routes>
        
        
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Home />}></Route>
        <Route path="/calendar/:sport" element={<CalendarScreen />} />
        
      </Routes>
    </div>
  );
}

export default App;
