import { iTechs } from "../contexts/TechContext";
import { RequestApi } from "./RequestApi";

export type iTechRegister = Omit<iTechs, "id">;

export async function RequestCreateTechs(
  token: string,
  dataTech: iTechRegister
): Promise<iTechs> {
  const { data } = await RequestApi.post<iTechs>("users/techs", dataTech, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
}
