import { CellClickedEvent, ColDef } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { cn } from "@/lib/utils";
import TableHeader from "./table-header";
import { TableDialogContext } from "./context/table-dialog-context";
import { ComponentType, ReactNode, useEffect, useState } from "react";

export interface TableActions<T> {
  onClick?: (data: T) => void;
  iconClass: string;
}

export interface TableWithDialogProps<T> {
  children?: ReactNode;
  colDefs: ColDef<T>[];
  rowData: T[];
  dialog?: ComponentType<any>;
  actions?: TableActions<T>[];
  dialogHeader?: string;
  addButtonText?: string;
  onSave?: (data: T) => void;
  data?: T;
  dialogTitle?: string;
}

function TableWithDialog<T extends { id: string }>(
  props: TableWithDialogProps<T>
) {
  const colDefs = props.actions
    ? ([
        ...props.colDefs,
        {
          headerName: "",
          field: "id",
          cellRenderer: () => (
            <div className="flex gap-1 items-center">
              {props.actions?.map((i) => (
                <i
                  className={cn(
                    "bi",
                    "cursor-pointer text-[12pt]",
                    i.iconClass
                  )}
                ></i>
              ))}
            </div>
          ),
        },
      ] as ColDef<T>[])
    : [...props.colDefs];

  const [data, setData] = useState<T | undefined>();
  const [dialogOpened, setDialogOpened] = useState(false);

  useEffect(() => {
    if (dialogOpened === false) {
      setData(undefined);
    }
  }, [dialogOpened]);

  function onCellClick(event: CellClickedEvent) {
    setData(event.data);
    setDialogOpened(true);
  }

  function onSave(data: T) {
    setData(undefined);
    setDialogOpened(false);
  }

  return (
    <TableDialogContext.Provider
      value={{ data, setData, dialogOpened, setDialogOpened }}
    >
      <div className="w-full h-full flex flex-col">
        <TableHeader {...props} onSave={onSave} />
        <div className="w-full flex-1 ag-theme-quartz">
          <AgGridReact
            onCellClicked={onCellClick}
            columnDefs={colDefs}
            autoSizeStrategy={{ type: "fitGridWidth" }}
            rowData={props.rowData}
          />
        </div>
      </div>
    </TableDialogContext.Provider>
  );
}

export default TableWithDialog;
