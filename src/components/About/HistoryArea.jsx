import Link from 'next/link';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'; // Import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper React components


const HistoryArea = () => {
  SwiperCore.use([Navigation, Pagination]);


  const historyData = [
    {

      id: 1,
      img: "assets/img/testimonial/journey.jpg",
      year: 2008,
      title: "Journey started",
      description: "VAS Mission is to provide focused and increasingly improved level of service.",
    },
    {
      id: 2,
      img: "assets/img/testimonial/market.jpg",
      year: 2009,
      title: "Market Entry",
      description: "Started refurbishing services in the Southwestern Ontario.",
    },
    {
      id: 3,
      img: "assets/img/testimonial/time-3.jpg",
      year: 2010,
      title: "Quality Assurance",
      description: "Continuing to focus on strengthening customer service for our customers.",

    },
    {
      id: 4,
      img: "assets/img/testimonial/time-4.png",
      year:  2018,
      title: "Best Service Provider",
      description: "Acknowledged as the epitome of service excellence",

    },
    {
      id: 5,
      img: "assets/img/testimonial/iso-timeline.jpg",
      year: 2023,
      title: "ISO 9001:2015 Certified",
      description: "Elevating quality standards through ISO Certification",

    },
    {
      id: 6,
      img: "assets/img/services/time-5.jpg",
      year:  2023,
      title: "Automative Assembly",
      description: "VAS driving innovation in the automotive sector ",

    },
    {
      id: 7,
      img: "assets/img/testimonial/time-6.jpg",
      year:  2024,
      title: "Pick & Pack",
      description: "VAS adds Pick & Pack For Non-utomative",

    },
  ];

  return (
    <>
      <section className="history__area grey-bg-5 pt-120 pb-90 fix">
        <div className="history__right-bg">
          <img src="assets/img/testimonial/testimonial-bg-1.jpg" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="section__wrapper mb-55">
                <h4 className="section__title">
                  Best innovations in the metallurgy today
                </h4>
                <div className="r-text">
                  <span>history</span>
                </div>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="row">
              <Swiper
            spaceBetween={30}
            slidesPerView={4}
            autoplay={{ delay: 6000 }}
            modules={[Autoplay]}
            // pagination={{ clickable: true }}
            loop={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
          >
              {historyData.map((history) => (
              <SwiperSlide key={history.id}>
              <div class="col-12">
                <div className="history__item mb-30">
                  <div className="sm-item-thumb w-img">
                    <a href="#">
                    <img src={history.img} alt="" className="history-pic"/>


                    </a>
                    <div className="sm-item-tag">
                      <span>{history.year}</span>
                    </div>
                  </div>
                  <div className="sm-item-content">
                    <h6>
                      <Link href="/services-details">{history.title}</Link>
                    </h6>
                    <p>{history.description}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            
            ))}
          </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HistoryArea;
