import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
  categoryId: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
});

const productSchema = mongoose.Schema({
  productId: {
    type: Number,
    required: true,
  },
  categoryId: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
});

const CategoryModel = mongoose.model("category", categorySchema);

const ProductModel = mongoose.model("products", productSchema);

export { CategoryModel, ProductModel };
