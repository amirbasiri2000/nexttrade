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
          </Routes>
        </main>
        <div />
      </div>
    </div>
  );
}

export default App;
