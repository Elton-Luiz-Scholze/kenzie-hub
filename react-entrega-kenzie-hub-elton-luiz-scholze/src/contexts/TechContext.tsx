import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { toast } from "react-toastify";
import { iTech } from "../components/Modal";
// import { RequestApi } from "../requests/RequestApi";
import {
  iTechRegister,
  RequestCreateTechs,
} from "../requests/RequestCreateTechs";
import { RequestDeleteTechs } from "../requests/RequestDeleteTechs";
// import { iUserLoginResponse } from "../requests/RequestUserLogin";

export interface iTechs {
  id: string;
  title: string;
  status: string;
}

interface iTechContextProps {
  children: ReactNode;
}

interface iTechContext {
  addModal: boolean;
  setAddModal: Dispatch<SetStateAction<boolean>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  createTechs: (dataTech: iTech) => void;
  deleteTechs: (id: string) => void;
  techs: iTechs[];
  setTechs: Dispatch<SetStateAction<iTechs[]>>;
}

export const TechContext = createContext<iTechContext>({} as iTechContext);

export function TechProvider({ children }: iTechContextProps) {
  const [techs, setTechs] = useState<iTechs[]>([]);
  const [addModal, setAddModal] = useState(false);
  const [loading, setLoading] = useState(false);

  async function createTechs(dataTech: iTechRegister) {
    const token = localStorage.getItem("@kenzieHubToken");

    if (token) {
      try {
        setLoading(true);
        const response = await RequestCreateTechs(token, dataTech);
        toast.success("Tecnologia cadastrada com sucesso!");
        setTechs([...techs, response]);
      } catch {
        toast.error("Ops, algo deu errado!");
      } finally {
        setAddModal(false);
        setLoading(false);
      }
    }
  }

  async function deleteTechs(id: string) {
    const token = localStorage.getItem("@kenzieHubToken");
    const techsFiltered = techs.filter((tech) => tech.id !== id);
    if (token) {
      try {
        setLoading(true);
        await RequestDeleteTechs(token, id);
        // const response = await RequestApi.get<iUserLoginResponse>("profile", {
        //   headers: {
        //     Authorization: `Bearer ${token}`,
        //   },
        // });
        setTechs(techsFiltered);
        toast.success("Tecnologia deletada com sucesso!");
      } catch {
        toast.error("Ops, algo deu errado!");
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <TechContext.Provider
      value={{
        createTechs,
        deleteTechs,
        techs,
        setTechs,
        loading,
        setLoading,
        addModal,
        setAddModal,
      }}
    >
      {children}
    </TechContext.Provider>
  );
}

export function useTechContext(): iTechContext {
  const context = useContext(TechContext);

  return context;
}
