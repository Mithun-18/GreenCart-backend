import cors from "cors";
import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(cors());
// used to parse json, urlencoded  req body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Required for the load the static images
app.use(express.static(path.join(__dirname, "public")));

// Import Routes
import productRoutes from "./routes/products.routes.js";

app.use("/api/v1", productRoutes);

app.use("/", (_, res) => {
  res.send("Server is running...!");
});

export { app };

