import { useEffect, useState } from "react";
import Header from "./components/1-header/Header";
import Home from "./components/2-home/Home";
import About from "./components/3-about/About";
import Siklls from "./components/4-siklls/Siklls";
import Main from "./components/5-main/Main";
import Contact from "./components/6-contact/Contact";
import Footer from "./components/7-footer/Footer";
import { FaArrowUp } from "react-icons/fa";

function App() {
  const [showScroll, setShowScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY >= 500 ? setShowScroll(true) : setShowScroll(false);
    });
  }, []);
  return (
    <div className="container">
      <Header />

      <Home />
      <div className="devider"></div>

      <About />
      <div className="devider"></div>

      <Siklls />
      <div className="devider"></div>

      <Main />
      <div className="devider"></div>

      <Contact />
      <div className="devider"></div>

      <Footer />
      {showScroll && (
        <a href="#" className="top">
          <button>
            <FaArrowUp />
          </button>
        </a>
      )}
    </div>
  );
}

export default App;
