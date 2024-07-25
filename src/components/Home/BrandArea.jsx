import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import React, { useEffect } from 'react';

const BrandArea = () => {

  useEffect(() => {
    // JavaScript code to initialize or trigger animations
    // You can replicate your JavaScript code here
    const wowElements = document.querySelectorAll('.wow');

    wowElements.forEach((element, index) => {
      element.style.animationDelay = `${index * 200}ms`; // Adjust the delay as needed
      element.classList.add('fadeIn');
    });
  }, []);


  // const brandImg = [
  //   {
  //     id: 1,
  //     img: "assets/img/brand/brand-1.png",
  //   },
  //   {
  //     id: 2,
  //     img: "assets/img/brand/brand-2.png",
  //   },
  //   {
  //     id: 3,
  //     img: "assets/img/brand/brand-3.png",
  //   },
  //   {
  //     id: 4,
  //     img: "assets/img/brand/brand-4.png",
  //   },
  //   {
  //     id: 5,
  //     img: "assets/img/brand/brand-5.png",
  //   },
  //   {
  //     id: 6,
  //     img: "assets/img/brand/brand-1.png",
  //   },
  // ];
  return (
    <>

<div class="container-fluid fact bg-dark my-5 py-5">
        <div class="container">
            <div class="row g-4">
                <div class="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
                    <i class="fa fa-check fa-2x text-white mb-3"></i>
                    <h2 class="text-white mb-2" data-toggle="counter-up">1234</h2>
                    <p class="text-white mb-0">Years Experience</p>
                </div>
                <div class="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
                    <i class="fa fa-users-cog fa-2x text-white mb-3"></i>
                    <h2 class="text-white mb-2" data-toggle="counter-up">1234</h2>
                    <p class="text-white mb-0">Expert Technicians</p>
                </div>
                <div class="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
                    <i class="fa fa-users fa-2x text-white mb-3"></i>
                    <h2 class="text-white mb-2" data-toggle="counter-up">1234</h2>
                    <p class="text-white mb-0">Satisfied Clients</p>
                </div>
                <div class="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
                    <i class="fa fa-wrench fa-2x text-white mb-3"></i>
                    <h2 class="text-white mb-2" data-toggle="counter-up">1234</h2>
                    <p class="text-white mb-0">Compleate Projects</p>
                </div>
            </div>
        </div>
    </div>


      {/* <section className="brand__area pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="brand__title text-center">
                <span>Happy Sponsor</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="brand__slider swiper-container">
                <Swiper
                  spaceBetween={30}
                  slidesPerView={5}
                  loop={true}
                  className="banner__wrapper"
                  autoplay={{ delay: 6000 }}
                  modules={[Autoplay]}
                  breakpoints={{
                     0: {
                        slidesPerView: 2,
                     },
                     550: {
                        slidesPerView: 3,
                     },
                     768: {
                        slidesPerView: 4,
                     },
                     1200: {
                        slidesPerView: 5,
                     },
                     1400: {
                        slidesPerView: 5,
                        }
                   }}
                >
                  {brandImg.map((brand) => {
                    return (
                      <SwiperSlide key={brand.id}>
                        <div className="brand__slider-item">
                          <a href="#">
                            <img src={`${brand.img}`} alt="" />
                          </a>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default BrandArea;
