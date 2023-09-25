import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Reservation from "./pages/Reservation";
import About from "./pages/About";
import Notice from "./pages/Notice";
import Gellary from "./pages/Gellary";
import Login from "./pages/Login";
import NoticeWrite from "./pages/NoticeWrite";
import NoticeEdit from "./pages/NoticeEdit";
import GellaryWrite from "./pages/GellaryWrite";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/reserve" element={<Reservation />} />
      <Route path="/about" element={<About />} />
      <Route path="/notice" element={<Notice />} />
      <Route path="/gellary" element={<Gellary />} />
      <Route path="/gellary/:number" element={<Gellary />} />
      <Route path="/login" element={<Login />} />
      <Route path="/notice/write" element={<NoticeWrite />} />
      <Route path="/notice/edit/:id" element={<NoticeEdit />} />
      <Route path="/gellary/write" element={<GellaryWrite />} />
    </Routes>
  );
}

export default App;
