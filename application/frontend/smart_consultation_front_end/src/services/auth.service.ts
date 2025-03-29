import { IAuthForm } from "@/types/auth.types";

class AuthServise{
    private BASE_URL = '/auth'

    // login request
    async auth(data: IAuthForm ){}

    // logout
    async logout(){}
}
export const authService = new AuthServise()
