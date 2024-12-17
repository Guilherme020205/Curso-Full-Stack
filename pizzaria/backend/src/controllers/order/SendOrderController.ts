import { Request, Response } from 'express';
import { SendOrderService } from '../../services/order/SendOrderService';

class SendOrderController {
  async handle(req: Request, res: Response) {
    // Extrair order_id do corpo da requisição
    const { order_id } = req.body;

    // Verificar se order_id foi fornecido
    if (!order_id) {
      return res.status(400).json({ error: "Order ID is required" }); // Retornar erro se não for passado
    }

    const sendOrder = new SendOrderService();

    try {
      // Executar o serviço com o order_id fornecido
      const order = await sendOrder.execute({ order_id });

      // Retornar o pedido atualizado
      return res.json(order);
    } catch (error) {
      // Tratar erros do Prisma ou outros erros inesperados
      console.error(error);
      return res.status(500).json({ error: "An error occurred while sending the order" });
    }
  }
}

export { SendOrderController };
