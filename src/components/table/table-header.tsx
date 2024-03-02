import TableDialog from "@/components/table/table-dialog";
import { Button } from "../ui/button";
import { TableWithDialogProps } from "./table-with-dialog";

interface TableHeaderProps<T> extends TableWithDialogProps<T> {}

function TableHeader<T>(props: TableHeaderProps<T>) {
  return (
    <div className="flex justify-end items-center px-5 h-24 w-full bg-slate-100">
      {props.dialog ? (
        <TableDialog {...props}>
          <Button className="bg-green-600 flex gap-2 hover:bg-green-700">
            <i className="bi text-xl bi-plus"></i>
            {props.addButtonText || "Add new"}
          </Button>
        </TableDialog>
      ) : (
        <></>
      )}
    </div>
  );
}

export default TableHeader;
