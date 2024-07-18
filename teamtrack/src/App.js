import { Route, Routes } from "react-router-dom";
// import Auth from "./components/Auth";
import CalendarScreen from "./pages/CalendarScreen";
import Login from "./pages/Login";
import Home from "./pages/Home";
import KakaoCallback from "./components/KakaoCallback";



function App() {
  return (
    <div className="App">
      <Routes>
        
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/auth/kakao"
          element={<KakaoCallback />}
        />
        <Route path="/calendar/:sport" element={<CalendarScreen />} />
        
      </Routes>
    </div>
  );
}

export default App;
