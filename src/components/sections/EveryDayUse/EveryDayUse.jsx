import BrowsingWoman from '../../../assets/browsing-woman.png';
import { useOS } from '../../utils/OsContext';

const EveryDayUse = () => {
  const { handleDownloadClick } = useOS();

  return (
    <section>
      <div className="container py-20 flex justify-between items-center gap-10 m-auto">
        <div className="everyday-left-side max-w-4xl flex flex-col gap-10">
          <h1 className="font-bold text-4xl">
            Verbyo is for everyday people
          </h1>
          <p className="text-gray-600 max-w-3xl">
            You don’t need to be an influencer to create content and
            earn rewards. This app is for everyday individuals who
            want to enhance their social media feed, bring fresh ideas
            to their friends, or raise awareness for important issues
            in our communities and the world.
          </p>
          <div>
            <button
              onClick={handleDownloadClick}
              className="btn-bg-primary text-white py-5 px-10 text-lg rounded-full hover:bg-blue-600 transition duration-300"
            >
              Get the app
            </button>
          </div>
        </div>
        <div className="everyday-right-side p-2 bg-custom-bg rounded-xl">
          <div className="ed-img-container">
            <img
              src={BrowsingWoman}
              alt="a photo of a woman browsing her phone while smiling"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EveryDayUse;
