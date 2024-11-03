import { Router } from "express";
import {
  categoryController,
  getWishlistController,
  productController,
} from "../controllers/product.controllers.js";

const router = Router();

router.route("/categories").get(categoryController);
router.route("/products").get(productController);
router.route("/wishlist").post(getWishlistController);

export default router;
