import * as yup from 'yup'

export const formFillValidation = yup.object().shape({
  Serie: yup.string().required('Este campo es obligatorio'),
  Numero: yup.number().required('Este campo es obligatorio'),
  Llegada: yup.string().required('Este campo es obligatorio'),
  Bultos: yup.number().required('Este campo es obligatorio'),
  Peso: yup.number().required('Este campo es obligatorio'),
  FechaEntrega: yup.date().required('Este campo es obligatorio'),
  SerieGT: yup.string().required('Este campo es obligatorio'),
  NumeroGT: yup.number().required('Este campo es obligatorio'),
  IdCliente: yup.number().required('Debe seleccionar un cliente'),
  IdDestino: yup.number().required('Debe seleccionar un estado')
})
