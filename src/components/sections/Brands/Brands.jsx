import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { isMobile } from 'react-device-detect';

import Isco from '../../../assets/ISCO+Logo+2019 1.png';
import Addidas from '../../../assets/logo-adidas-vector-inkythuatso-01-29-09-08-58 1.png';
import UnderArmour from '../../../assets/Under_Armour-Logo.wine 1.png';
import Unicef from '../../../assets/UNICEF-logo 1.png';
import Lyft from '../../../assets/Lyft-Logo.wine 1.png';

const Brands = () => {
  return (
    <section className="brands text-center h-96 overflow-hidden w-full">
      <div className="flex flex-col justify-center items-center h-full gap-16">
        <h1 className="text-lg">Trusted by brands & foundations</h1>
        <div className="brands-container w-screen">
          {isMobile ? (
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={10}
              slidesPerView={2}
              rewind={true}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              speed={500}
            >
              <SwiperSlide className="flex justify-center items-center">
                <img
                  src={Isco}
                  alt="isco logo"
                  className="w-auto h-16"
                />
              </SwiperSlide>
              <SwiperSlide className="flex justify-center items-center">
                <img
                  src={Addidas}
                  alt="addidas logo"
                  className="w-auto h-16"
                />
              </SwiperSlide>
              <SwiperSlide className="flex justify-center items-center">
                <img
                  src={Unicef}
                  alt="unicef logo"
                  className="w-auto h-16"
                />
              </SwiperSlide>
              <SwiperSlide className="flex justify-center items-center">
                <img
                  src={UnderArmour}
                  alt="under armour logo"
                  className="w-auto h-16"
                />
              </SwiperSlide>
              <SwiperSlide className="flex justify-center items-center">
                <img
                  src={Lyft}
                  alt="lyft logo"
                  className="w-auto h-16"
                />
              </SwiperSlide>
            </Swiper>
          ) : (
            <div className="flex space-x-4 justify-evenly items-center">
              <img
                src={Isco}
                alt="isco logo"
                className="w-auto h-16"
              />
              <img
                src={Addidas}
                alt="addidas logo"
                className="w-auto h-16"
              />
              <img
                src={Unicef}
                alt="unicef logo"
                className="w-auto h-16"
              />
              <img
                src={UnderArmour}
                alt="under armour logo"
                className="w-auto h-16"
              />
              <img
                src={Lyft}
                alt="lyft logo"
                className="w-auto h-16"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Brands;
