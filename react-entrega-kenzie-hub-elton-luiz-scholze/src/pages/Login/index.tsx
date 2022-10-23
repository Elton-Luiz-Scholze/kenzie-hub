import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, Forms } from "../../styles/Forms";
import { loginSchema } from "./loginSchema";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import "react-toastify/dist/ReactToastify.css";
import { useUserContext } from "../../contexts/UserContext";
import { iUserLogin } from "../../requests/RequestUserLogin";

export function Login() {
  const { userLogin, loading } = useUserContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserLogin>({
    resolver: yupResolver(loginSchema),
  });

  async function onSubmitFunction(data: iUserLogin) {
    userLogin(data);
  }

  return (
    <Container>
      <img src={logo} alt="Logo Kenzie Hub" />
      <Forms onSubmit={handleSubmit(onSubmitFunction)}>
        <h2>Login</h2>

        <label htmlFor="email">Email</label>
        <input
          id="email"
          placeholder="Digite aqui seu Email"
          {...register("email")}
        />
        <p>{errors.email?.message}</p>

        <label htmlFor="password">Senha</label>
        <input
          id="password"
          type="password"
          placeholder="Digite aqui sua senha"
          {...register("password")}
        />
        <p>{errors.password?.message}</p>

        <button type="submit" disabled={loading}>
          {loading ? "Entrando..." : "Entrar"}
        </button>

        <span>Ainda não possui conta?</span>
        <Link to={"/cadaster"}>Cadastre-se</Link>
      </Forms>
    </Container>
  );
}
