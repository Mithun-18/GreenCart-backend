import { CategoryModel } from "../models/index.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const categoryController = asyncHandler(async (req, res) => {
  try {
    const result = await CategoryModel.find({});
    res
      .status(200)
      .json(new ApiResponse(200, { result }, "queried successfully"));
  } catch (error) {
    console.log(error);
  }
}, false);

export { categoryController };
