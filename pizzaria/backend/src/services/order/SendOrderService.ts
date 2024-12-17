import prismaClient from "../../prisma";

interface OrderRequest {
  order_id: string;
}

class SendOrderService {
  async execute({ order_id }: OrderRequest) {
    // Verificar se order_id foi fornecido
    if (!order_id) {
      throw new Error("Order ID is required"); // Garante que o serviço não seja executado sem um ID válido
    }

    try {
      // Atualizar o pedido no banco de dados
      const order = await prismaClient.order.update({
        where: {
          id: order_id,
        },
        data: {
          draft: false,
        },
      });

      return order;
    } catch (error) {
      // Tratar erro de pedido não encontrado ou outros erros do Prisma
      console.error("Error updating order:", error);
      throw new Error("Order not found or could not be updated");
    }
  }
}

export { SendOrderService };
