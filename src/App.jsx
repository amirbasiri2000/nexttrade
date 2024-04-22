import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-blue-dark flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <Navbar />
      <main className="flex-1">
        <Home />
      </main>
      <div className="mt-[800px]" />
      <Footer />
    </div>
  );
}

export default App;
