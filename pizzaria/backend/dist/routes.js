"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const CreateUserController_1 = require("./controllers/user/CreateUserController");
const AuthUserController_1 = require("./controllers/user/AuthUserController");
const DetailUserController_1 = require("./controllers/user/DetailUserController");
const isAuthenticated_1 = require("./middlewares/isAuthenticated");
const CreateCategoryControllers_1 = require("./controllers/category/CreateCategoryControllers");
const ListCategoryControllers_1 = require("./controllers/category/ListCategoryControllers");
const CreateProductControllers_1 = require("./controllers/product/CreateProductControllers");
const ListBayCategoryController_1 = require("./controllers/product/ListBayCategoryController");
const CreateOrderController_1 = require("./controllers/order/CreateOrderController");
const RemoveOrderController_1 = require("./controllers/order/RemoveOrderController");
const AdditemController_1 = require("./controllers/order/AdditemController");
const RemoveitemController_1 = require("./controllers/order/RemoveitemController");
const SendOrderController_1 = require("./controllers/order/SendOrderController");
const ListOrderController_1 = require("./controllers/order/ListOrderController");
const DetailOrderController_1 = require("./controllers/order/DetailOrderController");
const FinishOrderControlle_1 = require("./controllers/order/FinishOrderControlle");
const multer_2 = __importDefault(require("./config/multer"));
const router = (0, express_1.Router)();
exports.router = router;
const upload = (0, multer_1.default)(multer_2.default.upload("./tmp"));
//-- ROTAS USER
router.post('/users', new CreateUserController_1.CreateUserController().handle);
router.post('/session', new AuthUserController_1.AuthUserController().handle);
router.get('/me', isAuthenticated_1.isAuthenticated, new DetailUserController_1.DetailUserController().handle);
//-- ROTAS CATEGORY
router.post('/category', isAuthenticated_1.isAuthenticated, new CreateCategoryControllers_1.CreateCategoryController().handle);
router.get('/categorys', isAuthenticated_1.isAuthenticated, new ListCategoryControllers_1.ListCategoryControllers().handle);
//-- ROTAS PRODUCT
// router.post('/product', isAuthenticated, upload.single('file') , new CreateProductController().handle)
router.post('/product', isAuthenticated_1.isAuthenticated, new CreateProductControllers_1.CreateProductController().handle);
router.get('/category/product', isAuthenticated_1.isAuthenticated, new ListBayCategoryController_1.ListBayCategoryController().handle);
//-- ROTAR ORDER 
router.post('/order', isAuthenticated_1.isAuthenticated, new CreateOrderController_1.CreateOrderController().handle);
router.delete('/order', isAuthenticated_1.isAuthenticated, new RemoveOrderController_1.RemoveOrderController().handle);
router.post('/order/add', isAuthenticated_1.isAuthenticated, new AdditemController_1.AdditemController().handle);
router.delete('/order/remove', isAuthenticated_1.isAuthenticated, new RemoveitemController_1.RemoveitemController().handle);
router.put('/order/send', isAuthenticated_1.isAuthenticated, new SendOrderController_1.SendOrderController().handle);
router.get('/orders', isAuthenticated_1.isAuthenticated, new ListOrderController_1.ListOrdersController().handle);
router.get('/order/detail', isAuthenticated_1.isAuthenticated, new DetailOrderController_1.DetailOrderController().handle);
router.put('/order/finish', isAuthenticated_1.isAuthenticated, new FinishOrderControlle_1.FinishOrderController().handle);
