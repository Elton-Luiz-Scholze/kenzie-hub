import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { RequestApi } from "../requests/RequestApi";
import { UserContext } from "./UserContext";
export const TechContext = createContext({});

export function TechProvider({ children }) {
  const { techs, setTechs } = useContext(UserContext);
  const [addModal, setAddModal] = useState(false);
  const [loading, setLoading] = useState(false);

  async function createTechs(data) {
    const token = localStorage.getItem("@kenzieHubToken");

    if (token) {
      try {
        setLoading(true);
        const response = await RequestApi.post("users/techs", data, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
        setTechs([...techs, response.data]);
        toast.success("Tecnologia cadastrada com sucesso!");
      } catch {
        toast.error("Ops, algo deu errado!");
      } finally {
        setAddModal(false);
        setLoading(false);
      }
    }
  }

  async function deleteTechs(id) {
    const token = localStorage.getItem("@kenzieHubToken");
    if (token) {
      try {
        setLoading(true);
        await RequestApi.delete(`users/techs/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const response = await RequestApi.get("profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTechs(response.data.techs);
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
