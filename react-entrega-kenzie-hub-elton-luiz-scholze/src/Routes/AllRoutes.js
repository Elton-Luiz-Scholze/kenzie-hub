import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { Cadaster } from "../pages/Cadaster";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

export function AllRoutes() {
  const { user } = useContext(UserContext);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home user={user} />} />
      <Route path="/cadaster" element={<Cadaster />} />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
}
