import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { RequestApi } from "../requests/RequestApi";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

export function TechProvider({ children }) {
  const { setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  async function createTechs(data) {
    const token = localStorage.getItem("@kenzieHubToken");
    if (token) {
      try {
        setLoading(true);
        await RequestApi.post("users/techs", data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const newData = await RequestApi.get("profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(newData);
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
        await RequestApi.delete(`users/techs/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const newData = await RequestApi.get("profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(newData);
      } catch {
        toast.error("Ops, algo deu errado!");
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <TechContext.Provider
      value={{ createTechs, deleteTechs, loading, setLoading }}
    >
      {children}
    </TechContext.Provider>
  );
}
