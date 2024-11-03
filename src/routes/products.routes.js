import { Router } from "express";
import {
  categoryController,
  productController,
} from "../controllers/product.controllers.js";

const router = Router();

router.route("/categories").get(categoryController);
router.route("/products").get(productController);

export default router;
