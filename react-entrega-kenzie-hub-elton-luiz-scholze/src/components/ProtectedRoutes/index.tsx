import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";

export default function ProtectedRoutes() {
  const { user } = useUserContext();

  return user ? <Outlet /> : <Navigate to="/" replace />;
}
