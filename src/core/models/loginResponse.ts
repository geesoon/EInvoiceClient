import { Expose } from "class-transformer";

class LoginResponse {
    @Expose({ name: 'access_token' })
    public accessToken: string;

    @Expose({ name: 'token_type' })
    public tokenType: string;

    @Expose({ name: 'expires_in' })
    public expiresIn: number;

    @Expose({ name: 'scope' })
    public scope: string;
}

export default LoginResponse;