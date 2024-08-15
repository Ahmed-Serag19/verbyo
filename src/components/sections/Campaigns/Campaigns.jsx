import MobileImage from '../../../assets/iPhone 16.svg';
import MobileImage2 from '../../../assets/iPhone 17.svg';
import { useState, useEffect } from 'react';

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

const Campaigns = () => {
  const deviceType = useDeviceType();
  const [currentImage, setCurrentImage] = useState(MobileImage);

  const handleMouseEnter = (image) => {
    setCurrentImage(image);
  };

  const handleMouseLeave = () => {
    setCurrentImage(MobileImage);
  };

  return (
    <>
      <section className="campaign py-20 px-20 rounded-lg">
        <div className="container flex justify-between">
          <div className="inner-camp rounded-lg p-8 flex flex-col lg:flex-row justify-between items-center">
            <div className="text-white max-w-2xl flex flex-col gap-5">
              {deviceType === 'mobile' || deviceType === 'tablet' ? (
                <h1 className="text-4xl font-bold mb-4">
                  Advertise with us
                </h1>
              ) : (
                <h1 className="text-4xl font-bold mb-4">
                  Organic advertising made with real people
                </h1>
              )}

              <div
                className="special-bg p-6 rounded-2xl"
                onMouseEnter={() => handleMouseEnter(MobileImage)}
                onMouseLeave={handleMouseLeave}
              >
                <h2 className="text-xl font-semibold mb-2">
                  For Foundations (Free Campaigns)
                </h2>
                <p className="text-gray-300 mb-4">
                  Verbyo is the only app in the world that offers free
                  organic marketing distribution campaigns, enabling
                  foundations to amplify their messages using real
                  people. Leverage our platform to reach a wider
                  audience and create a lasting impact with authentic,
                  community-driven promotion.
                </p>
                <a
                  href="https://foundations.verbyo.com"
                  target="_blank"
                  className="text-white font-semibold"
                >
                  Create account &rarr;
                </a>
              </div>

              <div
                className="special-bg p-6 rounded-2xl"
                onMouseEnter={() => handleMouseEnter(MobileImage2)}
                onMouseLeave={handleMouseLeave}
              >
                <h2 className="text-xl font-semibold mb-2">
                  For Advertisers
                </h2>
                <p className="text-gray-300 mb-4">
                  Advertise on Verbyo to connect with your audience
                  through authentic, community-driven content. Our
                  platform ensures your advertisements are shared and
                  promoted by real users, fostering genuine engagement
                  and trust. Experience unparalleled reach and impact
                  with Verbyo&apos;s unique approach to advertising.
                </p>
                <a
                  href="https://business.verbyo.com"
                  target="_blank"
                  className="text-white font-semibold"
                >
                  Create Account &rarr;
                </a>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="mt-8 lg:mt-0 camp-img-container">
              <img
                src={currentImage}
                alt="Verbyo App Screenshot"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Campaigns;
