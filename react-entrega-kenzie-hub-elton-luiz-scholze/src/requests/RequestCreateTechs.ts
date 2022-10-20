import { iTechRegister } from "../components/Modal";
import { RequestApi } from "./RequestApi";

export async function RequestCreateTechs(token: string, dataTech: iTechRegister) : Promise<iTechRegister>{
    const {data} = await RequestApi.post<iTechRegister>("users/techs", dataTech, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });

      return data;
}