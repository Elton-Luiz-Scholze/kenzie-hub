import { RequestApi } from "./RequestApi";

export async function RequestDeleteTechs(token: string, id: string) {
  const response = await RequestApi.delete(`users/techs/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
}
