import { environment } from "../../environments/environment";
export const baseURL: string = environment.baseURL

export const URLS = {
    loginUrl: `${baseURL}api/user/login`,
}