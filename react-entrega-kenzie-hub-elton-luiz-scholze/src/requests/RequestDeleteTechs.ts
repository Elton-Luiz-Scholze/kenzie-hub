import { iUser } from "../contexts/UserContext";
import { RequestApi } from "./RequestApi";

export async function RequestDeleteTechs(
  token: string,
  id: string
): Promise<iUser> {
  await RequestApi.delete(`users/techs/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const { data } = await RequestApi.get<iUser>("profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
}
