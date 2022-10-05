import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Customers() {
  return (
    <div className=' mb-24'>
      <div className='w-full'>
        <div className='flex justify-center font-medium font-manrope text-3xl text-Primary  pb-12 pt-16'>
          <h1 className=' mx-4 text-center mt-14 sm:mt-0'>
            What our customers say about us
          </h1>
        </div>
      </div>
      <Swiper
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Navigation, Pagination]}
        className='rounded-lg border'
      >
        <SwiperSlide>
          <div className=' flex justify-center justify-items-center items-center'>
            <div className=' font-manrope flex flex-col justify-center items-center'>
              <div className='rounded-2xl w-[90%] sm:w-4/5 bg-Primary p-8 sm:p-28'>
                <div>
                  <img
                    className='absolute hidden sm:block right-80 bottom-24'
                    src='/assets/double-quotes.png'
                  />
                  <img src='/assets/groupon-white.png' />
                </div>
                <div className='text-white text-left leading-9 mt-8'>
                  We found in Wazuh the most complete security plataform. We
                  were seeking an open source SIEM solution that allowed
                  scalability and integration with other tools, which made Wazuh
                  the perfect fit. We achieved our goal, and in addition, we
                  improved the visibility of our enviroment with the Wazuh
                  monitoring options.
                </div>
                <div className='text-white text-left mt-9'>
                  Martin Petracca, IT Security Manager
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=' flex justify-center justify-items-center items-center'>
            <div className=' font-manrope flex flex-col justify-center items-center'>
              <div className='rounded-2xl w-[90%] sm:w-4/5 bg-Primary p-8 sm:p-28'>
                <div className='flex justify-center sm:block sm:justify-start'>
                  <img
                    className='absolute hidden sm:block right-80 bottom-24'
                    src='/assets/double-quotes.png'
                  />
                  <img src='/assets/woop-white2.png' />
                </div>
                <div className='text-white text-left leading-9 mt-8'>
                  In addition to the great advantage of being an open source
                  plataform, Wazuh is also easy to deploy, and its multiple
                  capabilities have allowed us to achieve our goal with security
                  al Woop. Wazuh is a unique tool ans it's perfect for startups
                  like Woop that are looking for top security at a competitive
                  cost.
                </div>
                <div className='text-white text-left mt-9'>
                  Haithem Souala, Site Reliability Engineer
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className=' flex justify-center justify-items-center items-center'>
            <div className=' font-manrope flex flex-col justify-center items-center'>
              <div className='rou rounded-2xl w-4/5 bg-Primary p-28'>
                <div>
                  <img
                    className='absolute right-80 bottom-24'
                    src='/assets/double-quotes.png'
                  />
                  <img src='/assets/woop-white2.png' />
                </div>
                <div className='text-white text-left leading-9 mt-8'>
                  In addition to the great advantage of being an open source
                  plataform, Wazuh is also easy to deploy, and its multiple
                  capabilities have allowed us to achieve our goal with security
                  al Woop. Wazuh is a unique tool ans it's perfect for startups
                  like Woop that are looking for top security at a competitive
                  cost.
                </div>
                <div className='text-white text-left mt-9'>
                  Haithem Souala, Site Reliability Engineer
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
}
