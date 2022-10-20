import { RequestApi } from "./RequestApi";

export async function RequestUserCadaster(dataUser): Promise<> {
  const { data } = await RequestApi.post("users/techs", dataUser);

  return data;
}
