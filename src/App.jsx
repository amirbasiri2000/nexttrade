import { Routes, Route } from "react-router-dom";
import AdminPage from "./pages/admin/AdminPage";

import {
  CommunityGroup,
  CommunityGroups,
  Home,
  Login,
  Register,
  TradersCommunity,
} from "./pages";

function App() {
  return (
    <div className="bg-blue-dark  ">
      <div className="max-w-[1500px] mx-auto flex flex-col min-h-screen  overflow-x-hidden">
        {/* <Header /> */}
        {/* <Navbar /> */}

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/community" element={<TradersCommunity />} />
            <Route path="/community/groups" element={<CommunityGroups />} />
            <Route
              path="/community/groups/:name"
              element={<CommunityGroup />}
            />
          </Routes>
        </main>
        <div />
      </div>
    </div>
  );
}

export default App;
