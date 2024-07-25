import { Swiper, SwiperSlide } from "swiper/react";
import Link from 'next/link';
import SwiperCore, { Navigation, Autoplay } from "swiper";

const ServicesArea = () => {
  return (
    <>
      <section className="services-area grey-bg-5 pt-120 pb-115 fix">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="ab-left-content">
                <div className="section__wrapper mb-30">
                  <h4 className="section__title">
                    Dont need to look very far to get a better perspective
                  </h4>
                  <div className="r-text">
                    <span>services</span>
                  </div>
                </div>
                <p className="sm-text mb-45">
                By promoting teamwork and creating an open, inclusive, positive, and focused work environment, VAS will drive
                customer satisfaction and provide a high level of quality to our services such as inspection, sorting, containment, picking,
                packing and warehousing.
                </p>
                <div className="ab-button mb-30">
                  <Link href="/contact">
                    <a className="tp-btn-ts">Get In Touch <i className="fal fa-angle-right"></i></a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="services__slider swiper-container">
                <Swiper
                  spaceBetween={30}
                  slidesPerView={3}
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
                      slidesPerView: 3,
                      }
                  }}
                >
                  <SwiperSlide>
                    <div className="single-services swiper-slide">
                      <h5>Quality Services</h5>
                      <div className="services-list pb-10">
                        <ul>
                          <li>
                            <span>Sorting</span>
                          </li>
                          <li>
                            <span>Containment</span>
                          </li>
                          <li>
                            <span>Rework</span>
                          </li>
                          <li>
                            <span>Product Repacking</span>
                          </li>
                          <li>
                            <span>Re-Labeling</span>
                          </li>
                          <li>
                            <span>Safe Launch</span>
                          </li>
                        </ul>
                      </div>
                      <div className="sr-button">
                        <Link href="/services-details#qualityinspection">Read More</Link>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="single-services swiper-slide">
                      <h5>Warehouse Services</h5>
                      <div className="services-list pb-10">
                        <ul>
                          <li>
                            <span>Short or Long Term Storage</span>
                          </li>
                          <li>
                            <span>Order Picking</span>
                          </li>
                          <li>
                            <span>Logistic Support</span>
                          </li>
                          <li>
                            <span>Inventory Tracking</span>
                          </li>
                          <li>
                            <span>Kitting Service</span>
                          </li>
                        </ul>
                      </div>
                      <div className="sr-button">
                        <Link href="/services-details#warehouse">Read More</Link>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="single-services swiper-slide">
                      <h5>Enhanced Labour Services</h5>
                      <div className="services-list pb-10">
                        <ul>
                          <li>
                            <span>On Demand</span>
                          </li>
                          <li>
                            <span>Flexible Scheduling</span>
                          </li>
                          <li>
                            <span>No Long Term Commitment</span>
                          </li>
                          <li>
                            <span>Competitive Rates</span>
                          </li>
                          <li>
                            <span>Data-Driven Decision Making</span>
                          </li>
                        </ul>
                      </div>
                      <div className="sr-button">
                        <Link href="/services-details#ondemandstaff">Read More</Link>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="single-services swiper-slide">
                      <h5>Assembly Services</h5>
                      <div className="services-list pb-10">
                        <ul>
                          <li>
                            <span>Build to order</span>
                          </li>
                          <li>
                            <span>Packaging</span>
                          </li>
                          <li>
                            <span>Labeling</span>
                          </li>
                          <li>
                            <span>Market Assesment</span>
                          </li>
                          <li>
                            <span>Risk Management</span>
                          </li>
                          <li>
                            <span>Barcode & Serialization</span>
                          </li>
                        </ul>
                      </div>
                      <div className="sr-button">
                        <Link href="/services-details#assembly">Read More</Link>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="single-services swiper-slide">
                      <h5>Pick & Pack  Services</h5>
                      <div className="services-list pb-10">
                        <ul>
                          <li>
                            <span>Customized Orders</span>
                          </li>
                          <li>
                            <span>Efficient Handling</span>
                          </li>
                          <li>
                            <span>Inventory Management</span>
                          </li>
                          <li>
                            <span>Independent Delivery</span>
                          </li>
                          <li>
                            <span>Scalability</span>
                          </li>
                        </ul>
                      </div>
                      <div className="sr-button">
                        <Link href="/services-details#pick&pack">Read More</Link>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="single-services swiper-slide">
                      <h5>Rework & Repair  Services</h5>
                      <div className="services-list pb-10">
                        <ul>
                          <li>
                            <span>Evaluation</span>
                          </li>
                          <li>
                            <span>Disassembly/Replacement</span>
                          </li>
                          <li>
                            <span>Adjustment</span>
                          </li>
                          <li>
                            <span>Quality Inspection</span>
                          </li>
                          <li>
                            <span>Reporting</span>
                          </li>
                        </ul>
                      </div>
                      <div className="sr-button">
                        <Link href="/services-details#rework">Read More</Link>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesArea;
