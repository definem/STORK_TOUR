// Bismillah

import Router from "./Router";
import Navbar from "../src/components/Navbar";
import Main from "./pages/Main/main";
import About from "./pages/About/about";
import Travel from "./pages/Travel/travel";
import Reviews from "./pages/Reviews/reviews";
import Contact from "./pages/Contact/contact";
import Footer from "../src/components/Footer";

const App = () => {
  return (
    <div>
      <Router />
      <Navbar/>
      <About/>
      <Travel/>
      <Reviews/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
