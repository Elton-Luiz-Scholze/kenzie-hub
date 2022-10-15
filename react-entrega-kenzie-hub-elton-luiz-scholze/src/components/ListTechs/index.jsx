import { FaRegTrashAlt } from "react-icons/fa";
import { List } from "./style";

export function ListTechs({ title, status }) {
  return (
    <List>
      <h3>{title}</h3>
      <div>
        <p>{status}</p>
        <button type="button">
          <FaRegTrashAlt />
        </button>
      </div>
    </List>
  );
}
