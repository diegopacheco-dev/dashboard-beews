import React from 'react'
// import { eyeIcon } from '../../assets/icons/icons'

const TableClientes = ({ listaClientes = [] }) => {
  const clientes = [
    {
      IdCliente: 132,
      Name: 'Usuario cliente',
      Celular: '999666333',
      Email: 'Av Pachacutec',
      Country: 'Xperience',
      City: 'Entregado',
      Plan: 'Xperience'
    },
    {
      IdCliente: 134,
      Name: 'Usuario cliente',
      Celular: '999666333',
      Email: 'Av Pachacutec',
      Country: 'Xperience',
      City: 'Entregado',
      Plan: 'Xperience'
    },
    {
      IdCliente: 135,
      Name: 'Usuario cliente',
      Celular: '999666333',
      Email: 'Av Pachacutec',
      Country: 'Xperience',
      City: 'Entregado',
      Plan: 'Xperience'
    },
    {
      IdCliente: 136,
      Name: 'Usuario cliente',
      Celular: '999666333',
      Email: 'Av Pachacutec',
      Country: 'Xperience',
      City: 'Entregado',
      Plan: 'Xperience'
    }
  ]

  return (
    <table className="min-w-max w-full table-auto ">
      <thead>
        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
          <th className="py-3 pl-3 text-left">Id Cliente</th>
          <th className="py-3 px-6 text-center">Name</th>
          <th className="py-3 px-3 text-center">Celular</th>
          <th className="py-3 px-3 text-center">Email</th>
          <th className="py-3 px-3 text-center">Country</th>
          <th className="py-3 px-3 text-center">City</th>
          <th className="py-3 px-6 text-right">Plan</th>
          <th></th>
        </tr>
      </thead>
      <tbody className="text-gray-700 text-md font-medium">
        {clientes.map((cliente) => {
          return (
            <tr
              key={cliente.IdCliente}
              className="border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
            >
              <td className="py-3 px-3 text-left">
                <span>{cliente.IdCliente}</span>
              </td>
              <td className="py-3 px-3 text-center">
                <span>{cliente.Name}</span>
              </td>
              <td className="py-3 px-3 text-center">
                <span>{cliente.Celular}</span>
              </td>
              <td className="py-3 px-3 text-center">
                <span>{cliente.Email}</span>
              </td>
              <td className="py-3 px-3 text-center">
                <span>{cliente.Country}</span>
              </td>
              <td className="py-3 px-3 text-center">
                <span>{cliente.City}</span>
              </td>
              <td className="py-3 px-3 text-right">
                <span>{cliente.Plan}</span>
              </td>
              <td></td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default TableClientes
