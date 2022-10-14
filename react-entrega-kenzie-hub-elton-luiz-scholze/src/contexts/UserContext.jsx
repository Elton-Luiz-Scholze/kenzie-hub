import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { RequestApi } from "../requests/RequestApi";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [user, setUser] = useState({});
  const token = localStorage.getItem("@kenzieHubToken");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  });

  async function userCadaster(data, setLoading) {
    try {
      setLoading(true);
      await RequestApi.post("users", data);
      toast.success("Conta criada com sucesso!");
      navigate("/");
    } catch {
      toast.error("Ops! Algo deu errado.");
    } finally {
      setLoading(false);
    }
  }

  async function userLogin(data, setLoading) {
    try {
      setLoading(true);
      const response = await RequestApi.post("sessions", data);
      localStorage.setItem("@kenzieHubToken", response.data.token);
      localStorage.setItem("@kenzieHubUserId", response.data.user.id);
      setUser(response.data.user);
      toast.success("Login realizado com sucesso!");
      navigate("/home");
    } catch (error) {
      toast.error("Email ou senha incorretos!!!");
    } finally {
      setLoading(false);
    }
  }
  return (
    <UserContext.Provider value={{ user, userCadaster, userLogin }}>
      {children}
    </UserContext.Provider>
  );
}
