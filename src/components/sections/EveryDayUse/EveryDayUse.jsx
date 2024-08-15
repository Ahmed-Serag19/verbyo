import { useEffect, useState } from "react";
import BrowsingWoman from "../../../assets/browsing-woman.png";
import { useOS } from "../../utils/OsContext";

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState("desktop");

  const updateDeviceType = () => {
    const width = window.innerWidth;
    if (width <= 480) {
      setDeviceType("mobile");
    } else if (width <= 768) {
      setDeviceType("tablet");
    } else {
      setDeviceType("desktop");
    }
  };

  useEffect(() => {
    updateDeviceType();
    window.addEventListener("resize", updateDeviceType);
    return () => window.removeEventListener("resize", updateDeviceType);
  }, []);

  return deviceType;
};
const EveryDayUse = () => {
  const { handleDownloadClick } = useOS();
  const deviceType = useDeviceType();

  return (
    <>
      {deviceType === "mobile" || deviceType === "tablet" ? (
        <>
          <section className="py-10 everyday-use-responsive">
            <div className="container flex flex-col px-10">
              <h1 className="text-3xl font-bold text-center">
                <span className="text-blue-700">People </span>like you are using
              </h1>
              <p className="text-gray-800 text-lg max-w-3xl py-5">
                You don’t need to be an influencer to create content and earn
                rewards. This app is for everyday individuals who want to
                enhance their social media feed, bring fresh ideas to their
                friends, or raise awareness for important issues in our
                communities and the world.
              </p>
              <div>
                <button
                  onClick={handleDownloadClick}
                  className="btn-bg-primary text-white py-3 px-8 text-lg rounded-full hover:bg-blue-600 transition duration-300"
                >
                  Get the app
                </button>
              </div>
              <div className="everyday-right-side mt-5  rounded-xl">
                <div className="ed-img-container flex justify-center items-center">
                  <img
                    src={BrowsingWoman}
                    alt="a photo of a woman browsing her phone while smiling"
                    className="w-2/3"
                  />
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <section>
          <div className="container py-20 px-5 flex justify-between items-center gap-10 m-auto">
            <div className="everyday-left-side max-w-4xl flex flex-col gap-10">
              <h1 className="font-bold text-4xl">
                Verbyo is for everyday people
              </h1>
              <p className="text-gray-600 max-w-3xl">
                You don’t need to be an influencer to create content and earn
                rewards. This app is for everyday individuals who want to
                enhance their social media feed, bring fresh ideas to their
                friends, or raise awareness for important issues in our
                communities and the world.
              </p>
              <div>
                <button
                  onClick={handleDownloadClick}
                  className="btn-bg-primary text-white py-3 px-8 text-lg rounded-full hover:bg-blue-600 transition duration-300"
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
      )}
    </>
  );
};

export default EveryDayUse;
