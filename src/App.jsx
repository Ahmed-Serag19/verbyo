import { useState } from 'react';
import Navbar from './components/layout/Navbar/Navbar';
import Hero from './components/sections/Hero/Hero';
import Brands from './components/sections/Brands/Brands';
import WhatYouCanDo from './components/sections/WhatYouCanDo/WhatYouCanDo';
import WhatToShare from './components/sections/WhatToShare/WhatToShare';
import { OSProvider } from './components/utils/OsContext';
import HowAppWorks from './components/sections/HowAppWorks/HowAppWorks';
import EveryDayUse from './components/sections/EveryDayUse/EveryDayUse';
import QuestionsAccordion from './components/sections/QuestionsAccordion/QuestionsAccordion';
import YoutubeModal from './components/utils/YoutubeModal';
import Campaigns from './components/sections/Campaigns/Campaigns';
import Footer from './components/layout/Footer/Footer';
import { Helmet } from 'react-helmet';
import ThumbVerbyo from './assets/thumb_Verbyo.jpg';
function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Helmet>
        {/* <!-- Primary Meta Tags --> */}
        <title>
          Create content on your social account and get rewarded
        </title>
        <meta
          name="title"
          content="Create content on your social account and get rewarded"
        />
        <meta
          name="description"
          content="The app that rewards you every time you create content and post it on your social media account. "
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://verbyo.com" />
        <meta
          property="og:title"
          content="Create content on your social account and get rewarded"
        />
        <meta
          property="og:description"
          content="The app that rewards you every time you create content and post it on your social media account. "
        />
        <meta property="og:image" content={ThumbVerbyo} />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://verbyo.com" />
        <meta
          property="twitter:title"
          content="Create content on your social account and get rewarded"
        />
        <meta name="robots" content="index, follow" />

        <meta
          property="twitter:description"
          content="The app that rewards you every time you create content and post it on your social media account. "
        />
        <meta property="twitter:image" content={ThumbVerbyo} />
      </Helmet>
      <OSProvider>
        <Navbar />
        <Hero openModal={openModal} />
        <Brands />
        <WhatYouCanDo />
        <WhatToShare />
        <HowAppWorks openModal={openModal} />
        <EveryDayUse />
        <QuestionsAccordion />
        <YoutubeModal isOpen={isModalOpen} onClose={closeModal} />
        <Campaigns />
        <Footer />
      </OSProvider>
    </>
  );
}

export default App;
