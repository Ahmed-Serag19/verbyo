import { useState } from 'react';
import Gif from '../../../assets/gif-verbyo.gif';
import MobileTop from '../../../assets/Subtract.png';
import playButton from '../../../assets/play-button.png';

// import AOS from 'aos';

const HowAppWorks = () => {
  const [activeDiv, setActiveDiv] = useState('div1');

  const handleDivClick = (divId) => {
    setActiveDiv(divId);
  };

  return (
    <section className="what-you-can-do pt-14 w-full">
      <div className="container py-14 m-auto bg-custom-bg rounded-lg">
        <div className="wycd-container px-10 py-16 flex justify-around items-center">
          <div className="left-side-wycd flex flex-col gap-10 w-1/2">
            <div>
              <h1 className="text-5xl font-bold max-w-4xl pb-5">
                How app works?
              </h1>
              <p className="text-gray-600">
                Creating work has never been easier. Innovation
                features make it effortless.
              </p>
            </div>
            <div
              onClick={() => handleDivClick('div1')}
              className={`transition duration-300 rounded-lg p-10 flex cursor-pointer flex-col gap-5 ${
                activeDiv === 'div1' ? 'bg-blue-100' : 'bg-white'
              }`}
            >
              <h2 className="text-2xl font-bold ">
                Choose what to post
              </h2>
              <p>
                Scroll your feed and choose what offers you want to
                post on your social media account.
              </p>
            </div>
            <div
              onClick={() => handleDivClick('div2')}
              className={`transition duration-300 rounded-lg p-10 cursor-pointer flex flex-col gap-5 ${
                activeDiv === 'div2' ? 'bg-blue-100' : 'bg-white'
              }`}
            >
              <h2 className="text-2xl font-bold">
                Create a post on your social media account
              </h2>
              <p>
                Open the offer, follow the requirements and create a
                post on your social media account.
              </p>
            </div>
            <div
              onClick={() => handleDivClick('div3')}
              className={`transition duration-300 rounded-lg p-10 cursor-pointer flex flex-col gap-5 ${
                activeDiv === 'div3' ? 'bg-blue-100' : 'bg-white'
              }`}
            >
              <h2 className="text-2xl font-bold">
                Verify the post with us and get rewarded
              </h2>
              <p>
                Let us know that you created the post by verifying
                your post with Verbyo. If the post is found on your
                feed, you will get rewarded instantly.
              </p>
            </div>
          </div>
          <div
            className="right-side-wycd  bg-custom-bg w-2/5 flex justify-center items-center rounded-xl"
            data-aos="fade"
            data-aos-duration="1000"
          >
            <div className="haw-video-container relative p-10">
              <div className="video-bg">
                <div className="video-container  ">
                  <img src={Gif} alt="" className="rounded-3xl" />
                </div>
                <div className="absolute top-6">
                  <img src={MobileTop} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 flex justify-center">
        <button className="btn-secondary flex justify-center items-center gap-2 bg-white  hover:bg-slate-100 transition duration-300 px-8 py-3 rounded-full border-black font-bold">
          <img
            src={playButton}
            alt="Phone showing app interface"
            className=""
          />
          <a
            href="https://www.youtube.com/watch?v=kE-M9kWmnpQ&t=1s"
            className=""
          >
            Watch full Video
          </a>
        </button>
      </div>
    </section>
  );
};

export default HowAppWorks;
