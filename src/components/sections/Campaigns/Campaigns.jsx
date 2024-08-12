import MobileImage from '../../../assets/what-you-can-do-2.svg';

const Campaigns = () => {
  return (
    <section className="campaign py-20 px-20 rounded-lg">
      <div className="container flex justify-between">
        <div className=" rounded-lg p-8 flex flex-col lg:flex-row justify-between items-center">
          <div className="text-white max-w-2xl flex flex-col gap-5">
            <h1 className="text-4xl font-bold mb-4">
              Organic advertising made with real people
            </h1>

            <div className="special-bg p-6 rounded-2xl">
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

            <div className="special-bg p-6 rounded-2xl">
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
              src={MobileImage}
              alt="Verbyo App Screenshot"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Campaigns;
