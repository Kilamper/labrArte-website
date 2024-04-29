export interface User {
  profilePicture?: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  birthDate?: Date;
  phone?: string;
  address?: string;
}
