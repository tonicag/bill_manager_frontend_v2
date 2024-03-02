import { ProductDTO } from "@/interfaces/product.dto";
import { useMutation, useQuery } from "react-query";
import { createProduct, getAllProducts } from "./product.service";
import { PaginationParameters } from "../interfaces/paginationParameters";

export function createProductMutation() {
  return useMutation((payload: ProductDTO) => createProduct(payload));
}

export function getAllProductsQuery(payload: PaginationParameters) {
  return useQuery(["products", payload], () => getAllProducts(payload));
}
