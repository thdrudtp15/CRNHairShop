import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Reservation from "./pages/Reservation";
import About from "./pages/About";
import Notice from "./pages/Notice";
import Gellary from "./pages/Gellary";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      {/* <Route path="/:id/:detail" element={<Reserve />} /> */}
      <Route path="/reserve/:detail" element={<Reservation />} />
      <Route path="/about/:detail" element={<About />} />
      <Route path="/notice/:detail" element={<Notice />} />
      <Route path="/gellary/:detail" element={<Gellary />} />
      <Route path="/gellary/:number" element={<Gellary />} />
    </Routes>
  );
}

export default App;
