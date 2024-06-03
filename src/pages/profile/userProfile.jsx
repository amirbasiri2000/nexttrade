import { useState } from "react";
import Navbar from "../../components/Navbar";
import { AiOutlineDashboard } from "react-icons/ai";
import Dashboard from "../../components/profile/Dashboard";
import MyGroups from "../../components/profile/MyGroups";
import MyProfile from "../../components/profile/MyProfile";
import EnrolledCourses from "../../components/profile/EnrolledCourses";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  return (
    <div className="bg-blue-dark w-full min-h-screen pb-20">
      <Navbar />

      <div className="wrapper">
        <header className="mt-20 flex space-x-6 items-center border-b pb-4">
          <img
            className="size-[100px] rounded-full border-4 shadow-lg border-white"
            src="/assets/bp-avatar.png"
            alt="user img"
          />

          <div className="flex flex-col gap-2 text-white">
            <span>Hello,</span>
            <h4 className="font-semibold text-xl">Amir Basiri</h4>
          </div>
        </header>

        <div className="flex">
          <div className="flex-[1]">
            <ul className="">
              <li
                onClick={() => setActiveTab("dashboard")}
                className="flex items-center gap-3 py-2 px-2 hover:bg-gold-light_400 cursor-pointer transition-all text-white rounded-tl-lg rounded-bl-lg"
              >
                <AiOutlineDashboard size={20} />
                Dashboard
              </li>
              <li
                onClick={() => setActiveTab("myGroups")}
                className="flex items-center gap-3 py-2 px-2 hover:bg-gold-light_400 cursor-pointer transition-all text-white rounded-tl-lg rounded-bl-lg"
              >
                <AiOutlineDashboard size={20} />
                My Groups
              </li>
              <li
                onClick={() => setActiveTab("myProfile")}
                className="flex items-center gap-3 py-2 px-2 hover:bg-gold-light_400 cursor-pointer transition-all text-white rounded-tl-lg rounded-bl-lg"
              >
                <AiOutlineDashboard size={20} />
                My Profile
              </li>
              <li
                onClick={() => setActiveTab("enrolledCourses")}
                className="flex items-center gap-3 py-2 px-2 hover:bg-gold-light_400 cursor-pointer transition-all text-white rounded-tl-lg rounded-bl-lg"
              >
                <AiOutlineDashboard size={20} />
                Enrolled Courses
              </li>
              <li
                onClick={() => setActiveTab("orderHistory")}
                className="flex items-center gap-3 py-2 px-2 hover:bg-gold-light_400 cursor-pointer transition-all text-white rounded-tl-lg rounded-bl-lg"
              >
                <AiOutlineDashboard size={20} />
                Order History
              </li>
            </ul>
            <div className="w-full h-[1px] bg-white my-2" />
            <ul className="">
              <li
                onClick={() => setActiveTab("settings")}
                className="flex items-center gap-3 py-2 px-2 hover:bg-gold-light_400 cursor-pointer transition-all text-white rounded-tl-lg rounded-bl-lg"
              >
                <AiOutlineDashboard size={20} />
                Settings
              </li>
              <li
                onClick={() => setActiveTab("logOut")}
                className="flex items-center gap-3 py-2 px-2 hover:bg-gold-light_400 cursor-pointer transition-all text-white rounded-tl-lg rounded-bl-lg"
              >
                <AiOutlineDashboard size={20} />
                Logout
              </li>
            </ul>
          </div>
          <div className="flex-[5] border-l min-h-[50vh] p-4">
            {activeTab === "dashboard" ? (
              <Dashboard />
            ) : activeTab === "myGroups" ? (
              <MyGroups />
            ) : activeTab === "myProfile" ? (
              <MyProfile />
            ) : activeTab === "enrolledCourses" ? (
              <EnrolledCourses />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
