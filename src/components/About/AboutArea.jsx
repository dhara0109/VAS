import Link from 'next/link';

const AboutArea = () => {
  return (
    <>
      <section className="about__area-2 pt-150 pb-90">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="about__sm-image about__sm-image-df">
                    <div className="sm-image__item w-img l-image mb-30">
                      <a href="#">
                        <img src="assets/img/work_people/Dale-Kalyan.jpg" alt="ab-img"/>
                      </a>
                    </div>
                    <div className="sm-image__item w-img mb-30">
                      <a href="#">
                        <img src="assets/img/about/2/about-img-3.jpg" alt="ab-img"/>
                      </a>
                      <div className="sm-image__content">
                        <div className="sm-number">
                          <a href="#">
                            15 <span>+</span>
                          </a>
                          <p>Years Of Experience</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="about__sm-image">
                    <div className="sm-image__item w-img ximg mb-30">
                      <a href="#">
                        <img src="assets/img/work_people/Sayali.jpeg" alt="ab-img"/>
                      </a>
                    </div>
                    <div className="sm-image__item w-img l-image mb-30">
                      <a href="#">
                        <img src="assets/img/work_people/Seng.jpg" alt="ab-img"/>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="ab-left-content">
                <div className="section__wrapper mb-30">
                  <h4 className="section__title">
                    What We Provide
                  </h4>
                  <div className="r-text">
                    <span>about us</span>
                  </div>
                </div>
                <p className="abd-text">
                <ul>
                  <li>
                    <p className="sm-text mb-20">
                    <b>Extensive Industry Experience</b>  : The VAS team has 15 years of experience within the automative manufacturing sector. 
                    Our management team has industry leading experience in what is required to ensure quality products get shipped to OEMs.
                    </p>
                  </li>
                  <li>
                    <p className="sm-text mb-20">
                    <b>Trusted Service Provider</b>  : VAS has partnered with CPK for over 14 years, providing support for safe Launch. Supplier Quality Inspection, Rework and JIT Kitting. 
                    We have taken on challenging projects and we deliver the required results.
                    </p>
                  </li>
                  <li>
                    <p className="sm-text mb-35">
                    <b>ISO 9001 Compliant Quality System</b>  : VAS prides itself on being a customer focused service provider. Delivering standardized and consistent results each and every project. 
                    We embody the continuous improvement mindset to ensure we're able to provide the absolute best service to our customers.
                    </p>
                  </li>
                </ul>  

                </p>
             
               
                <div className="ab-button mb-30">
                  <Link href="/about">
                    <a className="tp-btn-d">Learn More</a>
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

export default AboutArea;
