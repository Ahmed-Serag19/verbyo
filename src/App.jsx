import Navbar from './components/layout/Navbar/Navbar';
import Hero from './components/sections/Hero/Hero';
import Brands from './components/sections/Brands/Brands';
import WhatYouCanDo from './components/sections/WhatYouCanDo/WhatYouCanDo';
import WhatToShare from './components/sections/WhatToShare/WhatToShare';
import { OSProvider } from './components/utils/OsContext';
import HowAppWorks from './components/sections/HowAppWorks/HowAppWorks';
import EveryDayUse from './components/sections/EveryDayUse/EveryDayUse';
import QuestionsAccordion from './components/sections/QuestionsAccordion/QuestionsAccordion';

function App() {
  return (
    <OSProvider>
      <Navbar />
      <Hero />
      <Brands />
      <WhatYouCanDo />
      <WhatToShare />
      <HowAppWorks />
      <EveryDayUse />
      <QuestionsAccordion />
    </OSProvider>
  );
}

export default App;
