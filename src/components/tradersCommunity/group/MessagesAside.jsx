import { Link } from "react-router-dom";


const MessagesAside = () => {

  return (
    <div className="p-6">
      <h3 className="text-lg pb-3 font-bold text-gray-900 border-b-2 border-blue-500 w-max ">
        Groups
      </h3>
      <div className="my-4 flex items-center flex-wrap gap-3 text-xs font-medium text-gray-500">
        <span className="bg-blue-main text-gray-100 border rounded-[5px] shadow-sm px-3 py-1 hover:bg-blue-light hover:text-gray-100 transition-all cursor-pointer">
          Newest
        </span>
        <span className="border rounded-[5px] shadow-sm px-3 py-1 hover:bg-blue-light hover:text-gray-100 transition-all cursor-pointer">
          Active
        </span>
        <span className="border rounded-[5px] shadow-sm px-3 py-1 hover:bg-blue-light hover:text-gray-100 transition-all cursor-pointer">
          Popular
        </span>
        <span className="border rounded-[5px] shadow-sm px-3 py-1 hover:bg-blue-light hover:text-gray-100 transition-all cursor-pointer">
          Alphabetical
        </span>
      </div>

      <ul className="flex flex-col gap-6 mt-6 pb-6">
        <li className="flex items-center gap-3">
          <Link to="#">
            <img
              className="rounded-full shrink-0 size-[50px] border-2 border-white shadow-sm p-[1px] object-fill"
              src="/assets/community/mystery-group-50 .png"
              alt="Group Avatar"
            />
          </Link>
          <div className="flex flex-col">
            <Link
              className="text-gray-600 text-base hover:text-gray-800 transition-all font-medium"
              to="#"
            >
              Amir Basiri
            </Link>
            <span className="text-xs text-gray-500">2 days ago</span>
          </div>
        </li>

        <li className="flex items-center gap-3">
          <Link to="#">
            <img
              className="rounded-full size-[50px] border-2 border-white shadow-sm p-[1px] object-fill"
              src="/assets/community/mystery-group-50 .png"
              alt="Group Avatar"
            />
          </Link>
          <div className="flex flex-col">
            <Link
              className="text-gray-600 text-base hover:text-gray-800 transition-all font-medium"
              to="#"
            >
              Amir Basiri
            </Link>
            <span className="text-xs text-gray-500">2 days ago</span>
          </div>
        </li>

        <li className="flex items-center gap-3">
          <Link to="#">
            <img
              className="rounded-full size-[50px] border-2 border-white shadow-sm p-[1px] object-fill"
              src="/assets/community/mystery-group-50 .png"
              alt="Group Avatar"
            />
          </Link>
          <div className="flex flex-col">
            <Link
              className="text-gray-600 text-base hover:text-gray-800 transition-all font-medium"
              to="#"
            >
              Amir Basiri
            </Link>
            <span className="text-xs text-gray-500">2 days ago</span>
          </div>
        </li>
      </ul>
    </div>
  );
}


export default MessagesAside;