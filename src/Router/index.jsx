import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import About from "../pages/About";
import Travel from "../pages/Travel";
import Reviews from "../pages/Reviews";
import Contact from "../pages/Contact";
import Error from "../pages/Error";

const index = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default index;
