import { useTableDialogContext } from "@/components/table/context/table-dialog-context";
import { TableWithDialogProps } from "@/components/table/table-with-dialog";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export interface DialogProps<T> extends TableWithDialogProps<T> {}

export default function TableDialog<T>(props: DialogProps<T>) {
  const context = useTableDialogContext();
  return (
    <Dialog open={context.dialogOpened} onOpenChange={context.setDialogOpened}>
      <DialogTrigger>{props.children}</DialogTrigger>
      <DialogContent className="sm:max-w-3xl w-full h-[80%] flex flex-col">
        <DialogHeader className="w-full flex items-center">
          <DialogTitle>
            {props.data ? "Edit Product" : "Add product"}
          </DialogTitle>
        </DialogHeader>
        <div className="flex-1">
          {props.dialog && <props.dialog {...props}></props.dialog>}
        </div>
      </DialogContent>
    </Dialog>
  );
}
