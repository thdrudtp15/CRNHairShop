import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Pra from "./pages/Pra";
import Reserve from "./pages/Reserve";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/:id/:detail" element={<Reserve />} />
      <Route path="/p" element={<Pra />} />
    </Routes>
  );
}

export default App;
