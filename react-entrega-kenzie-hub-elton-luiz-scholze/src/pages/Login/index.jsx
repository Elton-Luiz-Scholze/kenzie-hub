import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, Forms } from "../../styles/Forms";
import { loginSchema } from "./loginSchema";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import logo from "../../assets/Logo.svg";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../contexts/UserContext";

export function Login() {
  const [loading, setLoading] = useState(false);
  const { userLogin } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  async function onSubmitFunction(data) {
    userLogin(data, setLoading);
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
