import Link from "next/link";

const AboutUs = () => {
  return (
    <>
      <section className="about__area pt-100 pb-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6  order-lg-2">
              <div className="ab-tab-info mb-30">
                <div className="ab-image w-img vas">
                  <img src="assets/img/slider/vas.jpg"  alt="" />
                </div>
                <div className="absp-text absp-text-1">
                  <i className="flaticon-windmill"></i>
                  <div className="absp-info">
                    <h5>
                      <span className="counter">1000</span>+
                    </h5>
                    <span className="absm-title">Projects Done</span>
                  </div>
                </div>
                <div className="absp-text absp-text-2">
                  <i className="flaticon-container-1"></i>
                  <div className="absp-info">
                    <h5>
                      <span className="counter">150</span>+
                    </h5>
                    <span className="absm-title">Happy Customer</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6  order-lg-1">
              <div className="ab-left-content">
                <div className="section__wrapper mb-30">
                  <h4 className="section__title">
                    VAS can add value to your business.
                  </h4>
                  <div className="r-text">
                    <span>about us</span>
                  </div>
                </div>
                <p className="abd-text">
                Since 2008, VAS has partnered with our customers to become a value added extension of their operation. 
                This has allowed our customers to focus their efforts on their core business as VAS provides the resources to assist in the areas of need.
                </p>
                <div className="ab-author mb-30">
                  <h5>
                    Chris Murphy <span>- Founder</span>
                  </h5>
                </div>
                <ul>
                  <li>
                    <p className="sm-text mb-20">
                    <b>Flexible Storage Solutions</b>: Whether you need short-term or long-term storage, VAS offers a variety of options to fit your needs.
                    </p>
                  </li>
                  <li>
                    <p className="sm-text mb-20">
                    <b>Efficient Distribution</b>: Our team of professionals works to ensure that your products are efficiently distributed to their final destinations.
                    </p>
                  </li>
                  <li>
                    <p className="sm-text mb-35">
                    <b>Customized Services</b>: At VAS, we understand that every customer has different needs. That's why we offer customizable services to meet your specific requirements.
                    </p>
                  </li>
                </ul>                          
                <div className="ab-button mb-30">
                  <Link href="/about">
                    <a className="tp-btn">Learn More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
