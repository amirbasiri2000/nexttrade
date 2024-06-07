import { Routes, Route } from "react-router-dom";
import AdminPage from "./pages/admin/AdminPage";

import {
  CommunityGroup,
  CommunityGroups,
  CreateGroup,
  Home,
  Login,
  Register,
  TradersCommunity,
} from "./pages";
import UserProfile from "./pages/profile/userProfile";
import { Toaster } from "react-hot-toast";
import AllMemberShipRequest from "./pages/master/AllMemberShipRequest";
import CreateSignalChannel from "./pages/tradersCommunity/signalChannals/CreateSignalChannel";

function App() {
  return (
    <div className="">
      <div className="max-w-[1500px] mx-auto flex flex-col min-h-screen  overflow-x-hidden">
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/traders-community" element={<TradersCommunity />} />
            <Route
              path="/traders-community/groups"
              element={<CommunityGroups />}
            />
            <Route
              path="/traders-community/groups/:name"
              element={<CommunityGroup />}
            />
            <Route
              path="/traders-community/groups/create"
              element={<CreateGroup />}
            />

            <Route path="/user-profile" element={<UserProfile />} />
            <Route
              path="/traders-community/all-membership-request"
              element={<AllMemberShipRequest />}
            />

            <Route
              path="/traders-community/create-signal-channel"
              element={<CreateSignalChannel />}
            />
          </Routes>
        </main>
        <div />
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
}

export default App;
