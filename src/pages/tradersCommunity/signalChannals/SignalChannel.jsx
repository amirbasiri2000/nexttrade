import { BsArrowsAngleExpand } from "react-icons/bs";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import { IoIosArrowDown, IoIosSend } from "react-icons/io";
import { HiMiniCheckBadge } from "react-icons/hi2";
import { CiStar, CiFaceSmile } from "react-icons/ci";
import { MdReply } from "react-icons/md";
import { RiAttachment2 } from "react-icons/ri";
import { Link } from "react-router-dom";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { sendMsgAction } from "../../../redux/features/messages/sendMsgSlice";

const SignalChannel = ({ id }) => {
  const [userMsg, setUserMsg] = useState("");

  const dispatch = useDispatch();
  const axiosPrivate = useAxiosPrivate();

  const sendMsgHandler = () => {
    dispatch(
      sendMsgAction({
        axiosPrivate,
        data: {
          parentId: null,
          categoryid: 1,
          subcategoryid: 2,
          subcategorygroupid: 2,
          title: "title",
          messagebody: userMsg,
        },
      })
    );
  };

  return (
    <div className="mt-10 bg-white rounded-sm shadow-sm">
      <div className="border h-[630px]">
        <div className="h-full w-full">
          {/* chat header */}
          <div className="flex justify-between items-center h-11 w-full border-b border-[#ebebeb] px-2">
            <div className="flex items-center space-x-2">
              <div className="text-sm mr-auto">
                <span>
                  <Link to="#">
                    <img
                      className="w-8 h-8"
                      src="/assets/community/mystery-group-50 .png"
                      alt="group name"
                    />
                  </Link>
                </span>
              </div>
              <div className="flex flex-col items-start justify-start ">
                <div className="capitalize whitespace-nowrap text-sm">
                  <Link to="#">Test Signal Channle 1</Link>
                </div>

                <div className="flex items-center gap-1 text-xs whitespace-nowrap text-gray-500">
                  <span>6</span>
                  <p>participants</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-5 pr-3">
              <span className="cursor-pointer">
                <BsArrowsAngleExpand
                  className="text-blue-main font-bold"
                  size={18}
                />
              </span>
              <div className="cursor-pointer">
                <IoEllipsisVerticalSharp size={20} className="text-blue-main" />
              </div>
            </div>
          </div>

          {/* chat content */}
          <div className="relative flex w-full flex-row h-[calc(100%-44px)] box-border">
            <div className="relative max-w-full w-full h-full flex flex-col">
              {/* conversation start */}
              <div className="relative z-10"></div>

              {/* messages content */}
              <div className="relative h-full">
                <div className="h-full overflow-auto text-center">
                  <div className="m-0 overflow-y-scroll scrollbar-thin h-full">
                    <div className="pt-4 pb-1">
                      {/* user message */}
                      <div className="w-full">
                        <div
                          aria-label="Wednesday, May 29, 2024"
                          className="bg-black cursor-default rounded-sm py-[3px] px-[7px] opacity-85 inline-block text-xs mx-auto my-3 text-white"
                        >
                          May 29
                        </div>

                        <div className="mb-4 text-left box-border">
                          {/* user pic */}
                          <div className="sticky top-3  left-4 w-9 h-9 z-10 block">
                            <span>
                              <Link to="#">
                                <img
                                  className="w-full h-full"
                                  src="/assets/bp-avatar.png"
                                  alt="user name"
                                />
                              </Link>
                            </span>
                          </div>

                          {/* user content */}
                          <div className="pl-16 -mt-9">
                            {/* user info */}
                            <div className="flex items-center mb-1">
                              <div className="font-bold mr-1 flex items-center">
                                <Link to="#">Amirbasiri</Link>
                                <span>
                                  <HiMiniCheckBadge size={15} />
                                </span>
                              </div>
                            </div>

                            {/* user messages */}
                            <ul className="m-0 p-0">
                              <div className="group cursor-pointer h-auto opacity-100 pr-5 relative flex flex-row items-center w-auto mb-3 p-0 max-w-full">
                                <div className="max-w-[100%-75px] bg-[#e8e8e8] text-black rounded-[4px] text-left py-3 px-3">
                                  <span className="bg-blue-secondary rounded-[4px] p-[6px]">
                                    <Link to="#">Trading Signal</Link>
                                  </span>
                                  <span className="ml-2">
                                    <span className="text-[10px] whitespace-nowrap">
                                      10:51
                                    </span>
                                  </span>
                                  <div></div>
                                </div>

                                {/*  */}
                                <span className="hidden transition group-hover:flex items-center space-x-2 ml-1 text-sm">
                                  <span className="cursor-pointer">
                                    <CiStar
                                      className="text-[#fdae00]"
                                      size={15}
                                    />
                                  </span>
                                  <span className="cursor-pointer">
                                    <MdReply
                                      className="text-[#808080]"
                                      size={13}
                                    />
                                  </span>
                                  <span className="cursor-pointer">
                                    <IoEllipsisVerticalSharp
                                      size={13}
                                      className="text-[#808080]"
                                    />
                                  </span>
                                </span>
                              </div>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/*  */}
                      <div className="w-full">
                        <div
                          aria-label="Wednesday, May 29, 2024"
                          className="bg-black cursor-default rounded-sm py-[3px] px-[7px] opacity-85 inline-block text-xs mx-auto my-3 text-white"
                        >
                          May 29
                        </div>

                        <div className="mb-4 text-left box-border">
                          {/* user pic */}
                          <div className="sticky top-3  left-4 w-9 h-9 z-10 block">
                            <span>
                              <Link to="#">
                                <img
                                  className="w-full h-full"
                                  src="/assets/bp-avatar.png"
                                  alt="user name"
                                />
                              </Link>
                            </span>
                          </div>

                          {/* user content */}
                          <div className="pl-16 -mt-9">
                            {/* user info */}
                            <div className="flex items-center mb-1">
                              <div className="font-bold mr-1 flex items-center">
                                <Link to="#">Amirbasiri</Link>
                                <span>
                                  <HiMiniCheckBadge size={15} />
                                </span>
                              </div>
                            </div>

                            {/* user messages */}
                            <ul className="m-0 p-0">
                              <div className="group cursor-pointer h-auto opacity-100 pr-5 relative flex flex-row items-center w-auto mb-3 p-0 max-w-full">
                                <div className="max-w-[100%-75px] bg-[#e8e8e8] text-black rounded-[4px] text-left py-3 px-3">
                                  <span className="bg-blue-secondary rounded-[4px] p-[6px]">
                                    <Link to="#">Trading Signal</Link>
                                  </span>
                                  <span className="ml-2">
                                    <span className="text-[10px] whitespace-nowrap">
                                      10:51
                                    </span>
                                  </span>
                                  <div></div>
                                </div>

                                {/*  */}
                                <span className="hidden transition group-hover:flex items-center space-x-2 ml-1 text-sm">
                                  <span className="cursor-pointer">
                                    <CiStar
                                      className="text-[#fdae00]"
                                      size={15}
                                    />
                                  </span>
                                  <span className="cursor-pointer">
                                    <MdReply
                                      className="text-[#808080]"
                                      size={13}
                                    />
                                  </span>
                                  <span className="cursor-pointer">
                                    <IoEllipsisVerticalSharp
                                      size={13}
                                      className="text-[#808080]"
                                    />
                                  </span>
                                </span>
                              </div>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* scroll down icon */}
                <span className="absolute right-8 bottom-8 z-20 drop-shadow-sm cursor-pointer hover:bg-gray-200 rounded-full p-1 transition">
                  <IoIosArrowDown size={20} className="text-blue-main" />
                </span>
              </div>
            </div>
          </div>

          {/* create signl channel */}

          <div className="mt-8">
            <span className="border-2 border-blue-main transition-all rounded-[4px] px-8 py-3 font-semibold text-slate-900 hover:bg-blue-main hover:text-gray-100 cursor-pointer">
              <Link to={`/traders-community/create-signal/${id}`}>
                Create New Signal
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignalChannel;
