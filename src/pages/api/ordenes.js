import { PrismaClient } from "@prisma/client"


export default async function handler(req, res) {
  const prisma = new PrismaClient()
  if (req.method == 'POST') {
    const orden = await prisma.orden.create({
      data: {
        Ord_Nombre: req.body.nombre,
        Ord_Total: req.body.total,
        Ord_Fecha: req.body.fecha,
        Ord_Pedido: req.body.carrito,
      }
    })
    res.json(orden)
  }
}
