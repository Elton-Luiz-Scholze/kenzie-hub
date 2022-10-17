import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "../components/ProtectedRoutes";
import { Cadaster } from "../pages/Cadaster";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

export function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route element={<ProtectedRoutes />}>
        <Route path="/home" element={<Home />} />
      </Route>

      <Route path="/cadaster" element={<Cadaster />} />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
}
