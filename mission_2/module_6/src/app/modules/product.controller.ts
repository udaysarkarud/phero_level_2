import { Request, Response, NextFunction } from "express";
import { createProduct, viewProduct } from "./product.service";

export const createProductController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const product = await createProduct(req.body);

  res.status(200).json({
    status: "success",
    data: product,
  });
};

export const viewProductController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const product = await viewProduct();

  res.status(200).json({
    status: "success",
    data: product,
  });
};
