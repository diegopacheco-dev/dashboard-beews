import React, { useState } from 'react'
import { EyeIcon } from '../../assets/icons/icons'
import ModalDetallePedido from '../ModalDetallePedido/ModalDetallePedido'
// import { eyeIcon } from '../../assets/icons/icons'
const pedidos = [
  {
    IdPedido: 132,
    Cliente: 'Usuario cliente',
    Celular: '999666333',
    Direccion: 'Av Pachacutec',
    Plan: 'Xperience',
    Estado: 'Entregado'
  },
  {
    IdPedido: 134,
    Cliente: 'Usuario cliente',
    Celular: '999666333',
    Direccion: 'Av Pachacutec',
    Plan: 'Xperience',
    Estado: 'Entregado'
  },
  {
    IdPedido: 136,
    Cliente: 'Usuario cliente',
    Celular: '999666333',
    Direccion: 'Av Pachacutec',
    Plan: 'Xperience',
    Estado: 'Entregado'
  },
  {
    IdPedido: 137,
    Cliente: 'Usuario cliente',
    Celular: '999666333',
    Direccion: 'Av Pachacutec',
    Plan: 'Xperience',
    Estado: 'Entregado'
  },
  {
    IdPedido: 138,
    Cliente: 'Usuario cliente',
    Celular: '999666333',
    Direccion: 'Av Pachacutec',
    Plan: 'Xperience',
    Estado: 'Entregado'
  },
  {
    IdPedido: 140,
    Cliente: 'Usuario cliente',
    Celular: '999666333',
    Direccion: 'Av Pachacutec',
    Plan: 'Xperience',
    Estado: 'Entregado'
  }
]

const TablePedidos = ({ listaPedidos }) => {
  const [pedidoModal, setPedidoModal] = useState(null)
  const resetPedidoModal = () => setPedidoModal(null)
  const [openModal, setOpenModal] = useState(false)
  const onToggle = () => {
    setOpenModal((prevState) => !prevState)
    openModal === true && resetPedidoModal()
  }
  return (
    <>
      <ModalDetallePedido
        isOpen={openModal}
        onToggle={onToggle}
        pedido={pedidoModal}
      />
      <table className="min-w-max w-full table-auto ">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 pl-3 text-left">Id Pedido</th>
            <th className="py-3 px-6 text-center">Cliente</th>
            <th className="py-3 px-3 text-center">Celular</th>
            <th className="py-3 px-3 text-center">Direccion</th>
            <th className="py-3 px-3 text-center">Plan</th>
            <th className="py-3 px-6 text-center">Estado</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="text-gray-700 text-md font-medium">
          {pedidos.map((pedido) => {
            return (
              <tr
                onClick={() => {
                  onToggle()
                  setPedidoModal(pedido)
                }}
                key={pedido.IdPedido}
                className="border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
              >
                <td className="py-3 px-3 text-left">
                  <span>{pedido.IdPedido}</span>
                </td>
                <td className="py-3 px-3 text-center">
                  <span>{pedido.Cliente}</span>
                </td>
                <td className="py-3 px-3 text-center">
                  <span>{pedido.Celular}</span>
                </td>
                <td className="py-3 px-3 text-center">
                  <span>{pedido.Direccion}</span>
                </td>
                <td className="py-3 px-3 text-center">
                  <span>{pedido.Plan}</span>
                </td>
                <td className="py-3 px-3 text-center">
                  <span>{pedido.Estado}</span>
                </td>
                <td className="text-right pr-1">
                  <span>
                    <EyeIcon width="18" height="18" />
                  </span>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default TablePedidos
