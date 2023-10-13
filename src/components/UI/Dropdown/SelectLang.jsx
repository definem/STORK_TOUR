import React, { useState } from "react";

const Dropdown = () => {
  const [lang, setLang] = useState("UZB");
  const [langs] = useState(["UZB", "RUS", "ENG", "TUR"]);
  const [toggle, setToggle] = useState(false);

  const changeLanguage = (language) => {
    setLang(language);
  };

  return (
    <div>
      <button
        onClick={() => setToggle(!toggle)}
        className="text-white font-bold focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
      >
        {lang}
      </button>

      <div
        style={{ display: toggle ? "block" : "none" }}
        className="bg-white divide-y divide-gray-100 mt-2 rounded-lg shadow w-44 absolute z-[10000]"
      >
        <ul className="py-2 text-sm text-gray-700 hover:text-[#0154A7]">
          {langs.map((item) => {
            return (
              <li
                onClick={() => {
                  setLang(item);
                  setToggle(false);
                }}
                className="hover:border border border-gray-50 cursor-pointer hover:bg-gray-50"
                key={item}
              >
                <span className="block px-4 py-2 text-black hover:text-indigo-600 font-bold">
                  {item}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
