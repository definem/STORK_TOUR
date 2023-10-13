// Bismillah

import Router from "./Router";
import Navbar from "../src/components/Navbar";
import Main from "./pages/Main/main";

const App = () => {
  return (
    <div>
      <Router />
      <Navbar/>
      {/* <Main/> */}
    </div>
  );
};

export default App;
