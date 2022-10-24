import { RequestApi } from "./RequestApi";
import { iUser } from "./RequestUserLogin";

export async function RequestUserAutoLogin(token: string): Promise<iUser> {
  const { data } = await RequestApi.get<iUser>("profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
}
