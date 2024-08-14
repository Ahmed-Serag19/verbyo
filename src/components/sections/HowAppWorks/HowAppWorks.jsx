import { useEffect, useState, useRef } from 'react';
import FirstImage from '../../../assets/One8.jpg';
import SecondImage from '../../../assets/One9.jpg';
import ThirdImage from '../../../assets/One10.jpg';
import MobileTop from '../../../assets/Subtract.png';
import playButton from '../../../assets/play-button.png';
import PropTypes from 'prop-types';
import AOS from 'aos';

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
  const [image, setImage] = useState(FirstImage);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const deviceType = useDeviceType();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const sectionTop = sectionRef.current?.offsetTop || 0;
        const sectionHeight = sectionRef.current?.offsetHeight || 0;

        let triggerPoint1, triggerPoint2, triggerPoint3;

        if (deviceType === 'mobile') {
          // Mobile
          triggerPoint1 = sectionTop + sectionHeight / 2 - 300;
          triggerPoint2 = sectionTop + sectionHeight / 2 - 200;
          triggerPoint3 = sectionTop + sectionHeight / 2 - 100;
        } else if (deviceType === 'tablet') {
          // Tablet
          triggerPoint1 = sectionTop + sectionHeight / 2 - 750;
          triggerPoint2 = sectionTop + sectionHeight / 2 - 550;
          triggerPoint3 = sectionTop + sectionHeight / 2 - 450;
        } else {
          // Desktop
          triggerPoint1 = sectionTop + sectionHeight / 2 - 700;
          triggerPoint2 = sectionTop + sectionHeight / 2 - 500;
          triggerPoint3 = sectionTop + sectionHeight / 2 - 300;
        }

        if (scrollY >= triggerPoint3) {
          setActiveDiv('div3');
          setImage(ThirdImage);
        } else if (scrollY >= triggerPoint2) {
          setActiveDiv('div2');
          setImage(SecondImage);
        } else if (scrollY >= triggerPoint1) {
          setActiveDiv('div1');
          setImage(FirstImage);
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [isVisible, sectionRef, deviceType]);

  const handleDivClick = (divId) => {
    setActiveDiv(divId);
    if (divId === 'div1') setImage(FirstImage);
    else if (divId === 'div2') setImage(SecondImage);
    else setImage(ThirdImage);
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
                          src={image}
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
                    onMouseEnter={() => handleDivClick('div1')}
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
                    onMouseEnter={() => handleDivClick('div2')}
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
                    onMouseEnter={() => handleDivClick('div3')}
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
        <section
          className="how-app-works overflow-hidden pt-10 w-full"
          ref={sectionRef}
        >
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
                  onMouseEnter={() => handleDivClick('div1')}
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
                  onMouseEnter={() => handleDivClick('div2')}
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
                  onMouseEnter={() => handleDivClick('div3')}
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
                className="right-side-wycd overflow-hidden relative bg-white w-2/5 flex justify-center items-center rounded-xl"
                data-aos="fade"
                data-aos-duration="1000"
              >
                <div className="haw-video-container relative p-10">
                  <div className="gif-bg">
                    <div className="gif-container">
                      <img
                        src={image}
                        alt=""
                        className="rounded-3xl"
                      />
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
