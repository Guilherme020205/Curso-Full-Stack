import { Router } from "express";
import multer from "multer";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";

import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./controllers/category/CreateCategoryControllers";
import { ListCategoryControllers } from "./controllers/category/ListCategoryControllers";

import { CreateProductController } from "./controllers/product/CreateProductControllers";
import { ListBayCategoryController } from "./controllers/product/ListBayCategoryController";

import upLoadConfig from "./config/multer"

const router = Router();

const upload = multer(upLoadConfig.upload("./tmp"))

//-- ROTAS USER

router.post('/users', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

router.get('/me', isAuthenticated, new DetailUserController().handle)

//-- ROTAS CATEGORY

router.post('/category', isAuthenticated, new CreateCategoryController().handle)

router.get('/categorys', isAuthenticated, new ListCategoryControllers().handle)

//-- ROTAS PRODUCT

router.post('/product', isAuthenticated, upload.single('file') , new CreateProductController().handle)
router.get('/category/product', isAuthenticated, new ListBayCategoryController().handle)


export {router};