import React from 'react'

// styles
import styles from './input.module.css'

const InputText = ({ isInvalid = false, formik, name, props }) => {
  return (
    <input
      required
      className={`${styles.input} ${isInvalid ? styles.invalid : ''}`}
      id={name}
      name={name}
      onBlur={formik.handleBlur}
      value={formik.values.name}
      onChange={formik.handleChange}
      placeholder="Ingresa Peso"
      isinvalid={formik.errors.Peso && formik.touched.Peso}
      {...props}
    />
  )
}

export default InputText
