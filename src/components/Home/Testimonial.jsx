import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

const Testimonial = () => {
  const testimonialData = [
    {
      id: 1,
      desc: "“ For an on-site examination, VAS is far surpassing my expectations. My request for a short-fuse was promptly fulfilled by Chris and his colleagues. ”",
      author: "assets/img/author/boy.png",
      name: "Head of Department",
      title: (
        <>
          <p>
            Kitchener, <a href="#">ON</a>
          </p>
        </>
      ),
    },
    {
      id: 2,
      desc: "“ The team is at VAS is fantastic. They always go above and beyond to meet our requirements and provide reliable support 24/7. Highly recommended!  ”",
      author: "assets/img/author/woman.png",
      name: "Quality Manager",
      title: (
        <>
          <p>
            Guelph , <a href="#">ON</a>
          </p>
        </>
      ),
    },
    {
      id: 3,
      desc: "“ Vas has exceeded our expetations in every aspect. Their attention to detail and commitment to quality truly sets them apart. ”",
      author: "assets/img/author/worker.png",
      name: "Supplier Quality Engineer",
      title: (
        <>
          <p>
           Guelph, <a href="#">ON</a>
          </p>
        </>
      ),
    },
    {
      id: 4,
      desc: "“ VAS has been our a partner for our warehousing needs. Thier team is knowledgeable and always goes above and beyond to ensure our satisfaction. ”",
      author: "assets/img/author/bwoman.png",
      name: "Receiving Inspetion Auditor",
      title: (
        <>
          <p>
           Kitchener, <a href="#">ON</a>
          </p>
        </>
      ),
    },
    {
      id: 5,
      desc: "“VAS is committed to meeting customer needs, going the extra mile to provide exceptional value through dedicated management and staff.”",
      author: "assets/img/author/man.png",
      name: "Quality Engineer",
      title: (
        <>
          <p>
             Cambridge, <a href="#">ON</a>
          </p>
        </>
      ),
    },
  ];
  return (
    <>
      <section className="testimonial__area grey-bg-5 pt-120 pb-120 fix">
        <div className="testimonial__right-bg">
          <img src="assets/img/testimonial/testimonial-bg-1.jpg" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="section__wrapper mb-45">
                <h4 className="section__title">
                   Experience Our Excellence Through Their Words.
                </h4>
                <div className="r-text">
                  <span>feedback</span>
                </div>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="testimonial__slider swiper-container">
                <Swiper
                  spaceBetween={30}
                  slidesPerView={4}
                  loop={true}
                  className="swiper-wrapper"
                  autoplay={{ delay: 6000 }}
                  modules={[Autoplay]}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    550: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    1200: {
                      slidesPerView: 3,
                    },
                    1400: {
                      slidesPerView: 4,
                    },
                  }}
                >
                  {testimonialData.map((testimonial) => {
                    return (
                      <SwiperSlide key={testimonial.id}>
                        <div className="testimonial__item">
                          <p className="review__text">
                            {testimonial.desc}
                          </p>
                          <div className="review__info mt-30">
                            <a href="#">
                              <img src={`${testimonial.author}`} alt="" />
                            </a>
                            <div className="client__content">
                              <h5 className="client__name">
                                <a href="#">{testimonial.name}</a>
                              </h5>
                              <div className="client__designation">
                                {testimonial.title}
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
