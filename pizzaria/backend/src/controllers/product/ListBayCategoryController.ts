import { Request, Response } from "express";
import { ListByCategoryService } from "../../services/product/ListByCategoryService";

class ListBayCategoryController {
    async handle(req: Request, res: Response) {
        const category_id = req.query.category_id as string;

        const listBayCategory = new ListByCategoryService;

        const products = await listBayCategory.execute({
            category_id
        });
        return res.json(products)
    }
}

export { ListBayCategoryController }
