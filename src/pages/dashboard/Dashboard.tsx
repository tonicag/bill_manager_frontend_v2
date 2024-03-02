import { Outlet } from "react-router-dom";
import DashBoardNavigation from "./DashBoardNavigation";

export default function Dashboard() {
  return (
    <div className="w-full h-full grid grid-cols-5">
      <div className="">
        <DashBoardNavigation />
      </div>
      <div className="flex-[5] col-span-4 bg-blue-200">
        <Outlet />
      </div>
    </div>
  );
}
