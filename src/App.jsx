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
import CreateSignal from "./pages/tradersCommunity/signalChannals/CreateSignal";
import GoogleTranslate from "./components/googleTranslate/GoogleTranslate";
import SignalChannel from "./pages/tradersCommunity/signalChannals/SignalChannel";
import GroupHome from "./components/tradersCommunity/group/home";
import Messages from "./components/tradersCommunity/group/Messages";

function App() {
  return (
    <div className="bg-blue-dark">
      {/* <header className="text-center p-4 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold">Welcome to my multilingual app</h1>
        <p className="text-gray-600">This is a simple example</p>
        
      </header> */}
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
            {/* <Route
              path="/traders-community/groups/:id"
              element={<CommunityGroup />}
            /> */}
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
              path="/traders-community/create-signal-channel/:id"
              element={<CreateSignalChannel />}
            />
            <Route
              path="/traders-community/create-signal/:id"
              element={<CreateSignal />}
            />
            <Route element={<CommunityGroup />}>
              {/* HOME */}
              <Route
                path="/traders-community/groups/:name"
                element={<GroupHome />}
              />

              {/* MESSAGES */}
              <Route
                path="/traders-community/groups/:name/messages"
                element={<Messages />}
              />

              {/* SIGNAL CHANNEL */}
              <Route
                path="/traders-community/groups/:name/signal-channels"
                element={<SignalChannel />}
              />
            </Route>
            {/* Messages */}
          </Routes>
        </main>
        <div />
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
}

export default App;
