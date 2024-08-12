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

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
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
  );
}

export default App;
