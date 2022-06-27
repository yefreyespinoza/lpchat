export interface User {
  id?: string | number;
  username: string;
  password: string;
}
export interface UserRegister extends User {
  confirmPassword: string;
}
