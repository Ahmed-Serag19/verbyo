import { useEffect } from 'react';
import PeopleAvatarImg from '../../../assets/hero-avatars.png';
import PhoneHeroImg from '../../../assets/hero-phone-image.png';
import playButton from '../../../assets/play-button.png';
import AOS from 'aos';
import { useOS } from '../../utils/OsContext';

const Hero = () => {
  const { handleDownloadClick } = useOS();

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
    <section className="hero bg-custom-bg">
      <div className="container mx-auto flex flex-col gap-20 lg:flex-row items-center px-6 lg:px-20 py-10">
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
          <h1 className="text-4xl font-bold text-gray-900 pt-8 ">
            Amplify content on your social media account and get
            rewarded
          </h1>
          <p className="text-gray-700 pb-4 max-w-md">
            The only app in the world that rewards you each time you
            create content on your social media account.
          </p>
          <div className="flex gap-5 justify-center items-center lg:justify-start">
            <button
              onClick={handleDownloadClick}
              className="btn-bg-primary text-white py-3 px-7 rounded-full hover:bg-blue-600 transition duration-300"
            >
              Get the app
            </button>
            <button className="btn-secondary flex justify-center items-center gap-2 bg-white  hover:bg-slate-100 transition duration-300 px-6 py-3 rounded-full border-black font-bold">
              <img
                src={playButton}
                alt="Phone showing app interface"
                className=""
              />
              <a
                href="https://www.youtube.com/watch?v=kE-M9kWmnpQ&t=1s"
                className=""
              >
                Watch Intro
              </a>
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
  );
};

export default Hero;
