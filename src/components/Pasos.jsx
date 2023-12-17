import { useRouter } from "next/router";

const pasos = [
  { paso: 1, nombre: "Menú", url: "/" },
  { paso: 2, nombre: "Resumen", url: "/resumen" },
  { paso: 3, nombre: "Datos y Total", url: "/total" },
];

function Pasos() {
  const router = useRouter();

  const calcularPasos = () => {
    if (router.pathname === "/") return 2;
    if (router.pathname === "/resumen") return 50;
    if (router.pathname === "/total") return 100;
  };

  return (
    <>
      <div className="flex justify-between mb-5">
        {pasos.map((paso) => (
          <button
            className="text-2xl font-bold text-gray-600 hover:text-gray-950"
            key={paso.paso}
            onClick={() => {
              router.push(paso.url);
            }}
          >
            {paso.nombre}
          </button>
        ))}
      </div>
      <div className="bg-gray-10 mb-10">
        <div
          className="rounded-full bg-amber-500 leading-none w-10 h-2 text-xs text-center"
          style={{ width: `${calcularPasos()}%` }}
        ></div>
      </div>
    </>
  );
}

export default Pasos;
