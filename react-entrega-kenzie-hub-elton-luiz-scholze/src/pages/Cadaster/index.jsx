import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Forms } from "../../components/Form/style";
import { cadasterSchema } from "./cadasterSchema";
import { RequestApi } from "../../requests/RequestApi";

export function Cadaster() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(cadasterSchema),
  });

  async function onSubmitFunction(data) {
    try {
      await RequestApi.post("users", data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Forms onSubmit={handleSubmit(onSubmitFunction)}>
      <h2>Crie sua conta</h2>
      <p>Rápido e grátis, vamos nessa</p>

      <label htmlFor="name">Nome</label>
      <input id="name" type="text" {...register("name")} />
      <p>{errors.name?.message}</p>

      <label htmlFor="email">Email</label>
      <input id="email" {...register("email")} />
      <p>{errors.email?.message}</p>

      <label htmlFor="password">Senha</label>
      <input id="password" type="password" {...register("password")} />
      <p>{errors.password?.message}</p>

      <label htmlFor="passwordConfirm">Confirmar Senha</label>
      <input
        id="passwordConfirm"
        type="password"
        {...register("passwordConfirm")}
      />
      <p>{errors.passwordConfirm?.message}</p>

      <label htmlFor="bio">Bio</label>
      <input id="bio" type="text" {...register("bio")} />
      <p>{errors.bio?.message}</p>

      <label htmlFor="contact">Contato</label>
      <input id="contact" type="text" {...register("contact")} />
      <p>{errors.contact?.message}</p>

      <label htmlFor="course_module">Selecionar módulo</label>
      <select id="module" {...register("course_module")}>
        <option value="">Selecione...</option>
        <option value="1º modulo">1º Módulo</option>
        <option value="2º modulo">2º Módulo</option>
        <option value="3º Módulo">3º Módulo</option>
        <option value="4º Módulo">4º Módulo</option>
        <option value="5º Módulo">5º Módulo</option>
        <option value="6º Módulo">6º Módulo</option>
      </select>
      <p>{errors.module?.message}</p>

      <button type="submit">Cadastrar</button>
    </Forms>
  );
}
