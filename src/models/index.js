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
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
});

const wishlistSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  productId: {
    type: Number,
    required: true,
  },
});

const CategoryModel = mongoose.model("category", categorySchema);

const ProductModel = mongoose.model("products", productSchema);

const WishlistModel = mongoose.model("wishlist", wishlistSchema);

export { CategoryModel, ProductModel, WishlistModel };

