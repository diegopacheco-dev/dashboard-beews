import React from 'react'
import { ExitIcon } from '../../assets/icons/icons'
import Modal from '../Modal/Modal'
import { REGALOS } from '../../assets/data/regalos'
import { PLANES } from '../../assets/data/planes'

const ModalDetallePedido = ({
  isOpen = false,
  onToggle = () => {},
  pedido
}) => {
  console.log(REGALOS)
  console.log('regalos: ', pedido?.Regalos)

  const total = pedido?.Regalos.reduce(
    (cont, el) => (cont += REGALOS[el]?.price),
    0
  )

  return (
    <Modal {...{ isOpen, onToggle }}>
      <div className="w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl h-screen sm:h-5/6 overflow-y-auto bg-white px-1 py-8 rounded-md flex flex-col">
        <div className="relative ml-auto mr-auto mb-7">
          <h3 className="text-2xl text-center font-bold">Detalle del pedido</h3>
          <span
            onClick={onToggle}
            className="p-1 absolute right-0 -top-1 text-primary"
          >
            <ExitIcon width="24" height="24" />
          </span>
        </div>
        {/* CONTAINER GRID  */}
        <div className="ml-auto mr-auto grid grid-cols-1 sm:grid-cols-2 gap-7">
          {/* ===== CUADRO CLIENTE EMISOR =====  */}
          <div className="bg-tertiary-50 p-5 rounded-2xl w-full">
            <h3 className="font-bold text-lg text-center">Envía</h3>
            <div className="mb-2 w-full flex flex-col">
              <label className="block text-gray-700 font-bold text-left text-sm">
                Name
              </label>
              <input
                className="text-lg font-bold text-tertiary-500 bg-transparent pl-2 outline-none"
                value="Diego Pacheco"
                readOnly
              />
            </div>
            <div className="mb-2 flex flex-col w-full">
              <label className="block text-gray-700 font-bold text-left text-sm">
                Mail
              </label>
              <input
                className="text-lg font-bold text-tertiary-500 bg-transparent pl-2 outline-none"
                value="ericksonder017@gmail.com"
                readOnly
              />
            </div>
            <div className="mb-2 flex flex-col w-full">
              <label className="block text-gray-700 font-bold text-left text-sm">
                Celphone
              </label>
              <input
                className="text-lg font-bold text-tertiary-500 bg-transparent pl-2 outline-none"
                value="999888777"
                readOnly
              />
            </div>
            <div className="mb-2 flex flex-col w-full">
              <label className="block text-gray-700 font-bold text-left text-sm">
                Country
              </label>
              <input
                className="text-lg font-bold text-tertiary-500 bg-transparent pl-2 outline-none"
                value="USA"
                readOnly
              />
            </div>
            <div className="mb-2 flex flex-col w-full">
              <label className="block text-gray-700 font-bold text-left text-sm">
                City
              </label>
              <input
                className="text-lg font-bold text-tertiary-500 bg-transparent pl-2 outline-none"
                value="San Diego"
                readOnly
              />
            </div>
            <div className="mb-2 flex flex-col w-full">
              <label className="block text-gray-700 font-bold text-left text-sm">
                Plan
              </label>
              <input
                className="text-lg font-bold text-tertiary-500 bg-transparent pl-2 outline-none"
                value="XPERIENCE"
                readOnly
              />
            </div>
          </div>
          {/* ===== CUADRO DESTINATARIO =====  */}
          <div className="bg-tertiary-50 p-5 rounded-2xl w-full">
            <h3 className="font-bold text-lg text-center">Recibe</h3>
            <div className="mb-2 w-full flex flex-col">
              <label className="block text-gray-700 font-bold text-left text-sm">
                Name
              </label>
              <input
                className="text-lg font-bold text-tertiary-500 bg-transparent pl-2 outline-none"
                value="Diego Pacheco"
                readOnly
              />
            </div>
            <div className="mb-2 flex flex-col w-full">
              <label className="block text-gray-700 font-bold text-left text-sm">
                Country
              </label>
              <input
                className="text-lg font-bold text-tertiary-500 bg-transparent pl-2 outline-none"
                value="Peru"
                readOnly
              />
            </div>
            <div className="mb-2 flex flex-col w-full">
              <label className="block text-gray-700 font-bold text-left text-sm">
                City
              </label>
              <input
                className="text-lg font-bold text-tertiary-500 bg-transparent pl-2 outline-none"
                value="Lima"
                readOnly
              />
            </div>
            <div className="mb-2 flex flex-col w-full">
              <label className="block text-gray-700 font-bold text-left text-sm">
                District
              </label>
              <input
                className="text-lg font-bold text-tertiary-500 bg-transparent pl-2 outline-none"
                value="San Juan de Miraflores"
                readOnly
              />
            </div>
            <div className="mb-2 flex flex-col w-full">
              <label className="block text-gray-700 font-bold text-left text-sm">
                Address Reference
              </label>
              <input
                className="text-lg font-bold text-tertiary-500 bg-transparent pl-2 outline-none"
                value="Alt cdra 50 Av. Los Heroes"
                readOnly
              />
            </div>
            <div className="mb-2 flex flex-col w-full">
              <label className="block text-gray-700 font-bold text-left text-sm">
                Parentesco
              </label>
              <input
                className="text-lg font-bold text-tertiary-500 bg-transparent pl-2 outline-none"
                value="Padre"
                readOnly
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="mb-2 flex flex-col w-full">
                <label className="block text-gray-700 font-bold text-left text-sm">
                  Fecha
                </label>
                <input
                  className="text-lg font-bold text-tertiary-500 bg-transparent pl-2 outline-none"
                  value="10/11/2021"
                  readOnly
                />
              </div>
              <div className="mb-2 flex flex-col w-full">
                <label className="block text-gray-700 font-bold text-left text-sm">
                  Hora
                </label>
                <input
                  className="text-lg font-bold text-tertiary-500 bg-transparent pl-2 outline-none"
                  value="8:00am - 9:00am"
                  readOnly
                />
              </div>
            </div>
          </div>
          <div className="px-0 py-4 sm:p-5 rounded-2xl w-full sm:col-span-2">
            <h3 className="font-bold text-lg text-center">Regalos</h3>
            {/* Lista de regalos  */}
            <div className="w-full sm:w-10/12 ml-auto mr-auto flex flex-col items-center mt-5">
              {/* Plan  */}
              <div className="w-full rounded-lg mb-3 bg-primary-100 flex justify-between gap-0 sm:gap-2 items-center font-bold text-tertiary-500">
                <div className="w-22 sm:w-24 p-2 sm:p-3">
                  <img
                    src="https://beews-next.vercel.app/images/icono-premiun.svg"
                    alt="imagen del regalo"
                  />
                </div>
                <div className="w-4/6">
                  <span className="font-bold text-sm">Detalle</span>
                  <p className="font-bold text-lg sm:text-2xl">
                    {PLANES[pedido?.IdPlan]?.title}
                  </p>
                </div>
                <div className="text-center w-2/6">
                  <span className="font-bold text-sm">Precio</span>
                  <p className="font-bold text-lg sm:text-2xl">
                    $/ {PLANES[pedido?.IdPlan]?.price}
                  </p>
                </div>
              </div>
              {/* Regalos  */}
              {pedido?.Regalos.map((regalo) => {
                return (
                  <div
                    key={REGALOS[regalo]?.id}
                    className="w-full rounded-lg mb-3 bg-primary-100 flex justify-between gap-2 items-center font-bold text-tertiary-500"
                  >
                    <div className="w-22 sm:w-24 p-2 sm:p-3">
                      <img src={REGALOS[regalo]?.img} alt="imagen del regalo" />
                    </div>
                    <div className="w-4/6">
                      <span className="font-bold text-sm">Detalle</span>
                      <p className="font-bold text-lg sm:text-2xl">
                        {REGALOS[regalo]?.title}
                      </p>
                    </div>
                    <div className="text-center w-2/6">
                      <span className="font-bold text-sm">Precio</span>
                      <p className="font-bold text-lg sm:text-2xl">
                        $/ {REGALOS[regalo]?.price}
                      </p>
                    </div>
                  </div>
                )
              })}

              {/* ===== Total =====  */}
              <div className="w-full rounded-lg mt-3 mb-3 bg-tertiary-500 text-white flex justify-between gap-2 items-center font-medium text-xl px-3 py-2">
                <p>Total</p>
                <p>$/ {total + PLANES[pedido?.IdPlan]?.price}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default ModalDetallePedido
