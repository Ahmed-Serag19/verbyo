import { useOS } from '../../utils/OsContext';
import Posts from './Posts';

const WhatToShare = () => {
  const { handleDownloadClick } = useOS();
  return (
    <section className="what-to-share py-10 ">
      <div className="container flex m-auto rounded-lg bg-custom-bg py-16 px-10 justify-between items-center">
        <div className="left-side-wts">
          <h1 className="text-3xl font-bold pb-10">
            What Content you share with Verbyo?
          </h1>
          <p className="text-lg max-w-4xl">
            Be the friend who always posts fascinating content on
            social media and captures everyone&apos;s attention. You
            have complete control over what you share on your account.
          </p>
        </div>
        <div className="right-side-wts">
          <button
            onClick={handleDownloadClick}
            className="btn-bg-primary text-white py-3 px-7 rounded-full hover:bg-blue-600 transition duration-300"
          >
            Get the App
          </button>
        </div>
      </div>
      <div className="posts-container">
        <Posts />
      </div>
    </section>
  );
};

export default WhatToShare;
