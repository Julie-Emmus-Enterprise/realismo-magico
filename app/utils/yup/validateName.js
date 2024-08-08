import * as Yup from "yup";

export const validateName = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Debe tener al menos 3 caracteres')
    .required('El nombre no puede estar vacío'),
});
