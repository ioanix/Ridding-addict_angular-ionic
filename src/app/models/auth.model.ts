export class AuthResponse {

  token: string;
  username: string;
  firstName: string;
  lastName: string;
  authoritiesList: string[];
}

export const AUTH_TOKEN_LOCAL_STORAGE_KEY = 'token';
