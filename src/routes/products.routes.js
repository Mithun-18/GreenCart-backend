import { Router } from "express";
// import { categoryController } from "../controllers/product.controllers.js";
import {
    categoryController,
  } from "../controllers/product.controllers.js";

const router = Router();

router.route("/category").get(categoryController);

export default router;
