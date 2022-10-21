import { iTech } from "../components/Modal";
import { RequestApi } from "./RequestApi";

export type iTechRegister = Omit<iTech, "id">;

export async function RequestCreateTechs(
  token: string,
  dataTech: iTechRegister
): Promise<iTech> {
  const { data } = await RequestApi.post<iTech>("users/techs", dataTech, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
}
