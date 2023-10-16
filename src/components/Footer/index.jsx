// Bismillah
import { useTranslation } from "react-i18next";

const index = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="pb-[30px]">
        <p className="text-[14px] text-gray-500 text-center">
          Авторские права © 2023 • Все правы защищены.
        </p>
      </div>
    </footer>
  );
};

export default index;
