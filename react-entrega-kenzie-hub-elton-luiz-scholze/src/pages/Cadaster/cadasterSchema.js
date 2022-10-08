import * as yup from "yup";

export const cadasterSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),

  email: yup
    .string()
    .required("Email obrigatório")
    .email("Digitar um email válido"),

  password: yup
    .string()
    .matches(/[A-Z]/, "Deve conter ao menos uma letra maiúscula")
    .matches(/[a-z]/, "Deve conter ao menos uma letra minúscula")
    .matches(/(\d)/, "Deve conter ao menos um número")
    .matches(/(\W)|_/, "Deve conter ao menos um caractér especial")
    .trim()
    .matches(/.{8,}/, "Deve ter no mínimo 8 dígitos")
    .required("Password obrigatório"),

  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "A confirmação deve ser igual a senha"),

  bio: yup.string().required("Bio obrigatório"),

  contact: yup.string().required("Contato obrigatório"),

  course_module: yup.string().required("Módulo obrigatório"),
});
