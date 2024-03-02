import { createContext, useContext } from "react";

interface TableDialogContextType<T> {
  data?: T;
  setData?: React.Dispatch<React.SetStateAction<T | undefined>>;
  dialogOpened: boolean;
  setDialogOpened: React.Dispatch<React.SetStateAction<boolean>>;
  onSave?: (data: T) => void;
}

export const TableDialogContext =
  createContext<TableDialogContextType<any> | null>(null);

export function useTableDialogContext<T>() {
  const context = useContext(TableDialogContext);
  if (context === null) {
    throw new Error("Context must be used inside provider!");
  }
  return context as TableDialogContextType<T>;
}
