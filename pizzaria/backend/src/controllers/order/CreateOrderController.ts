import { Request, Response } from "express";
import { CreateOrderServices } from "../../services/order/CreateOrdeService";

class CreateOrderController {
    async handle(req: Request, res: Response) {
        const { table, name } = req.body

        const createOrderServices = new CreateOrderServices();

        const order = await createOrderServices.execute({
            table, name
        });
        return res.json(order)

    }
}

export { CreateOrderController }
