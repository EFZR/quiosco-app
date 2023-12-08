import useQuiosco from "@/hooks/useQuiosco";

export default function Home() {
  const { categoriaActual } = useQuiosco();
  return (
    <>
      <h1 className="text-4xl font-black">{categoriaActual.Cat_Nombre}</h1>
      <p className="text-2xl my-10">
        Elige y personaliza tu pedido a continuación.
      </p>
    </>
  );
}
