import { iTech } from "../components/Modal";
import { RequestApi } from "./RequestApi";

export type iTechRegister = Omit<iTech, "id">;

export async function RequestCreateTechs(
  token: string,
  dataTech: iTechRegister
): Promise<iTechRegister> {
  const { data } = await RequestApi.post<iTechRegister>(
    "users/techs",
    dataTech,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return data;
}
