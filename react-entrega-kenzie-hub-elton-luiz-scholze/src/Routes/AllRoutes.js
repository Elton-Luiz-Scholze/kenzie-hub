import { Navigate, Route, Routes } from "react-router-dom";
import { Cadaster } from "../pages/Cadaster";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

export function AllRoutes({ user, setUser }) {
  return (
    <Routes>
      <Route path="/" element={<Login setUser={setUser} />} />
      <Route path="/home" element={<Home user={user} />} />
      <Route path="/cadaster" element={<Cadaster />} />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
}
