import Image from "next/image";
import useQuiosco from "@/hooks/useQuiosco";
import Categoria from "./Categoria";

function Sidebar() {
  const { categorias } = useQuiosco();
  return (
    <>
      <Image
        width={500}
        height={500}
        className="w-auto h-auto p-5"
        src="/assets/img/logo.svg"
        alt="logo"
        priority
      />
      <nav className="mt-10">
        {categorias.map((categoria) => (
          <Categoria key={categoria.Cat_Id} categoria={categoria}></Categoria>
        ))}
      </nav>
    </>
  );
}

export default Sidebar;
