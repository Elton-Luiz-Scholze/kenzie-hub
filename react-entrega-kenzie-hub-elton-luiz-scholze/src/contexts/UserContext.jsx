import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { RequestApi } from "../requests/RequestApi";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [user, setUser] = useState({});
  const [currentRoute, setCurrentRoute] = useState(null);
  const [techs, setTechs] = useState([]);
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
          setTechs(response.data.techs);
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
      setTechs(response.data.user.techs);
      toast.success("Login realizado com sucesso!");
      navigate("/home");
    } catch (error) {
      toast.error("Email ou senha incorretos!!!");
    } finally {
      setLoading(false);
    }
  }

  function logout() {
    localStorage.removeItem("@kenzieHubToken");
    localStorage.removeItem("@kenzieHubUserId");
    toast.success("Sessão finalizada com sucesso");
  }

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        techs,
        userCadaster,
        userLogin,
        logout,
        currentRoute,
        setCurrentRoute,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
