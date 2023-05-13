import { IProduct } from "./product.interface";
import { Product } from "./product.model";

export const createProduct = async (data: IProduct): Promise<IProduct> => {
  const productData = await new Product(data);
  await productData.save();
  return productData;
};

export const viewProduct = async (): Promise<IProduct[] | []> => {
  const getAllProduct = await Product.find();
  return getAllProduct;
};

export const viewProductOne = async (
  payload: string
): Promise<IProduct | null> => {
  const gerProduct = await Product.findOne({ id: payload }, { name: 1 });
  return gerProduct;
};
