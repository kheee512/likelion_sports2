import { Route, Routes } from "react-router-dom";
// import KakaoLogin from "./components/KakaoLogin";
import Login from "./pages/Login";
// import Home from "./components/Home";
// import Auth from "./components/Auth";
// import Calendar from "./components/Calendar";

// <Route path="/" element={<KakaoLogin />} />
// <Route path="/auth/kakao" element={<Auth />} />
// <Route path="/home" element={<Home />} />
// <Route path="/calendar" element={<Calendar />} />

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        
      </Routes>
    </div>
  );
}

export default App;
