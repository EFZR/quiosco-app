import Image from "next/image";
import axios from "axios";
import { formatMoney } from "@/helpers";
import { toast } from "react-toastify";

function Orden({ orden }) {
  const { Ord_Id, Ord_Nombre, Ord_Total, Ord_Fecha, Ord_Pedido } = orden;
  const completarOrden = async () => {
    try {
      await axios.post(`/api/ordenes/${Ord_Id}`);
      toast.success("Orden completada correctamente");
    } catch (error) {
      toast.error("Error al completar la orden");
    }
  };
  return (
    <div className="border p-10 space-y-5">
      <h3 className="text-xl font-bold">Orden: {Ord_Id}</h3>
      <p className="text-lg my-10 font-bold">Cliente: {Ord_Nombre}</p>
      <div>
        {Ord_Pedido.map((producto) => (
          <div
            key={producto.Prod_Id}
            className="py-3 flex border-b last-of-type:border-0 items-center"
          >
            <div className="w-32">
              <Image
                width={400}
                height={500}
                src={`/assets/img/${producto.Prod_Imagen}.jpg`}
                alt={`Imagen de ${producto.Prod_Nombre}`}
              />
            </div>
            <div className="p-5 space-y-2">
              <h4 className="text-xl font-bold text-amber-500">
                {producto.Prod_Nombre}
              </h4>
              <p className="text-lg font-bold">Cantidad: {producto.cantidad}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="md:flex md:items-center md:justify-between my-10">
        <p className="mt-5 font-black text-3xl text-amber-500">
          Total a Pagar: {formatMoney(Ord_Total)}
        </p>
        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-700 text-white mt-5 md:mt-0 py-3 px-10 uppercase font-bold rounded-lg"
          onClick={() => completarOrden()}
        >
          Completar Orden
        </button>
      </div>
    </div>
  );
}

export default Orden;
