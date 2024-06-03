import { Link } from "react-router-dom";

const GroupCard = () => {
  return (
    <div className="bg-white rounded-lg w-[330px] h-[400px] mx-10 overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-all">
      {/* card heading */}
      <div className="relative">
        <div className="absolute z-0 h-[90px] top-0 lef-0 w-full">
          <img
            className="size-full"
            src="/assets/community/dummy-banner.jpg"
            alt="croup banner"
          />
        </div>
        <div className="relative cursor-pointer flex justify-center pt-12 z-10 ">
          <Link className="rounded-full" to="#">
            <img
              className="size-[95px] border-[6px] border-white rounded-full bg-cover shadow-lg"
              src="/assets/mystery-group.png"
              alt="group profile"
            />
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center mt-6">
          <h4 className="font-semibold cursor-pointer text-lg">
            <Link to="">Amir basiri</Link>
          </h4>
          <span className="text-gray-400 mt-1 text-sm">Public Group</span>
        </div>
      </div>
 
      {/* members thumb */}
      <div className="flex justify-center my-8">
        <ul className="flex items-center">
          <li>
            <Link to="">
              <img
                className="size-[35px] rounded-full"
                src="/assets/bp-avatar.png"
                alt="avatar"
              />
            </Link>
          </li>
          <li className="-ml-4">
            <Link to="">
              <img
                className="size-[35px] rounded-full"
                src="/assets/bp-avatar.png"
                alt="avatar"
              />
            </Link>
          </li>
          <li className="-ml-4">
            <Link to="">
              <img
                className="size-[35px] rounded-full"
                src="/assets/bp-avatar.png"
                alt="avatar"
              />
            </Link>
          </li>
          <li className="-ml-4">
            <Link to="">
              <img
                className="size-[35px] rounded-full"
                src="/assets/bp-avatar.png"
                alt="avatar"
              />
            </Link>
          </li>
        </ul>
      </div>

      {/* author statistics */}
      <div className="flex justify-center items-center text-center gap-2 mt-12 ">
        <div className="flex flex-col leading-3 gap-1 border-r  pr-2 border-gray-300 ">
          <span>0</span>
          <span className="text-sm text-gray-400">Groups Posts</span>
        </div>
        <div className="flex flex-col leading-3 gap-1">
          <span>1</span>
          <span className="text-sm text-gray-400">Members</span>
        </div>
      </div>
    </div>
  );
};

export default GroupCard;
