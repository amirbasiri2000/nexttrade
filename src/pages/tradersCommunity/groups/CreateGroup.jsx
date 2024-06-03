import { BsMegaphone } from "react-icons/bs";
import CummunityNavbar from "../../../components/tradersCommunity/Navbar";
import { Link } from "react-router-dom";
import GroupsPageBanner from "../../../components/tradersCommunity/groups/GroupsPageBanner";

const CreateGroup = () => {
  return (
    <div className="bg-link-water w-full min-h-screen h-auto">
      <CummunityNavbar />
      <div className="wrapper">
        {/* banner */}
        <GroupsPageBanner />

        {/* title */}
        <div className="my-10">
          <h1 className="text-2xl font-semibold">Crete A Group</h1>
        </div>

        {/*  */}
        <div className="pb-20">
          {/* name and description */}
          <div className="flex flex-col items-start space-y-6">
            <label className="flex flex-col justify-start w-[80%]">
              <span className="label">Group Name: </span>
              <input
                className="px-4 py-3 rounded-lg border w-full outline-blue-light"
                type="text"
                placeholder="Group name"
              />
            </label>

            <label className="flex flex-col justify-start w-[80%]">
              <span className="label">Description: </span>
              <textarea
                rows={3}
                placeholder="Group Description"
                className="w-full mt-1 rounded-lg border p-2 outline-blue-light"
              />
            </label>
          </div>

          {/* button */}
          <div className="w-full my-10 flex justify-start gap-4">
            <Link
              to="/traders-community/groups"
              className="px-8 py-3 font-semibold bg-blue-light text-white hover:bg-blue-dark transition-colors shadow-xl rounded-xl"
            >
              Back
            </Link>

            <button className="px-6 py-3 bg-white text-blue-light font-semibold border-2 border-blue-light hover:text-white hover:bg-blue-light transition-colors shadow-xl rounded-xl">
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateGroup;
