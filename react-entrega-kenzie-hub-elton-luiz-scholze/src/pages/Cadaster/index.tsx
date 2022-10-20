import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, Forms } from "../../styles/Forms";
import { cadasterSchema } from "./cadasterSchema";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Nav } from "../../styles/Nav";
import logo from "../../assets/Logo.svg";

interface iUserCadaster {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  bio: string;
  contact: string;
  course_module: string;
}

export function Cadaster() {
  const [loading, setLoading] = useState(false);
  const { userCadaster } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserCadaster>({
    resolver: yupResolver(cadasterSchema),
  });

  async function onSubmitFunction(data: iUserCadaster) {
    userCadaster(data, setLoading);
  }

  return (
    <Container>
      <Nav>
        <img src={logo} alt="Logo Kenzie Hub" />
        <Link to={"/"}>Voltar</Link>
      </Nav>
      <Forms onSubmit={handleSubmit(onSubmitFunction)}>
        <h2>Crie sua conta</h2>
        <span>Rápido e grátis, vamos nessa</span>

        <label htmlFor="name">Nome</label>
        <input
          id="name"
          type="text"
          placeholder="Digite aqui seu nome"
          {...register("name")}
        />
        <p>{errors.name?.message}</p>

        <label htmlFor="email">Email</label>
        <input
          id="email"
          placeholder="Digite aqui seu email"
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

        <label htmlFor="passwordConfirm">Confirmar Senha</label>
        <input
          id="passwordConfirm"
          type="password"
          placeholder="Digite novamente sua senha"
          {...register("passwordConfirm")}
        />
        <p>{errors.passwordConfirm?.message}</p>

        <label htmlFor="bio">Bio</label>
        <input
          id="bio"
          type="text"
          placeholder="Fale sobre você"
          {...register("bio")}
        />
        <p>{errors.bio?.message}</p>

        <label htmlFor="contact">Contato</label>
        <input
          id="contact"
          type="text"
          placeholder="Opção de contato"
          {...register("contact")}
        />
        <p>{errors.contact?.message}</p>

        <label htmlFor="course_module">Selecionar módulo</label>
        <select id="course_module" {...register("course_module")}>
          <option value="">Selecione...</option>
          <option value="1º modulo">1º Módulo</option>
          <option value="2º modulo">2º Módulo</option>
          <option value="3º Módulo">3º Módulo</option>
          <option value="4º Módulo">4º Módulo</option>
          <option value="5º Módulo">5º Módulo</option>
          <option value="6º Módulo">6º Módulo</option>
        </select>
        <p>{errors.course_module?.message}</p>

        <button type="submit" disabled={loading}>
          {loading ? "Cadastrando..." : "Cadastrar"}
        </button>
      </Forms>
    </Container>
  );
}
