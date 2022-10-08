import { Route, Routes } from "react-router-dom";
import { Cadaster } from "../pages/Cadaster";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

export function AllRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadaster" element={<Cadaster />} />
    </Routes>
  );
}
