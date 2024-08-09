import prismaClient from "../../prisma";

interface ItemRequest{
    amount: number;
    order_id: string;
    product_id: string;
}

class AdditemServices{

    async execute({amount, order_id, product_id}: ItemRequest){
        const order = await prismaClient.orderItem.create({
            data:{
                amount: amount,
                order_id: order_id,
                product_id: product_id

            }
        })

        return order;

    }

}

export { AdditemServices }