import { Link } from "react-router-dom";

export default function DashBoardNavigation() {
  return (
    <div className="w-full h-full bg-blue-500 flex flex-col gap-1 justify-center border-r-8 border-blue-900">
      <div className="text-white mt-4 p-1 ">
        <Link
          className="w-full p-2 rounded-md hover:bg-blue-800 font-bold text-white flex items-center"
          to={"/"}
        >
          <i className="bi bi-star-fill text-yellow-300 animate-spin text-[17pt] mr-2"></i>
          <h1>Bill Manager</h1>
        </Link>
      </div>
      <div className="w-full h-[2px]  bg-blue-600 "></div>
      <div className="flex-1 flex flex-col justify-center p-1 ">
        <Link
          className="w-full p-2 rounded-md hover:bg-blue-800 font-bold text-white flex items-center"
          to={""}
        >
          <i className="bi bi-house-fill text-[17pt] mr-2"></i>
          Home
        </Link>
        <Link
          className="w-full p-2 rounded-md hover:bg-blue-800 font-bold text-white flex items-center"
          to={"bills"}
        >
          <i className="bi bi-file-earmark text-[17pt] mr-2"></i>
          Bills
        </Link>
        <Link
          className="w-full p-2 rounded-md hover:bg-blue-800 font-bold text-white flex items-center"
          to={"products"}
        >
          <i className="bi bi-box text-[17pt] mr-2"></i>
          Products
        </Link>
        <Link
          className="w-full p-2 rounded-md hover:bg-blue-800 font-bold text-white flex items-center"
          to={"settings"}
        >
          <i className="bi bi-gear text-[17pt] mr-2"></i>
          Settings
        </Link>
      </div>
      <div className="mb-3 p-1">
        <Link
          className="w-full p-2 rounded-md hover:bg-blue-800 font-semibold text-white flex items-center"
          to={"/logout"}
        >
          <i className="bi bi-box-arrow-in-left text-[17pt] mr-2"></i>
          Log Out
        </Link>
      </div>
    </div>
  );
}
