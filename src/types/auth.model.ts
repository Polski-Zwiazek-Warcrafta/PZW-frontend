export interface RegisterData {
  username: string;
  password: string;
}

export interface LoginData {
  username: string;
  password: string;
}

export interface AuthResponse {
  access_token: string;
  isAdmin: boolean;
  success: boolean;
  error?: string;
}
