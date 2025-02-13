export enum Gender {
  MALE = "Male",
  FEMALE = "Female",
  UNSET = "Unset",
}
export interface User {
  firstName: string;
  lastName: string;
  birthDate: string;
  gender: Gender;
  photoUri: string;
}

export interface ProfileFormRequest {
  firstName?: string;
  lastName?: string;
  birthDate?: string;
  gender?: Gender;
  photoUri?: string | null;
}
