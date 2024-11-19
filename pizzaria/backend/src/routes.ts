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

import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";
import { AdditemController } from "./controllers/order/AdditemController";
import { RemoveitemController } from "./controllers/order/RemoveitemController";
import { SendOrderController } from "./controllers/order/SendOrderController";
import { ListOrdersController } from "./controllers/order/ListOrderController";
import { DetailOrderController } from "./controllers/order/DetailOrderController";
import { FinishOrderController } from "./controllers/order/FinishOrderControlle";


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

// router.post('/product', isAuthenticated, upload.single('file') , new CreateProductController().handle)
router.post('/product', isAuthenticated, new CreateProductController().handle)
router.get('/category/product', isAuthenticated, new ListBayCategoryController().handle)

//-- ROTAR ORDER 

router.post('/order', isAuthenticated, new CreateOrderController().handle )
router.delete('/order', isAuthenticated, new RemoveOrderController().handle)
router.post('/order/add', isAuthenticated, new AdditemController().handle)
router.delete('/order/remove', isAuthenticated, new RemoveitemController().handle)
router.put('/order/send', isAuthenticated, new SendOrderController().handle)

router.get('/orders', isAuthenticated, new ListOrdersController().handle)
router.get('/order/detail', isAuthenticated, new DetailOrderController().handle)
router.put('/order/finish', isAuthenticated, new FinishOrderController().handle)

export {router};