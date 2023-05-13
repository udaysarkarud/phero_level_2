import express from "express";
import {
  createProductController,
  viewProductController,
} from "./product.controller";

const productRouter = express.Router();

productRouter.post("/", createProductController);
productRouter.get("/", viewProductController);

export default productRouter;
