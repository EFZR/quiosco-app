import useQuiosco from "@/hooks/useQuiosco";
import ResumenProducto from "@/components/ResumenProducto";

function Resumen() {
  const { carrito } = useQuiosco();
  return (
    <>
      <h1 className="text-4xl font-black">Resumen</h1>
      <p className="text-2xl my-10">Revisa tu pedido</p>
      {carrito.length === 0 ? (
        <p className="text-center text-2xl">No hay elementos en tu pedido</p>
      ) : (
        carrito.map((producto) => <ResumenProducto key={producto.Prod_Id} producto={producto} />)
      )}
    </>
  );
}

export default Resumen;
