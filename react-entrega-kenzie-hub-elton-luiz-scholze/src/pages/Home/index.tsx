import { IoMdAdd } from "react-icons/io";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";
import logo from "../../assets/Logo.svg";
import { Nav } from "../../styles/Nav";
import { Header, Main } from "./style";
import { ListTechs } from "../../components/ListTechs";
import { Modal } from "../../components/Modal";
import { TechContext, useTechContext } from "../../contexts/TechContext";
import { RequestApi } from "../../requests/RequestApi";

export function Home() {
  const { user, logout } = useUserContext();
  const { techs, setTechs } = useTechContext();
  const { addModal, setAddModal } = useContext(TechContext);

  useEffect(() => {
    const id = user?.user.id;

    async function userData() {
      const response = await RequestApi.get(`users/${id}`);
      setTechs(response.data.techs);
    }
    userData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <h2>Olá, {user?.user.name}</h2>
          <p>{user?.user.course_module}</p>
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
          {techs && techs.length > 0 ? (
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
