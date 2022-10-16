import { IoMdAdd } from "react-icons/io";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../../contexts/UserContext";
import logo from "../../assets/Logo.svg";
import { Nav } from "../../styles/Nav";
import { Header, Main } from "./style";
import { ListTechs } from "../../components/ListTechs";
import { Modal } from "../../components/Modal";

export function Home() {
  const [addModal, setAddModal] = useState(false);
  const { user } = useContext(UserContext);

  function logout() {
    localStorage.removeItem("@kenzieHubToken");
    localStorage.removeItem("@kenzieHubUserId");
    toast.success("Sessão finalizada com sucesso");
  }

  function showModal() {
    setAddModal(true);
  }

  return (
    <>
      <Nav>
        <img src={logo} alt="Logo Kenzie Hub" />
        <Link to={"/"} onClick={logout}>
          Sair
        </Link>
      </Nav>
      <Header>
        <div>
          <h2>Olá, {user.name}</h2>
          <p>{user.course_module}</p>
        </div>
      </Header>
      <Main>
        <div>
          <h2>Tecnologias</h2>
          <button type="button" onClick={showModal}>
            <IoMdAdd />
          </button>
        </div>

        {user.techs.length ? (
          <ul>
            {user.techs.map(({ title, status, id }) => (
              <ListTechs key={id} title={title} status={status} id={id} />
            ))}
          </ul>
        ) : (
          <div>
            <h2>Que pena! Você ainda não possui tecnologias cadastradas :(</h2>
          </div>
        )}
      </Main>
      {addModal ? <Modal setAddModal={setAddModal} /> : <></>}
    </>
  );
}
