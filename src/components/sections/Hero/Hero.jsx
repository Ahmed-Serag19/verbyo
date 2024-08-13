import { useState, useEffect } from 'react';
import PeopleAvatarImg from '../../../assets/hero-avatars.png';
import PhoneHeroImg from '../../../assets/hero-phone-image.png';
import playButton from '../../../assets/play-button.png';
import AOS from 'aos';
import { useOS } from '../../utils/OsContext';
import PropTypes from 'prop-types';

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState('desktop');

  const updateDeviceType = () => {
    const width = window.innerWidth;
    if (width <= 480) {
      setDeviceType('mobile');
    } else if (width <= 768) {
      setDeviceType('tablet');
    } else {
      setDeviceType('desktop');
    }
  };

  useEffect(() => {
    updateDeviceType();
    window.addEventListener('resize', updateDeviceType);
    return () =>
      window.removeEventListener('resize', updateDeviceType);
  }, []);

  return deviceType;
};

const Hero = ({ openModal }) => {
  const { handleDownloadClick } = useOS();
  const deviceType = useDeviceType();

  useEffect(() => {
    AOS.init({
      offset: 200,
      delay: 0,
      duration: 1000,
      easing: 'ease',
      once: false,
      mirror: false,
    });
  }, []);

  return (
    <>
      {deviceType === 'mobile' || deviceType === 'tablet' ? (
        <section className="hero-responsive overflow-hidden">
          <div className="container m-auto p-10">
            <div className="flex flex-col justify-center items-center m-auto p-5">
              <h1 className="text-3xl font-bold text-gray-900 pt-8">
                Amplify content on your social media account and get
                rewarded
              </h1>
              <p className="text-gray-700 pb-4 pt-5 text-xl">
                The only app in the world that rewards you each time
                you create content on your social media account.
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="py-5 flex justify-center"
            >
              <img
                src={PhoneHeroImg}
                alt="Phone showing app interface"
                className="hero-main-img"
              />
            </div>
            <div className="hero-avatar-container-tablet  flex items-center justify-center rounded-full">
              <img src={PeopleAvatarImg} alt="User avatars" />
              <div>
                <p className=" ">+200k users around the world</p>
              </div>
            </div>
            <div className="flex gap-5 flex-col justify-center items-center pt-5">
              <button
                onClick={handleDownloadClick}
                className="btn-bg-primary text-white w-full py-3 rounded-full hover:bg-blue-600 transition duration-300"
              >
                Get the app
              </button>
              <button
                onClick={openModal}
                className="btn-secondary hover:bg-gray-200 w-full flex justify-center items-center gap-2 bg-white hover:bg-slate-100 transition duration-300 py-3 rounded-full border-black font-bold"
              >
                <img
                  src={playButton}
                  alt="Play button"
                  className=""
                />
                <span>Watch Intro</span>
              </button>
            </div>
          </div>
        </section>
      ) : (
        <section className="hero overflow-hidden bg-custom-bg">
          <div className="container mx-auto flex flex-row gap-10 items-center px-6 pt-5">
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="text-center lg:text-left lg:w-1/2 flex flex-col gap-2 max-w-xl"
            >
              <div className="hero-avatar-container flex items-center justify-center h-12 rounded-full">
                <img src={PeopleAvatarImg} alt="User avatars" />
                <p className="ml-2 text-sm text-gray-600">
                  +200k users around the world
                </p>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 pt-8">
                Amplify content on your social media account and get
                rewarded
              </h1>
              <p className="text-gray-700 pb-4 text-lg py-3 max-w-md">
                The only app in the world that rewards you each time
                you create content on your social media account.
              </p>
              <div className="flex gap-5 justify-center items-center lg:justify-start">
                <button
                  onClick={handleDownloadClick}
                  className="btn-bg-primary text-white py-3 px-7 rounded-full hover:bg-blue-600 transition duration-300"
                >
                  Get the app
                </button>
                <button
                  onClick={openModal}
                  className="btn-secondary hover:bg-gray-200 flex justify-center items-center gap-2 bg-white hover:bg-slate-100 transition duration-300 px-6 py-3 rounded-full border-black font-bold"
                >
                  <img
                    src={playButton}
                    alt="Play button"
                    className=""
                  />
                  <span>Watch Intro</span>
                </button>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="mt-10 lg:mt-0 lg:w-1/2"
            >
              <img
                src={PhoneHeroImg}
                alt="Phone showing app interface"
                className="w-full"
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

Hero.propTypes = {
  openModal: PropTypes.func.isRequired,
};

export default Hero;
