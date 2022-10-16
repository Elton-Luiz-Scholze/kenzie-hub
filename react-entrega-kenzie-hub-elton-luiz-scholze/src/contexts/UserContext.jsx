import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { RequestApi } from "../requests/RequestApi";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function autoLogin() {
      const token = localStorage.getItem("@kenzieHubToken");

      if (token) {
        try {
          const response = await RequestApi.get("profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
          navigate("/home");
        } catch {
          localStorage.removeItem("@kenzieHubToken");
          toast.error("Ops, algo deu errado!");
          navigate("/");
        }
      }
    }
    autoLogin();
  }, []);

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
      setUser(response.data);
      toast.success("Login realizado com sucesso!");
      navigate("/home");
    } catch (error) {
      toast.error("Email ou senha incorretos!!!");
    } finally {
      setLoading(false);
    }
  }
  return (
    <UserContext.Provider value={{ user, setUser, userCadaster, userLogin }}>
      {children}
    </UserContext.Provider>
  );
}
