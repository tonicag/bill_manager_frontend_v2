import { ProductDTO } from "@/interfaces/product.dto";
import { API } from "../API";
import { PaginationParameters } from "../interfaces/paginationParameters";
import { PaginationDTO } from "@/interfaces/pagination.dto";

export async function createProduct(payload: ProductDTO) {
  return API.post("/api/product/create", payload).then(
    (res) => res?.data?.result
  );
}

export async function getAllProducts(payload: PaginationParameters) {
  return API.get("/api/product/all", { params: payload }).then(
    (res) => res?.data?.result as PaginationDTO<ProductDTO>
  );
}
