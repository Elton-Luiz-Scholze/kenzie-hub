import { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../../contexts/UserContext";
import logo from "../../assets/Logo.svg";
import { Nav } from "../../styles/Nav";
import { Header, Main } from "./style";

export function Home() {
  const { user } = useContext(UserContext);
  console.log(user);

  function logout() {
    localStorage.removeItem("@kenzieHubToken");
    localStorage.removeItem("@kenzieHubUserId");
    toast.success("Sessão finalizada com sucesso");
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
        {user.techs.length ? (
          <ul>
            {user.techs.map(({ title, status }, index) => (
              <li key={index}>
                <h3>{title}</h3>
                <p>{status}</p>
              </li>
            ))}
          </ul>
        ) : (
          <div>
            <h2>Que pena! Você ainda não possui tecnologias cadastradas :(</h2>
          </div>
        )}
      </Main>
    </>
  );
}
