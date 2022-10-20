import { FaRegTrashAlt } from "react-icons/fa";
import { useTechContext } from "../../contexts/TechContext";
import { List } from "./style";

interface iListTechsProps {
  title: string;
  status: string;
  id: string;
}

export function ListTechs({ title, status, id } : iListTechsProps) {
  const {deleteTechs} = useTechContext();

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
