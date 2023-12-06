import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function handler(req, res) {
  const categorias = await prisma.categoria.findMany()
  return res.status(200).json(categorias)
}

export default handler;