import Image from "next/image";
import useQuiosco from "@/hooks/useQuiosco";

function Categoria({ categoria }) {
  const { categoriaActual, handleCategoriaActual } = useQuiosco();
  const { Cat_Nombre, Cat_Icono, Cat_Id } = categoria;
  return (
    <div
      className={`${
        categoriaActual?.Cat_Id === Cat_Id ? "bg-amber-400" : ""
      } flex items-center gap-4 w-full border p-5 hover:bg-amber-400 hover:cursor-pointer`}
      onClick={() => handleCategoriaActual(Cat_Id)}
    >
      <Image
        width={0}
        height={0}
        src={`/assets/img/icono_${Cat_Icono}.svg`}
        alt="Imagen Icono"
        className="w-16 h-16"
      />
      <button
        type="button"
        className="text-2xl font-bold hover:cursor-pointer"
        onClick={() => handleCategoriaActual(Cat_Id)}
      >
        {Cat_Nombre}
      </button>
    </div>
  );
}

export default Categoria;
