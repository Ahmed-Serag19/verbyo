import { useContext } from 'react';
import VerbyoLogo from '../../../assets/verbyo-logo.png';
import { useOS } from '../../utils/OsContext';
import { LanguageContext } from '../../utils/LanguageContext';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { changeLanguage } = useContext(LanguageContext);
  const { handleDownloadClick } = useOS();
  const { t } = useTranslation();

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    changeLanguage(selectedLanguage);
  };

  return (
    <header className="w-full bg-custom-bg">
      <nav className="md:w-4/5 flex nav justify-between m-auto py-5 px-5 items-center">
        <a href="/">
          <div className="logo-container text-black gap-2 flex justify-center items-center">
            <img src={VerbyoLogo} alt="verbyo website logo" />
            <h1 className="font-bold">Verbyo</h1>
          </div>
        </a>
        <div className="right-side-nav flex gap-5 ">
          <button
            onClick={handleDownloadClick}
            className="btn-bg-primary text-white py-2 px-6 rounded-3xl hover:bg-blue-600 transition duration-300"
          >
            {t('Download App')}
          </button>

          <div className="relative inline-block">
            <select
              onChange={handleLanguageChange}
              className="appearance-none cursor-pointer border border-gray-300 rounded-full p-2 pr-8 text-gray-700 bg-white hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            >
              <option value="eng">Eng</option>
              <option value="fr">Fr</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <svg
                className="w-4 h-4 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
