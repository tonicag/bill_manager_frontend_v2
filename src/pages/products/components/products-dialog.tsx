import FormWrapper from "@/components/form/form-wrapper";
import { TableWithDialogProps } from "@/components/table/table-with-dialog";
import { ProductDTO } from "@/interfaces/product.dto";
interface ProductsDialogProps extends TableWithDialogProps<ProductDTO> {
  onSubmit: (data: ProductDTO) => void;
}
function ProductsDialog(props: ProductsDialogProps) {
  console.log(props);
  return <FormWrapper<ProductDTO> onSubmit={(data) => {}}></FormWrapper>;
}

export default ProductsDialog;
