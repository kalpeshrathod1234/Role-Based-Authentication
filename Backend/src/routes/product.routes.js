import { Router } from "express";
import {fetchProductData, getAllProducts,getOneProduct, deleteProduct, updateProduct} from "../controllers/productdata.controller.js"
import { upload } from "../middlewares/multer.middleware.js";

const router = Router()

router.route("/").post(fetchProductData)
router.route("/allproducts").get(getAllProducts)
router.route("/:id").get(getOneProduct)
router.route("/:id").delete(deleteProduct)
router.route("/:id").post(updateProduct)


//secure routes

export default router