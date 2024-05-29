import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroTemp from "./components/HeroTemp";
import Navbar from "./components/Navbar";
import Hero from "./components/home/Hero";
import { Home, Login, Register } from "./pages";

import { Routes, Route } from "react-router-dom";
import AdminPage from "./pages/admin/AdminPage";

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
          </Routes>
        </main>
        <div />
        
      </div>
    </div>
  );
}

export default App;
