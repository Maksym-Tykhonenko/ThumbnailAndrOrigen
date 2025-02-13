import * as yup from "yup";

// TODO: edit schema to require required validators
export const ProfileSchema = yup.object().shape({
  firstName: yup.string(),
  lastName: yup.string(),
  birthDate: yup
    .string()
    .matches(
      /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(\d{2})$/,
      "Date must be in the format DD/MM/YY",
    ),
});
