import { IoMdAdd } from "react-icons/io";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import logo from "../../assets/Logo.svg";
import { Nav } from "../../styles/Nav";
import { Header, Main } from "./style";
import { ListTechs } from "../../components/ListTechs";
import { Modal } from "../../components/Modal";
import { TechContext } from "../../contexts/TechContext";

export function Home() {
  const { user, techs, logout } = useContext(UserContext);
  const { addModal, setAddModal } = useContext(TechContext);
  const {name, course_module} = user;

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
          <h2>Olá, {name}</h2>
          <p>{course_module}</p>
        </div>
      </Header>
      <Main>
        <div>
          <h2>Tecnologias</h2>
          <button type="button" onClick={showModal}>
            <IoMdAdd />
          </button>
        </div>

        <ul>
          {techs.length > 0 ? (
            techs.map((tech) => (
              <ListTechs
                key={tech.id}
                title={tech.title}
                status={tech.status}
                id={tech.id}
              />
            ))
          ) : (
            <div>
              <h2>
                Que pena! Você ainda não possui tecnologias cadastradas :(
              </h2>
            </div>
          )}
        </ul>
      </Main>
      {addModal ? <Modal /> : <></>}
    </>
  );
}
