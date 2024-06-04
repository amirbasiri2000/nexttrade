import { IoEllipsisVerticalSharp } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { MdReply } from "react-icons/md";
import { Link } from "react-router-dom";

const SingleMsg = () => {
  return (
    <div className="group cursor-pointer h-auto opacity-100 pr-5 relative flex flex-row items-center w-auto mb-3 p-0 max-w-full">
      <div className="max-w-[100%-75px] bg-[#e8e8e8] text-black rounded-[4px] text-left py-3 px-3">
        <span className="bg-blue-secondary rounded-[4px] p-[6px]">
          <Link to="#">Trading Signal</Link>
        </span>
        <span className="ml-2">
          <span className="text-[10px] whitespace-nowrap">10:51</span>
        </span>
        <div></div>
      </div>

      {/*  */}
      <span className="hidden transition group-hover:flex items-center space-x-2 ml-1 text-sm">
        <span className="cursor-pointer">
          <CiStar className="text-[#fdae00]" size={15} />
        </span>
        <span className="cursor-pointer">
          <MdReply className="text-[#808080]" size={13} />
        </span>
        <span className="cursor-pointer">
          <IoEllipsisVerticalSharp size={13} className="text-[#808080]" />
        </span>
      </span>
    </div>
  );
};

export default SingleMsg;
