import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../assets/Logo.svg";
import { Nav } from "../../styles/Nav";
import { Header, Main } from "./style";

export function Home({ user }) {
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
        <div>
          <h2>Que pena! Estamos em desenvolvimento :(</h2>
          <p>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </p>
        </div>
      </Main>
    </>
  );
}
