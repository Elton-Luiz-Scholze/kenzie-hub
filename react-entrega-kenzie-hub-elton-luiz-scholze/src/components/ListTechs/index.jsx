import { useContext } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { TechContext } from "../../contexts/TechContext";
import { List } from "./style";

export function ListTechs({ title, status, id }) {
  const { deleteTechs } = useContext(TechContext);

  return (
    <List>
      <h3>{title}</h3>
      <div>
        <p>{status}</p>
        <button type="button" onClick={() => deleteTechs(id)}>
          <FaRegTrashAlt />
        </button>
      </div>
    </List>
  );
}
