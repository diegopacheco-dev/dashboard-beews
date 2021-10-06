import React from 'react'
// import { eyeIcon } from '../../assets/icons/icons'

const TableContacto = ({ listaContactos = [] }) => {
  const contactos = [
    {
      IdContacto: 132,
      Name: 'Usuario cliente',
      Email: 'Av Pachacutec',
      Message: 'hello world'
    },
    {
      IdContacto: 132,
      Name: 'Usuario cliente',
      Email: 'Av Pachacutec',
      Message: 'hello world'
    },
    {
      IdContacto: 132,
      Name: 'Usuario cliente',
      Email: 'Av Pachacutec',
      Message: 'hello world'
    },
    {
      IdContacto: 132,
      Name: 'Usuario cliente',
      Email: 'Av Pachacutec',
      Message: 'hello world'
    }
  ]

  return (
    <table className="min-w-max w-full table-auto ">
      <thead>
        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
          <th className="py-3 pl-3 text-left">Id Contacto</th>
          <th className="py-3 px-6 text-center">Name</th>
          <th className="py-3 px-3 text-center">Email</th>
          <th className="py-3 px-6 text-right">Message</th>
          <th></th>
        </tr>
      </thead>
      <tbody className="text-gray-700 text-md font-medium">
        {contactos.map((contacto) => {
          return (
            <tr
              key={contacto.IdContacto}
              className="border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
            >
              <td className="py-3 px-3 text-left">
                <span>{contacto.IdContacto}</span>
              </td>
              <td className="py-3 px-3 text-center">
                <span>{contacto.Name}</span>
              </td>
              <td className="py-3 px-3 text-center">
                <span>{contacto.Email}</span>
              </td>
              <td className="py-3 px-3 text-right">
                <span>{contacto.Message}</span>
              </td>
              <td></td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default TableContacto
