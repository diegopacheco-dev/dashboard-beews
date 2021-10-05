import * as yup from 'yup'

export const loginSchema = yup.object().shape({
  email: yup.string().required('Este campo es obligatorio'),
  password: yup.string().min(3, 'La contraseña debe tener minimo 3 caracteres').required('Este campo es obligatorio')
})
