import Languages from "./common/Languages";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-blue-dark flex flex-col min-h-screen  overflow-x-hidden ">
      <div className="max-w-[1500px] mx-auto">
        <Header />
        <Navbar />
        <main className="flex-1">
          <Home />
        </main>
        <div />
        <Footer />
      </div>
    </div>
  );
}

export default App;
