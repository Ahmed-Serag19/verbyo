// src/contexts/OSContext.js
import {
  createContext,
  useState,
  useEffect,
  useContext,
} from 'react';
import PropTypes from 'prop-types';
import { isAndroid, isIOS, isMobile } from 'react-device-detect';

const OSContext = createContext();

export const useOS = () => useContext(OSContext);

export const OSProvider = ({ children }) => {
  const [operatingSystem, setOperatingSystem] = useState('');

  useEffect(() => {
    if (isAndroid) {
      setOperatingSystem('android');
    } else if (isIOS) {
      setOperatingSystem('ios');
    } else if (isMobile) {
      setOperatingSystem('mobile');
    } else {
      setOperatingSystem('desktop');
    }
  }, []);

  const handleDownloadClick = () => {
    let url;

    if (operatingSystem === 'android') {
      url =
        'https://play.google.com/store/apps/details?id=com.verbyo';
    } else if (
      operatingSystem === 'ios' ||
      operatingSystem === 'mobile'
    ) {
      console.log('IOS');
      url = 'https://apps.apple.com/us/app/verbyo/id1556056038';
    } else {
      url = '#';
    }

    console.log('Redirecting to:', url);
    window.location.href = url;
  };

  return (
    <OSContext.Provider
      value={{ operatingSystem, handleDownloadClick }}
    >
      {children}
    </OSContext.Provider>
  );
};

OSProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
