import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

const Testimonial = () => {
  const testimonialData = [
    {
      id: 1,
      authorImg: "assets/img/author/bman.png",
      desc: "“ Chris and your team – Thank you for your outstanding service in storing and assembling our product at your facility. Your commitment to quality is evident in every aspect of your work, ensuring that our products meet the highest standards. Additionally, your team’s flexibility and willingness to accommodate our tight schedules have been invaluable to us. You are and will continue to be an integral part of our operations. ”",
      name: "Directior of Operations",
      location: "Mississauga, ON"
    },
    {
      id: 2,
      authorImg: "assets/img/author/auditor.png",
      desc: "We have been using V.A.S. as our “Pick’n Pack” provider since January 2024. We have had nothing but positive opinions of the whole team at V.A.S.. The staff and management are extremely friendly and totally engaged in our business. They are responsive and very accurate in processing our orders. KUDOS VAS team! ”",
      name: "President",
      location: "Toronto, ON"
    },
    {
      id: 3,
      authorImg: "assets/img/author/men.png",
      desc: "“ Vas has exceeded our expetations in every aspect. Their attention to detail and commitment to quality truly sets them apart. ”",
      name: "Supplier Quality Engineer",
      location: "Kitchener, ON"
    },
  ];
  return (
    <>
      <div className="testimonial__area">
        <div className="container">
          <div className="testimonial__slider-3 swiper-container grey-bg-9 pt-100 pb-30">
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
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
                  slidesPerView: 1,
                },
                992: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 2,
                },
                1400: {
                  slidesPerView: 2,
                },
              }}
            >
              {testimonialData.map((testimonial) => {
                return (
                  <SwiperSlide key={testimonial.id}>
                    <div className="swiper-slide testimonial__slider-3-item">
                      <div className="testimonial__item-box text-center">
                        <div className="testimonail__quote-img mb-30">
                          <img src="assets/img/testimonial/quote-left.png" alt=""/>
                        </div>
                        <p className="quote__text mb-30">
                         {testimonial.desc}
                        </p>
                        <div className="author__info">
                          <div className="author__image">
                            <a href="#">
                              <img src={`${testimonial.authorImg}`} alt="author"/>
                            </a>
                          </div>
                          <div className="author__content">
                            <h5>{testimonial.name}</h5>
                            <span>{testimonial.location}</span>
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
    </>
  );
};

export default Testimonial;
