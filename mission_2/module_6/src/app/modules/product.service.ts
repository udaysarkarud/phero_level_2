import { IProduct } from "./product.interface";
import { Product } from "./product.model";

export const createProduct = async (data: IProduct) => {
  const productData = await new Product(data);
  await productData.save();
  return productData;
};

export const viewProduct = async () => {
  const getAllProduct = await Product.find({});
  return getAllProduct;
};
