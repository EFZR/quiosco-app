import { PrismaClient } from "@prisma/client";

async function handler(req, res) {
  const prisma = new PrismaClient();
  if (req.method == "POST") {
    const ordenActualizada = await prisma.orden.update({
      where: {
        Ord_Id: parseInt(req.query.id),
      }, data: {
        Ord_Estado: true
      }
    })
    res.status(200).json(ordenActualizada)
  }
}

export default handler