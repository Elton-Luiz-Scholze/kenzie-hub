import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
// import { ListTechs } from "../components/ListTechs";
import { RequestApi } from "../requests/RequestApi";
import { UserContext } from "./UserContext";
export const TechContext = createContext({});

export function TechProvider({ children }) {
  const { user, setUser } = useContext(UserContext);
  const [addModal, setAddModal] = useState(false);
  const [techs, setTechs] = useState(user.techs);
  const [loading, setLoading] = useState(false);

  async function createTechs(data) {
    const token = localStorage.getItem("@kenzieHubToken");
    if (token) {
      try {
        setLoading(true);
        const response = await RequestApi.post("users/techs", data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // const newData = await RequestApi.get("profile", {
        //   headers: {
        //     Authorization: `Bearer ${token}`,
        //   },
        // });
        toast.success("Tecnologia cadastrada com sucesso!");
        setUser([...techs, response]);
        setAddModal(false);
      } catch {
        toast.error("Ops, algo deu errado!");
      } finally {
        setLoading(false);
      }
    }
  }

  async function deleteTechs(id) {
    const token = localStorage.getItem("@kenzieHubToken");
    if (token) {
      try {
        setLoading(true);
        const response = await RequestApi.delete(`users/techs/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // const newData = await RequestApi.get("profile", {
        //   headers: {
        //     Authorization: `Bearer ${token}`,
        //   },
        // });
        setTechs({ ...techs, response });
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
        loading,
        setLoading,
        techs,
        addModal,
        setAddModal,
      }}
    >
      {children}
    </TechContext.Provider>
  );
}
