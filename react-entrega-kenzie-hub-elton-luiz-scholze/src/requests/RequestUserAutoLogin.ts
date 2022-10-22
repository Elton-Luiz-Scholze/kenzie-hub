import { RequestApi } from "./RequestApi";
import { iUserLoginResponse } from "./RequestUserLogin";

export async function RequestUserAutoLogin(
  token: string
): Promise<iUserLoginResponse> {
  // const token = localStorage.getItem("@kenzieHubToken");
  const { data } = await RequestApi.post<iUserLoginResponse>("profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
}
