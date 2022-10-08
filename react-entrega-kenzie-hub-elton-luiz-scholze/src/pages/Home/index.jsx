import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../assets/Logo.svg";

export function Home({ user }) {
  function logout() {
    localStorage.removeItem("@kenzieHubToken");
    localStorage.removeItem("@kenzieHubUserId");
    toast.success("Logout realizado com sucesso");
  }

  return (
    <>
      <nav>
        <img src={logo} alt="Logo Kenzie Hub" />
        <Link to={"/"} onClick={logout}>
          Sair
        </Link>
      </nav>
      <header>
        <h2>{user.name}</h2>
        <p>{user.course_module}</p>
      </header>
      <main>
        <h3>Que pena! Estamos em desenvolvimento :(</h3>
        <p>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </p>
      </main>
    </>
  );
}
