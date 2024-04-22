export interface User {
  profilePicture?: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  telephone?: string;
  birthDate?: Date;
}
