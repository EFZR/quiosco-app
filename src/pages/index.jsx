import { PrismaClient } from "@prisma/client";

export default function Home({ categorias, productos }) {
  console.log(categorias);
  console.log(productos);
  return <h1>Next js</h1>;
}

export const getServerSideProps = async () => {
  const prisma = new PrismaClient();
  const categorias = await prisma.categoria.findMany();
  const productos = await prisma.producto.findMany();

  return {
    props: {
      categorias,
      productos,
    },
  };
};
