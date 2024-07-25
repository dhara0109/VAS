import { Swiper, SwiperSlide } from "swiper/react";
import Link from 'next/link';
import SwiperCore, {
  Navigation,
  EffectFade,
  Autoplay,
} from "swiper";

const HeroSlider = () => {

  const sliderData = [
    {
      id: 1,
      img: "assets/img/slider/vas.jpg",
    },
    {
      id: 2,
      img: "assets/img/slider/product.jpg",
    },
    {
      id: 3,
      img: "assets/img/slider/bkjc.jpg",
    },
    {
      id: 4,
      img: "assets/img/slider/ukss.jpg",
    }
  ];

  return (
    <>
      <section className="slider-area fix">
        <div className="swiper main-slider swiper-container swiper-container-fade p-relative">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            className="swiper-wrapper"
            autoplay={{ delay: 5000 }}
            effect={"fade"}
            modules={[Navigation,EffectFade,Autoplay]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
          >
            {sliderData.map((slider) => {
              return (
                <SwiperSlide key={slider.id}>
                  <div className="item-slider sliderm-height p-relative swiper-slide">
                    <div
                      className="slide-bg"
                      style={{
                        background: `url(${slider.img})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                      }}
                    ></div>

                    <div className="container">
                      <div className="row ">
                        <div className="col-lg-12">
                          <div className="slider-contant mt-25">
                            
                            <h2 className="slider-title">Total Manufacturing Support</h2>
                            <div className="slider-button mt-50">
                              <Link href="/services">
                                <a className="tp-btn mr-30">Our Services
                                <i className="fal fa-angle-right"></i></a>
                              </Link>
                              <Link href="assets/documents/signature.pdf">
                                <a className="tp-btn-2"> Learn More</a>                             
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className="swiper-button-prev ms-button">
            <i className="far fa-long-arrow-left"></i>
          </div>
          <div className="swiper-button-next ms-button">
            <i className="far fa-long-arrow-right"></i>
          </div>
        </div>
      </section>
    
    </>
  );
};

export default HeroSlider;
