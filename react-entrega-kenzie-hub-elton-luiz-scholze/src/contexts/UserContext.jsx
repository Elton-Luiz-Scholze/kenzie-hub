import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { iTechRegister } from "../components/Modal";
import { RequestApi } from "../requests/RequestApi";
import { RequestUserCadaster } from "../requests/RequestUserCadaster";
import { TechContext, useTechContext } from "./TechContext";

// export interface iUser {
//   user: {
//     id: string;
//     name: string;
//     email: string;
//     course_module: string;
//     bio: string;
//     contact: string;
//     techs: iTechRegister;
//   };
// }

// interface iUserContextProps {
//   children: ReactNode;
// }

// interface iUserContext {

// }

export const UserContext = createContext({});

export function UserProvider({ children }) /*: iUserContextProps)*/ {
  const { addModal } = useContext(TechContext);
  const [user, setUser] = useState({});
  const [currentRoute, setCurrentRoute] = useState(null);
  const { setTechs } = useTechContext();
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
  }, [addModal]);

  async function userCadaster(dataUser, setLoading) {
    try {
      setLoading(true);
      await RequestUserCadaster(dataUser);
      await RequestApi.post("users", dataUser);
      toast.success("Conta criada com sucesso!");
      navigate("/");
    } catch {
      toast.error("Ops! Algo deu errado.");
    } finally {
      setLoading(false);
    }
  }

  async function userLogin(dataUser, setLoading) {
    try {
      setLoading(true);
      const response = await RequestApi.post("sessions", dataUser);
      localStorage.setItem("@kenzieHubToken", response.data.token);
      setUser(response.data.user);
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
