import Image from "next/image";
import { formatMoney } from "@/helpers";
import useQuiosco from "@/hooks/useQuiosco";

function Producto({ producto }) {
  const { Prod_Nombre, Prod_Precio, Prod_Imagen } = producto;
  const { handleModalCarrito } = useQuiosco();

  return (
    <div className="shadow-md p-10 grid gap-5 items-center justify-center">
      <Image
        src={`/assets/img/${Prod_Imagen}.jpg`}
        alt={`Imagen Platillo ${Prod_Nombre}`}
        width={500}
        height={500}
        className="w-full h-auto md:w-96"
        priority
      />
      <h3 className="text-2xl font-bold">{Prod_Nombre}</h3>
      <p className="font-black text-4xl text-amber-500">
        {formatMoney(Prod_Precio)}
      </p>
      <button
        type="button"
        className="bg-indigo-600 hover:bg-indigo-800 w-full p-4 mt-5 text-white uppercase font-bold text-xl"
        onClick={() => handleModalCarrito(producto)}
      >
        Agregar
      </button>
    </div>
  );
}

export default Producto;
