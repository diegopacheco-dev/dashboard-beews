import React, { useState } from 'react'

// terceros
import { useFormik } from 'formik'
import InputText from '../../components/InputText'
import useAuth from '../../hooks/useAuth'

const user = {
  email: 'admin@gmail.com',
  password: 'admin',
  rol: 'admin',
  user: 'diego'
}

const ButtonLogin = () => (
  <button type="submit" className="w-full mt-4 btn-primary">
    Ingresar
  </button>
)

const LoginView = () => {
  const initialValues = {
    email: '',
    password: ''
  }

  const { loginAction } = useAuth()
  const [mensajeError, setMensajeError] = useState(null)
  // const { loginAction } = useAuth()

  const formik = useFormik({
    initialValues,
    // validationSchema: loginSchema,
    onSubmit: async (values) => {
      setMensajeError(null)
      // const request = await loginMutation({
      //   variables: {
      //     input: {
      //       NmUsuario: values.email,
      //       Password: values.password
      //     }
      //   }
      // })
      // const apiToken = request.data.login.apiToken
      // const user = request.data.login
      if (values.email === user.email && values.password === user.password) {
        loginAction(user)
      } else {
        console.log('Error al iniciar sesión')
      }
    }
  })

  return (
    <section className="min-h-screen flex items-stretch justify-center lg:justify-start sm:bg-gray-100 lg:bg-white">
      <div
        className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
        // style={{
        //   backgroundImage:
        //     'url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)'
        // }}
      >
        <div className="absolute bg-primary opacity-60 inset-0 z-0" />
        <div className="w-full px-20 z-10">
          {/* <h1 className="text-5xl text-white font-bold text-left tracking-wide">
            LEXSAC TRACKING
          </h1> */}
          <p className="text-3xl text-white my-4">Bienvenido</p>
        </div>
      </div>
      <div className="w-full flex items-center justify-center text-center md:px-16 px-0 z-0 max-w-xl lg:max-w-xl">
        <div className="w-full py-8 z-20 sm:shadow-lg sm:rounded-lg lg:shadow-none lg:rounded-none bg-white">
          {/* <img
            // src={Logo}
            alt="Logo Logisticom"
            className="mx-auto mb-8 lg:hidden"
          /> */}
          <h1 className="text-2xl font-bold text-center tracking-wide mb-5">
            INICIAR SESION
          </h1>

          <form
            onSubmit={formik.handleSubmit}
            className="w-full sm:w-2/3 px-4 lg:px-0 mx-auto"
          >
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="block text-gray-700 text-left text-sm"
              >
                Usuario
              </label>
              <InputText
                type="text"
                formik={formik}
                name="email"
                placeholder="Ingresa tu usuario"
              />
            </div>

            <div className="flex flex-col my-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-left text-sm"
              >
                Contraseña
              </label>
              <InputText
                name="password"
                formik={formik}
                type="password"
                placeholder="Ingresa tu contraseña"
              />
            </div>
            <p className="m-4 text-red-400">{mensajeError}</p>
            <ButtonLogin />
            {/* {loading ? <Loader size="sm" /> : null} */}
            {/* {loading ? null : <ButtonLogin />} */}
          </form>
        </div>
      </div>
    </section>
  )
}

export default LoginView
