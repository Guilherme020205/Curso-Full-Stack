import prismaClient from "../../prisma";

interface ItemRequest{
    item_id: string;
}
class RemoveitemServices{
    async execute({item_id}: ItemRequest){
        const order = await prismaClient.orderItem.delete({
            where: {
                id: item_id
            }
        });
        return order;
    }
}


export { RemoveitemServices }