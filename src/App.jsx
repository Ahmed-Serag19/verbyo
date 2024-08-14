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
        <title>Verbyo</title>
        <meta
          name="description"
          content="Verbyo - Amplify content on your social media and get rewarded."
        />
        <meta
          property="og:title"
          content="Verbyo - Amplify Your Social Media Content"
        />
        <meta
          property="og:description"
          content="The only app in the world that rewards you every time you create content on your social media account."
        />
        {/* These next 3 must be chosen to the right link after your website is up and working so make sure to change them */}
        {/* <meta
          property="og:image"
          content="https://verbyo.com/path-to-your-og-image.jpg"
        />
        <meta property="og:url" content="https://verbyo.com" />
        <meta name="twitter:card" content="summary_large_image" />  */}
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
