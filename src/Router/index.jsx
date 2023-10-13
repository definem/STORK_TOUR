// Bismillah
import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main/main";
import About from "../pages/About/about";
import Travel from "../pages/Travel/travel";
import Reviews from "../pages/Reviews/reviews";
import Contact from "../pages/Contact/contact";
import Error from "../pages/Error/error";

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
