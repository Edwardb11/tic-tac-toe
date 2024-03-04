import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/home/Home";
import Game from "../pages/game/Game";
import Navbar from "../components/navbar/Navbar";

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
