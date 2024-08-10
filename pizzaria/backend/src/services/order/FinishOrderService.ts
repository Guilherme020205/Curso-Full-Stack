import prismaClient from "../../prisma";

interface FinishRequest{
    order_id
}

class FinishOrderService {

    async execut({ order_id }: FinishRequest) {
        const order = await prismaClient.order.update({
            where: {
                id: order_id
            },
            data: {
                status: true
            }
        })

        return order

    }

}

export { FinishOrderService }