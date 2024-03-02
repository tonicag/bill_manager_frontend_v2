export interface PaginationDTO<T> {
  page: number;
  totalPages: number;
  itemsPerPage: number;
  items: T[];
}
