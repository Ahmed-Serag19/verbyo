import { useState, useEffect } from 'react';
import Gif from '../../../assets/gif-verbyo.gif';
import MobileTop from '../../../assets/Subtract.png';
import playButton from '../../../assets/play-button.png';
import PropTypes from 'prop-types';
// import AOS from 'aos';

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
const HowAppWorks = ({ openModal }) => {
  const [activeDiv, setActiveDiv] = useState('div1');
  const deviceType = useDeviceType();

  const handleDivClick = (divId) => {
    setActiveDiv(divId);
  };

  return (
    <>
      {deviceType === 'mobile' || deviceType === 'tablet' ? (
        <>
          <section className="how-app-works overflow-hidden pt-5 w-full">
            <div className="container py-5 m-auto bg-custom-bg rounded-lg">
              <div>
                <h1 className="text-5xl font-bold max-w-4xl pb-2">
                  How app works?
                </h1>
                <p className="text-gray-600">
                  Share content on your social media and get rewarded
                  in just three simple steps.
                </p>
              </div>
              <div className="wycd-container px-3 py-3 flex justify-around items-center">
                <div
                  className="right-side-wycd  bg-custom-bg flex justify-center items-center rounded-xl"
                  data-aos="fade"
                  data-aos-duration="1000"
                >
                  <div className="haw-video-container relative p-10">
                    <div className="gif-bg">
                      <div className="gif-container">
                        <img
                          src={Gif}
                          alt=""
                          className="rounded-3xl"
                        />
                      </div>
                      <div className="absolute top-3">
                        <img
                          src={MobileTop}
                          alt="gif about the application and how it works"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="left-side-wycd flex flex-col gap-7 w-1/2">
                  <div
                    onClick={() => handleDivClick('div1')}
                    className={`transition duration-300 rounded-lg p-3 flex cursor-pointer flex-col gap-2 ${
                      activeDiv === 'div1'
                        ? 'bg-blue-100'
                        : 'bg-white hover:bg-blue-50'
                    }`}
                  >
                    <h2 className="text-xl font-bold ">
                      Choose what to post
                    </h2>
                    <p>
                      Scroll your feed and choose what offers you want
                      to post on your social media account.
                    </p>
                  </div>
                  <div
                    onClick={() => handleDivClick('div2')}
                    className={`transition duration-300 rounded-lg p-3 cursor-pointer flex flex-col gap-2 ${
                      activeDiv === 'div2'
                        ? 'bg-blue-100'
                        : 'bg-white hover:bg-blue-50'
                    }`}
                  >
                    <h2 className="text-xl font-bold">
                      Create a post on your social media account
                    </h2>
                    <p>
                      Open the offer, follow the requirements and
                      create a post on your social media account.
                    </p>
                  </div>
                  <div
                    onClick={() => handleDivClick('div3')}
                    className={`transition duration-300 rounded-lg p-3 cursor-pointer flex flex-col gap-2 ${
                      activeDiv === 'div3'
                        ? 'bg-blue-100'
                        : 'bg-white hover:bg-blue-50'
                    }`}
                  >
                    <h2 className="text-xl font-bold">
                      Verify the post with us and get rewarded
                    </h2>
                    <p>
                      Let us know that you created the post by
                      verifying your post with Verbyo. If the post is
                      found on your feed, you will get rewarded
                      instantly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-10 bg flex justify-center">
              <button
                onClick={openModal}
                className="btn-secondary text-lg w-2/3 flex hover:bg-gray-200 justify-center items-center gap-2 bg-white  hover:bg-slate-100 transition duration-300 px-6 py-3 rounded-full border-black font-bold"
              >
                <img
                  src={playButton}
                  alt="Phone showing app interface"
                />
                <span>Watch Full Video</span>
              </button>
            </div>
          </section>
        </>
      ) : (
        <section className="how-app-works overflow-hidden pt-10 w-full">
          <div className="container py-10 m-auto bg-custom-bg rounded-lg">
            <div className="wycd-container px-10 py-16 flex justify-around items-center">
              <div className="left-side-wycd flex flex-col gap-7 w-1/2">
                <div>
                  <h1 className="text-5xl font-bold max-w-4xl pb-2">
                    How app works?
                  </h1>
                  <p className="text-gray-600">
                    Share content on your social media and get
                    rewarded in just three simple steps.
                  </p>
                </div>
                <div
                  onClick={() => handleDivClick('div1')}
                  className={`transition duration-300 rounded-lg p-5 flex cursor-pointer flex-col gap-5 ${
                    activeDiv === 'div1'
                      ? 'bg-blue-100'
                      : 'bg-white hover:bg-blue-50'
                  }`}
                >
                  <h2 className="text-xl font-bold ">
                    Choose what to post
                  </h2>
                  <p>
                    Scroll your feed and choose what offers you want
                    to post on your social media account.
                  </p>
                </div>
                <div
                  onClick={() => handleDivClick('div2')}
                  className={`transition duration-300 rounded-lg p-5 cursor-pointer flex flex-col gap-5 ${
                    activeDiv === 'div2'
                      ? 'bg-blue-100'
                      : 'bg-white hover:bg-blue-50'
                  }`}
                >
                  <h2 className="text-xl font-bold">
                    Create a post on your social media account
                  </h2>
                  <p>
                    Open the offer, follow the requirements and create
                    a post on your social media account.
                  </p>
                </div>
                <div
                  onClick={() => handleDivClick('div3')}
                  className={`transition duration-300 rounded-lg p-5 cursor-pointer flex flex-col gap-5 ${
                    activeDiv === 'div3'
                      ? 'bg-blue-100'
                      : 'bg-white hover:bg-blue-50'
                  }`}
                >
                  <h2 className="text-xl font-bold">
                    Verify the post with us and get rewarded
                  </h2>
                  <p>
                    Let us know that you created the post by verifying
                    your post with Verbyo. If the post is found on
                    your feed, you will get rewarded instantly.
                  </p>
                </div>
              </div>
              <div
                className="right-side-wycd  bg-custom-bg w-2/5 flex justify-center items-center rounded-xl"
                data-aos="fade"
                data-aos-duration="1000"
              >
                <div className="haw-video-container relative p-10">
                  <div className="gif-bg">
                    <div className="gif-container">
                      <img src={Gif} alt="" className="rounded-3xl" />
                    </div>
                    <div className="absolute top-6">
                      <img
                        src={MobileTop}
                        alt="gif about the application and how it works"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-16 flex justify-center">
            <button
              onClick={openModal}
              className="btn-secondary flex hover:bg-gray-200 justify-center items-center gap-2 bg-white  hover:bg-slate-100 transition duration-300 px-6 py-3 rounded-full border-black font-bold"
            >
              <img
                src={playButton}
                alt="Phone showing app interface"
                className=""
              />
              <span>Watch Full Video</span>
            </button>
          </div>
        </section>
      )}
    </>
  );
};
HowAppWorks.propTypes = {
  openModal: PropTypes.func.isRequired,
};

export default HowAppWorks;
