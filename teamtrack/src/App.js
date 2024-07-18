import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CalendarScreen from "./pages/CalendarScree";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/calendar/:sport" element={<CalendarScreen />} />
      </Routes>
    </div>
  );
}

export default App;
