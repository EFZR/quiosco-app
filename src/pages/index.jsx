import useQuiosco from "@/hooks/useQuiosco";
import Producto from "@/components/Producto";

export default function Home() {
  const { categoriaActual } = useQuiosco();
  const { Producto: listProd } = categoriaActual;
  return (
    <>
      <h1 className="text-4xl font-black">{categoriaActual.Cat_Nombre}</h1>
      <p className="text-2xl my-10">
        Elige y personaliza tu pedido a continuación.
      </p>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {listProd?.map((producto) => (
          <Producto key={producto.Prod_Id} producto={producto} />
        ))}
      </div>
    </>
  );
}
