import React from 'react';
import SelectLang from '../UI/Dropdown/SelectLang';

const Navbar = () => {
  return (
    <>
      <nav className='fixed top-0 w-[100%] z-index-[999999]'>
        <div className="container">
          <div className="flex items-center justify-between pt-[30px]">
            <p className='text-white font-bold'>STOCK TOUR</p>
            <div className="flex items-center justify-between gap-[50px] text-[18px] text-white font-medium">
              <p>Главная</p>
              <p>О компании</p>
              <p>Путешествия</p>
              <p>Отзывы</p>
              <p>Контакты</p>
            </div>
            <SelectLang/>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;