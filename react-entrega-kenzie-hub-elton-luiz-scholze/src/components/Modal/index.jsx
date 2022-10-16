import { AiOutlineClose } from "react-icons/ai";
import { Forms } from "../../styles/Forms";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { cadasterTechsSchema } from "./cadasterTechsSchema";
import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";

export function Modal() {
  const { loading, setLoading, createTechs, setAddModal } =
    useContext(TechContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(cadasterTechsSchema),
  });

  async function closeModal() {
    setAddModal(false);
  }

  async function onSubmitFunction(data) {
    createTechs(data, setLoading);
  }

  return (
    <>
      <div className="background">
        <div className="header">
          <h3>Cadastar Tecnologia</h3>
          <button type="button" onClick={closeModal}>
            <AiOutlineClose />
          </button>
        </div>
        <Forms onSubmit={handleSubmit(onSubmitFunction)}>
          <label htmlFor="title"></label>
          <input type="text" {...register("title")} />
          <p>{errors.title?.message}</p>

          <label htmlFor="status"></label>
          <select {...register("status")}>
            <option value="">Selecione...</option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <p>{errors.status?.message}</p>

          <button type="submit" disabled={loading}>
            {loading ? "Cadastrando Tecnologia..." : "Cadastrar Tecnologia"}
          </button>
        </Forms>
      </div>
    </>
  );
}
