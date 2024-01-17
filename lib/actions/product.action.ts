"use server";

import Products from "@/database/products.model";
import { Product } from "@/types/Product";
import { connectToDatabase } from "../mongoose";

export const getProducts = async (): Promise<Product[]> => {
  try {
    connectToDatabase();

    const products = await Products.find();

    return products;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getProducById = async (id: string) => {
  try {
    connectToDatabase();

    const product = await Products.findById(id);

    return product;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
