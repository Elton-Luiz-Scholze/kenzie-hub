import { iTechs } from "../contexts/TechContext";
import { RequestApi } from "./RequestApi";

export interface iUserLogin {
  email: string;
  password: string;
}

export interface iUserLoginResponse {
  token: string;
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  techs: iTechs[];
}

export async function RequestUserLogin(
  dataUser: iUserLogin
): Promise<iUserLoginResponse> {
  const { data } = await RequestApi.post<iUserLoginResponse>(
    "sessions",
    dataUser
  );

  return data;
}
