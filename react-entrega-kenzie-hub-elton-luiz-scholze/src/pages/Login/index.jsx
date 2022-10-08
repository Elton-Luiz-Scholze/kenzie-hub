import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Forms } from "../../components/Form/style";
import { loginSchema } from "./loginSchema";
import { RequestApi } from "../../requests/RequestApi";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Login({ setUser }) {
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("@kenzieHubToken");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  });

  async function onSubmitFunction(data) {
    try {
      setLoading(true);
      const response = await RequestApi.post("sessions", data);
      localStorage.setItem("@kenzieHubToken", response.data.token);
      localStorage.setItem("@kenzieHubUserId", response.data.user.id);
      setUser({
        name: response.data.user.name,
        course_module: response.data.user.course_module,
      });
      toast.success("Login realizado com sucesso!");
      navigate("/home");
    } catch (error) {
      toast.error("Email ou senha incorretos!!!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Forms onSubmit={handleSubmit(onSubmitFunction)}>
      <h2>Login</h2>

      <label htmlFor="email">Nome</label>
      <input id="email" {...register("email")} />
      <p>{errors.email?.message}</p>

      <label htmlFor="password">Senha</label>
      <input id="password" type="password" {...register("password")} />
      <p>{errors.password?.message}</p>

      <button type="submit" disabled={loading}>
        {loading ? "Entrando..." : "Entrar"}
      </button>

      <span>Ainda não possui conta?</span>
      <Link to={"/cadaster"}>Cadastre-se</Link>
    </Forms>
  );
}
