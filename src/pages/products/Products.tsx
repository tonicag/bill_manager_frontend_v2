import { getAllProducts } from "@/services/products/product.service";
import { useEffect, useMemo, useState } from "react";
import { ColDef } from "ag-grid-community";
import { ProductDTO } from "@/interfaces/product.dto";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import TableWithDialog from "@/components/table/table-with-dialog";
import TableDialog from "../../components/table/table-dialog";
import ProductsDialog from "./components/products-dialog";

export default function Products() {
  const colDefs: ColDef<ProductDTO>[] = [
    { field: "name" },
    { field: "price" },
    { field: "description" },
  ];
  const [rowData, setRowData] = useState<ProductDTO[]>([]);

  useEffect(() => {
    const f = async () => {
      const products = await getAllProducts({
        itemsPerPage: 10,
        page: 1,
        searchKey: "",
      });
      setRowData(products.items);
    };
    f();
  }, []);

  return (
    <div className="w-full h-full">
      <TableWithDialog
        colDefs={colDefs}
        rowData={rowData}
        dialog={ProductsDialog}
      ></TableWithDialog>
    </div>
  );
}
