import React from 'react'
// import { eyeIcon } from '../../assets/icons/icons'

const TableNewsletter = ({ listaNewsletter = [] }) => {
  const newsletter = [
    {
      IdNewsletter: 138,
      Email: 'Av Pachacutec',
      Fecha: '05-10-2021'
    },
    {
      IdNewsletter: 139,
      Email: 'Av Pachacutec',
      Fecha: '05-10-2021'
    },
    {
      IdNewsletter: 140,
      Email: 'Av Pachacutec',
      Fecha: '05-10-2021'
    }
  ]

  return (
    <table className="min-w-max w-full table-auto ">
      <thead>
        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
          <th className="py-3 pl-3 text-left">Id Newsletter</th>
          <th className="py-3 px-6 text-center">Email</th>
          <th className="py-3 px-6 text-right">Fecha</th>
          <th></th>
        </tr>
      </thead>
      <tbody className="text-gray-700 text-md font-medium">
        {newsletter.map((news) => {
          return (
            <tr
              key={news.IdNewsletter}
              className="border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
            >
              <td className="py-3 px-3 text-left">
                <span>{news.IdNewsletter}</span>
              </td>
              <td className="py-3 px-3 text-center">
                <span>{news.Email}</span>
              </td>
              <td className="py-3 px-3 text-right">
                <span>{news.Fecha}</span>
              </td>
              <td></td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default TableNewsletter
