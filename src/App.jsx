// Bismillah

import Router from "./Router";
import Navbar from "../src/components/Navbar";
import Main from "./pages/Main/main";
import About from "./pages/About/about";
import Travel from "./pages/Travel/travel";

const App = () => {
  return (
    <div>
      <Router />
      <Navbar/>
      <About/>
      <Travel/>
      
    </div>
  );
};

export default App;
