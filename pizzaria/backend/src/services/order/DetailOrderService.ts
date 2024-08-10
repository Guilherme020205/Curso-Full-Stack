import prismaClient from "../../prisma";

interface idOrderRequest{
    order_id: string
}

class DetailOrderService{
    async execut({order_id}: idOrderRequest){
        const orders = await prismaClient.orderItem.findMany({
            where: {
                order_id: order_id
            },
            include: {
                product: true,
                order: true
            }
        })

        return orders;

    }
}

export { DetailOrderService }