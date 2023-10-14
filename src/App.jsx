// Bismillah

import Router from "./Router";
import Navbar from "../src/components/Navbar";
import Main from "./pages/Main/main";
import About from "./pages/About/about";
import Travel from "./pages/Travel/travel";
import Reviews from "./pages/Reviews/reviews";

const App = () => {
  return (
    <div>
      <Router />
      <Navbar/>
      <About/>
      <Travel/>
      <Reviews/>

    </div>
  );
};

export default App;
