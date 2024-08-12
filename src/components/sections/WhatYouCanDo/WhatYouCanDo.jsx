import { useEffect, useState, useRef } from 'react';
import MobileImage from '../../../assets/what-you-can-do-1.svg';
import MobileImage2 from '../../../assets/what-you-can-do-2.svg';
import AOS from 'aos';

const WhatYouCanDo = () => {
  const [activeDiv, setActiveDiv] = useState('div1'); // Default to first image
  const [image, setImage] = useState(MobileImage);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Adjust this value to trigger the callback when 10% of the component is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup observer on component unmount
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
        const triggerPoint = sectionTop + sectionHeight / 2 - 100;

        if (scrollY > triggerPoint) {
          setActiveDiv('div2');
          setImage(MobileImage2);
        } else {
          setActiveDiv('div1');
          setImage(MobileImage);
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [isVisible]);

  const handleDivClick = (divId) => {
    setActiveDiv(divId);
    setImage(divId === 'div1' ? MobileImage : MobileImage2);
  };

  return (
    <section
      className="what-you-can-do w-full py-10"
      ref={sectionRef}
    >
      <div className="container pt-16 pb-3 m-auto bg-custom-bg rounded-lg">
        <h1 className="text-4xl m-auto font-bold max-w-4xl text-center">
          What you can do with the fastest growing app
        </h1>
        <div className="wycd-container px-10 py-16 flex justify-around items-center">
          <div className="left-side-wycd flex flex-col gap-12 w-1/2">
            <div
              onClick={() => handleDivClick('div1')}
              className={`transition duration-300 rounded-lg p-5 flex cursor-pointer flex-col gap-5 ${
                activeDiv === 'div1'
                  ? 'bg-blue-100'
                  : 'bg-white hover:bg-blue-50'
              }`}
            >
              <h2 className="text-xl font-bold ">
                Create a post on your social media account and get
                rewarded.
              </h2>
              <p>
                Create content on your social media account about
                intriguing topics, using the images and captions
                provided by advertisers or foundations. Verify your
                post and get rewarded instantly.
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
                Create original content based on a script and share it
                on your social media account.
              </h2>
              <p>
                Unleash your creativity by creating original content
                based on a script provided by advertisers, post it on
                your social media account and get rewarded for this.
              </p>
            </div>
          </div>
          <div
            className="right-side-wycd relative bg-white w-2/5 flex justify-center items-center rounded-xl"
            data-aos="fade"
            data-aos-duration="1000"
          >
            <div className="wycd-img-container p-10">
              <div className="">
                {' '}
                <img
                  src={image}
                  alt="mobile"
                  className="transition-opacity duration-1000" // Adding transition for opacity
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouCanDo;
