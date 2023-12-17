import { useState, useEffect } from "react";
import Image from "next/image";
import useQuiosco from "@/hooks/useQuiosco";
import { formatMoney } from "@/helpers";

function ModalProducto() {
  const { producto, handleModal, carrito, handleCarrito } = useQuiosco();
  const { Prod_Nombre, Prod_Precio, Prod_Imagen } = producto;
  const [cantidad, setCantidad] = useState(1);

  useEffect(() => {
    if (carrito.some((p) => p.Prod_Id === producto.Prod_Id)) {
      const { cantidad } = carrito.find((p) => p.Prod_Id === producto.Prod_Id);
      setCantidad(cantidad);
    }
  }, [producto, carrito]);

  return (
    <div className="flex gap-10">
      <div className="md:w-1/3">
        <Image
          width={300}
          height={400}
          alt={`Imagen del producto ${Prod_Nombre}`}
          src={`/assets/img/${Prod_Imagen}.jpg`}
          className="h-auto w-auto"
        />
      </div>
      <div className="md:w-2/3">
        <div className="flex justify-end">
          <button onClick={() => handleModal()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <h1 className="text-3xl font-bold">{Prod_Nombre}</h1>
        <p className="text-5xl font-black mt-5 text-amber-500">
          {formatMoney(Prod_Precio)}
        </p>
        <div className="flex gap-4 mt-5">
          <button
            type="button"
            onClick={() => {
              if (cantidad > 1) setCantidad(cantidad - 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <p className="text-3xl">{cantidad}</p>
          <button
            type="button"
            onClick={() => {
              if (cantidad < 5) setCantidad(cantidad + 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-5 text-white uppercase font-bold rounded"
          onClick={() => handleCarrito({ ...producto, cantidad })}
        >
          Añadir al pedido
        </button>
      </div>
    </div>
  );
}

export default ModalProducto;
