import { Request, Response } from "express";
import { AdditemServices } from "../../services/order/AdditemServices";

class AdditemController{
    async handle(req: Request, res: Response){
        const {amount, order_id, product_id} = req.body;

        const additemServices = new AdditemServices();

        const additem = await additemServices.execute({
            amount, order_id, product_id
        })

        return res.json(additem)

    }
}

export { AdditemController }