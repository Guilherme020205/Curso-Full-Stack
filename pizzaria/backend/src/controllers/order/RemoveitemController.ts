import { Response, Request } from "express";
import { RemoveitemServices } from "../../services/order/RemoveitemServices";

class RemoveitemController {
    async handle(req: Request, res: Response) {
        const item_id = req.query.item_id as string

        const removeitemServices = new RemoveitemServices();

        const order = await removeitemServices.execute({
            item_id
        })

        return res.json(order)
    }
}

export { RemoveitemController }