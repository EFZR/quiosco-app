import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function handler(req, res) {
  const productos = await prisma.producto.findMany();
  return res.status(200).json(productos);
}

export default handler;