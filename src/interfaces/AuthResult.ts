export interface AuthResult {
  accessToken: string;
  refreshToken: string;
  userId: string | null;
}