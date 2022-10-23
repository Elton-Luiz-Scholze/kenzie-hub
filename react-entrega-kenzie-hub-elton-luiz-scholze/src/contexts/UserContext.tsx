import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { RequestUserCadaster } from "../requests/RequestUserCadaster";
import { iUserCadaster } from "../requests/RequestUserCadaster";
import {
  iUserLogin,
  iUserLoginResponse,
  RequestUserLogin,
} from "../requests/RequestUserLogin";
import { RequestUserAutoLogin } from "../requests/RequestUserAutoLogin";

interface iUserContextProps {
  children: ReactNode;
}

interface iUserContext {
  user: iUserLoginResponse | null;
  setUser: Dispatch<SetStateAction<iUserLoginResponse | null>>;
  currentRoute: null | string;
  setCurrentRoute: Dispatch<SetStateAction<null | string>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  userCadaster: (dataUser: iUserCadaster) => void;
  userLogin: (dataUser: iUserLogin) => void;
  logout: () => void;
}

export const UserContext = createContext({} as iUserContext);

export function UserProvider({ children }: iUserContextProps) {
  const [user, setUser] = useState<iUserLoginResponse | null>(null);
  const [currentRoute, setCurrentRoute] = useState<null | string>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("@kenzieHubToken");

  useEffect(() => {
    async function autoLogin() {
      if (token) {
        try {
          const data = await RequestUserAutoLogin();
          setUser(data);
          navigate("/home");
        } catch {
          localStorage.removeItem("@kenzieHubToken");
          toast.error("Ops, algo deu errado!");
          navigate("/");
        }
      }
    }
    autoLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function userCadaster(dataUser: iUserCadaster) {
    try {
      setLoading(true);
      await RequestUserCadaster(dataUser);
      toast.success("Conta criada com sucesso!");
      navigate("/");
    } catch {
      toast.error("Ops! Algo deu errado.");
    } finally {
      setLoading(false);
    }
  }

  async function userLogin(dataUser: iUserLogin) {
    try {
      setLoading(true);
      const data = await RequestUserLogin(dataUser);
      localStorage.setItem("@kenzieHubToken", data.token);
      setUser(data);
      toast.success("Login realizado com sucesso!");
      navigate("/home");
    } catch {
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
        loading,
        setLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext(): iUserContext {
  const context = useContext(UserContext);

  return context;
}
