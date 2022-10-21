import { RequestApi } from "./RequestApi";

export interface iUserCadaster {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  bio: string;
  contact: string;
  course_module: string;
}

interface iUserResponse {
  id: string;
  name: string;
  email: string;
  bio: string;
  contact: string;
  course_module: string;
  avatar_url: string | null;
}

export async function RequestUserCadaster(
  dataUser: iUserCadaster
): Promise<iUserResponse> {
  const { data } = await RequestApi.post<iUserResponse>(
    "users/techs",
    dataUser
  );

  return data;
}
