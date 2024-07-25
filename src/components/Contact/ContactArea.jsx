const ContactArea = () => {
  return (
    <>
      <section
        className="contact__area pt-120 pb-80"
        style={{
          background: `url(assets/img/bg/contact-bg.png)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="contact__item text-center mb-30">
                <div className="contact__icon mb-35">
                  <i className="fal fa-envelope-open-text"></i>
                </div>
                <h5 className="contact__title mb-25">Email Address</h5>
                <div className="contact__text">
                  <p>
                    <a href="mailto:blindsay@vascan.net">sales@vascan.net</a>
                  </p>
                 
                </div>
                <div className="contact__button mt-30">
                  <a
                    href="mailto:blindsay@vascan.net"
                    className="tp-btn-white"
                  >
                    Email Us <i className="fa-light fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="contact__item text-center mb-30">
                <div className="contact__icon mb-35">
                  <i className="fa-light fa-phone"></i>
                </div>
                <h5 className="contact__title mb-25">Phone Number</h5>
                <div className="contact__text">
                  <p>
                    <a href="tel:+1(519)-400-2284">+1 (844)-971-1141</a>
                  </p>
                </div>
                <div className="contact__button mt-30">
                  <a href="tel:+7892516563" className="tp-btn-white">
                    Call Us <i className="fa-light fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="contact__item text-center mb-30">
                <div className="contact__icon mb-35">
                  <i className="fa-light fa-map-location-dot"></i>
                </div>
                <h5 className="contact__title mb-25">Office Address</h5>
                <div className="contact__text">
                  <p>
                    <a
                      href="https://bit.ly/3EZDEJ3"
                      target="blank"
                    >
                      350 Hanlon Creek Boulevard #107, Guelph, ON N1C 1B9
                    </a>
                  </p>
                </div>
                <div className="contact__button mt-30">
                  <a
                    href="https://bit.ly/3EZDEJ3"
                    target="blank"
                    className="tp-btn-white"
                  >
                    Direction <i className="fa-light fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="contact__item text-center mb-30">
                <div className="contact__icon mb-35">
                  <i className="fa-light fa-bullseye-arrow"></i>
                </div>
                <h5 className="contact__title mb-25">Social Connect</h5>
                <div className="contact__social mt-30">
                  <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactArea;
