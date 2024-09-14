import Navbar from "./components/Navbarr.js";
import Home from "./pages/Home.js";
import Footer from "./components/Footer.js";



export default function Page() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
      </div>
      <Footer />
    </>
  );
}
