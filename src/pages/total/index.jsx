import { useEffect } from "react";
import useQuiosco from "@/hooks/useQuiosco";
import { formatMoney } from "@/helpers";

function Total() {
  const { carrito, nombre, setNombre, total, colocarOrden } = useQuiosco();

  const comprobarCarrito = () => {
    return carrito.length === 0 || nombre === "" || nombre.length < 3;
  };

  useEffect(() => {
    comprobarCarrito();
  }, [carrito]);

  return (
    <>
      <h1 className="text-4xl font-black">Total y confirmar pedido</h1>
      <p className="text-2xl my-10">Confirma tu pedido a continuación</p>
      <form onSubmit={colocarOrden}>
        <div>
          <label
            htmlFor="Nombre"
            className="block uppercase text-slate-700 font-bold text-xl"
          >
            Nombre
          </label>
          <input
            id="Nombre"
            type="text"
            className="bg-gray-200 w-full mt-3 lg:w-1/3 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-amber-500"
            autoComplete="off"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mt-10">
          <p className="text-2xl">
            Total a Pagar: {""} <span className="font-bold">{formatMoney(total)}</span>
          </p>
        </div>
        <div className="mt-5">
          <input
            type="submit"
            value="Confirmar Pedido"
            className={`w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-center ${
              comprobarCarrito()
                ? "bg-indigo-300"
                : "bg-indigo-600 hover:bg-indigo-800"
            } text-white`}
            id="submit-carrito"
            disabled={comprobarCarrito()}
          />
        </div>
      </form>
    </>
  );
}

export default Total;
