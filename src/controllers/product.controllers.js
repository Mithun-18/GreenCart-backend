import { CategoryModel, ProductModel, WishlistModel } from "../models/index.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const categoryController = asyncHandler(async (req, res) => {
  try {
    const result = await CategoryModel.find({});
    res.status(200).json(new ApiResponse(200, result, "queried successfully"));
  } catch (error) {
    console.log(error);
  }
}, false);

const productController = asyncHandler(async (req, res) => {
  try {
    const result = await ProductModel.find({});
    res.status(200).json(new ApiResponse(200, result, "queried successfully"));
  } catch (error) {
    console.log(error);
  }
}, false);

const getWishlistController = asyncHandler(async (req, res) => {
  const { userId } = req.body;
  try {
    const result = await WishlistModel.find(
      { userId: userId },
      { productId: 1 }
    );
    res.status(200).json(new ApiResponse(200, result, "queried successfully"));
  } catch (error) {
    console.log(error);
  }
}, false);

export { categoryController, getWishlistController, productController };

