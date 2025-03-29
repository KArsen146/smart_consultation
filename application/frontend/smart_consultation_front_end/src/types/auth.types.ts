// data sent upon login
export interface IAuthForm{
    login: string
    password: string
}

// returned data from the server when logging in
export interface IAuthPesponse{
    accessToken: string
    dispatcherId: string
}
