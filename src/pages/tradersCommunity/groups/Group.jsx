import { Link } from "react-router-dom";
import CummunityNavbar from "../../../components/tradersCommunity/Navbar";
import Messages from "../../../components/tradersCommunity/group/Messages";

const CommunityGroup = () => {
  return (
    <div className="bg-link-water w-full min-h-screen h-full">
      <div className="w-full">
        <CummunityNavbar />

        <div className=" w-full sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto">
          <div className="mt-10 w-full">
            {/* User Banner */}
            <div className="relative flex items-end  z-50 p-4 rounded-lg shadow-lg w-full h-[300px] text-white">
              {/* background img */}
              <div className="absolute inset-0 w-full h-full rounded-lg overflow-hidden -z-[1]">
                <div className="bg-gradient-to-t from-black via-transparent to-transparent absolute inset-0 z-0"></div>
                <img
                  src="/assets/community/dummy-banner.jpg"
                  alt="banner"
                  className="object-fit rounded-lg w-full h-full z-10"
                />
              </div>

              {/* content  */}

              <div className="z-50 px-10 flex items-start w-full gap-4">
                <div className="w-[112px] h-[100px] rounded-full border-4 border-collapse z-20">
                  <img
                    className="size-full rounded-full z-20"
                    src="/assets/mystery-group-50.png"
                    alt="group"
                  />
                </div>
                <div className="w-full">
                  <div className="leading-3">
                    <h3 className="text-2xl font-bold capitalize">
                      o'zbekiston savdogarlari guruhi
                    </h3>
                    <span className="text-sm text-gray-400 ">NextBit</span>
                  </div>
                  <div className="flex justify-between items-start mt-4">
                    <button className="w-max border border-gray-500 px-4 py-2 hover:bg-white hover:text-gray-700 transition-all">
                      Request to join
                    </button>
                    <div className="flex items-center flex-wrap gap-4 mr-6">
                      <div className="flex items-center gap-1">
                        <span className="text-sm text-gray-400">
                          Group Type :{" "}
                        </span>
                        <span className="text-sm font-medium">
                          Public group
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-sm text-gray-400">
                          Members :{" "}
                        </span>
                        <span className="text-sm font-medium"> 6</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*  */}
            <div className="mt-10 w-full pb-10">
              <div className="flex flex-col lg:flex-row">
                <section className="flex-[2] mb-[100px]">
                  <div className="bg-white shadow-sm rounded-lg px-8 py-6">
                    <ul className="flex items-center w-full overflow-x-scroll scrollbar-none space-x-4 text-gray-500 text-sm font-medium ">
                      <li className="cursor-pointer hover:text-gray-900 transition-all">
                        Home
                      </li>
                      <li className="cursor-pointer hover:text-gray-900 transition-all">
                        Gallery
                      </li>
                      <li className="cursor-pointer hover:text-gray-900 transition-all text-gray-900">
                        Messages
                      </li>
                      <li className="cursor-pointer hover:text-gray-900 transition-all">
                        Forums
                      </li>
                      <li className="cursor-pointer hover:text-gray-900 transition-all">
                        Signals
                      </li>
                      <li className="cursor-pointer hover:text-gray-900 transition-all w-max">
                        Live Meeting
                      </li>
                    </ul>
                  </div>

                  {/* Messages */}
                  <Messages />
                </section>

                {/* right section */}
                <section className="flex-1 pl-4">
                  <aside className="bg-white shadow-lg min-h-[500px] rounded-lg overflow-y-scroll scrollbar-none">
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
                            <span className="text-xs text-gray-500">
                              2 days ago
                            </span>
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
                            <span className="text-xs text-gray-500">
                              2 days ago
                            </span>
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
                            <span className="text-xs text-gray-500">
                              2 days ago
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </aside>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityGroup;
