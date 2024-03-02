import { ReactNode } from "react";
import { Button } from "../ui/button";

interface FormWrapperProps<T> {
  children?: ReactNode;
  onSubmit: (data: T) => void;
}

export default function FormWrapper<T>(props: FormWrapperProps<T>) {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1">{props.children}</div>
      <div className="w-full h-18 flex justify-center items-center gap-3">
        <Button className="w-20 bg-blue-700 hover:bg-blue-800">Save</Button>
        <Button className="w-20 bg-blue-700 hover:bg-blue-800">Cancel</Button>
      </div>
    </div>
  );
}
