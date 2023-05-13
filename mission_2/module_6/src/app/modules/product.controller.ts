import { Request, Response, NextFunction } from "express";
import { createProduct, viewProduct, viewProductOne } from "./product.service";

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

export const viewOneProductController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const product = await viewProductOne(req.params.id);

  res.status(200).json({
    status: "success",
    data: product,
  });
};
