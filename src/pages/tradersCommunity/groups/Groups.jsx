import { Link } from "react-router-dom";
import CummunityNavbar from "../../../components/tradersCommunity/Navbar";

import { RiArrowRightWideLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import GroupCard from "../../../components/tradersCommunity/groups/GroupCard";
import Footer from "../../../components/Footer";
import GroupsPageBanner from "../../../components/tradersCommunity/groups/GroupsPageBanner";
import { useDispatch, useSelector } from "react-redux";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import { getAllGroups } from "../../../redux/features/groupSlice";
import { useEffect } from "react";
import CustomCircleLoader from "../../../utils/loaders/CustomCircleLoader";

const CommunityGroups = () => {
  const dispatch = useDispatch();
  const axiosPrivate = useAxiosPrivate();
  const { createGroupStatus, isLoading, errorMsg, allGroups } = useSelector(
    (state) => state.group
  );

  useEffect(() => {
    dispatch(getAllGroups({ axiosPrivate }));
  }, []);

  
  return (
    <>
      {isLoading && (
        <div className="w-full h-screen fixed inset-0 z-[1001] flex justify-center items-center">
          <div className="w-full h-full absolute bg-black opacity-65"></div>
          <div className="z-[1002]">
            <CustomCircleLoader />
          </div>
        </div>
      )}
      <div className="bg-link-water w-full min-h-screen h-auto">
        <CummunityNavbar />
        <div className="wrapper">
          {/* banner */}
          <GroupsPageBanner />

          {/* searhc filter */}
          <div className="bg-white rounded-lg p-4 grid grid-cols-1 md:grid-cols-2">
            <div className="">
              <div className="flex justify-between items-center border rounded-lg shadow-sm min-w-[300px] max-w-[500px]">
                <input
                  className="border-none outline-none bg-transparent p-2 w-full h-full"
                  type="text"
                  placeholder="Search Groups"
                />
                <span className="bg-blue-light shadow-lg rounded-tr-lg rounded-br-lg py-3 px-4 text-white cursor-pointer">
                  <CiSearch size={24} />
                </span>
              </div>
            </div>

            <div className="w-full md:w-[80%] justify-start mt-6 md:mt-0   md:justify-end ml-auto flex items-center text-gray-600">
              <h4>Order By : </h4>
              <select className="bg-transparent ml-2 w-[200px] outline-none border-none">
                <option value="last">Last Active</option>
                <option value="Most">Most Members</option>
                <option value="new">Newly Created</option>
              </select>
            </div>
          </div>

          {/* groups items */}
          <div className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-4">
              {allGroups?.map((item, index) => (
                <GroupCard {...item} key={index} />
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="flex justify-center pb-[200px] mt-20">
            <div className="flex justify-center items-center gap-1">
              <div
                className={` bg-blue-light text-white size-[50px] flex items-center justify-center rounded-lg text-xl cursor-pointer hover:bg-blue-light hover:text-white transition-colors`}
              >
                1
              </div>
              <div className="bg-white size-[50px] flex items-center justify-center rounded-lg text-xl cursor-pointer hover:bg-blue-light hover:text-white transition-colors">
                2
              </div>
              <div className="bg-white size-[50px] flex items-center justify-center rounded-lg text-xl cursor-pointer hover:bg-blue-light hover:text-white transition-colors">
                <RiArrowRightWideLine size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CommunityGroups;
