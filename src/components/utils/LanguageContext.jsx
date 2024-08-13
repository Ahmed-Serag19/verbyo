import i18n from 'i18next';
import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(i18n.language || 'eng');

  const changeLanguage = (lng) => {
    i18n
      .changeLanguage(lng)
      .then(() => setLanguage(lng))
      .catch((err) =>
        console.error('Failed to change language:', err)
      );
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
