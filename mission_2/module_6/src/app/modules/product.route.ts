import express from "express";
import {
  createProductController,
  viewOneProductController,
  viewProductController,
} from "./product.controller";

const productRouter = express.Router();

productRouter.post("/", createProductController);
productRouter.get("/", viewProductController);
productRouter.get("/:id", viewOneProductController);

export default productRouter;
