import { Response, Request } from "express";
import { ListCategoryServices } from "../../services/category/ListCategoryServices";

class ListCategoryControllers{
    async handle(req: Request, res: Response){

        const listCategoryServices =  new ListCategoryServices();

        const category = await listCategoryServices.executi();

        return res.json(category)
    }
}

export { ListCategoryControllers }