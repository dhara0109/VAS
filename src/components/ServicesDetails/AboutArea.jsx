import Link from "next/link";
import ReactImageShapes from "react-image-shapes";

const AboutArea = () => {
  return (
    <>
     <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        padding: "20px 0px",
        backgroundColor : "#b8b8b8",
      }}
    >
        <style>
          {`
          .reactimage {
            height: 40.6rem !important;
            width: 40rem !important;
          }
          `}
        </style>
      <section id="qualityinspection" className="about__area pt-100 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="about__image about__image-2">
                <div className="about__image-big">
                <img src="assets/img/services/time-1.jpg" style={{ height: "30rem", width:"34rem" }} alt="" />            
                </div>
                <div className="about__image-small about__image-small-2">
                <img src="assets/img/work_people/Dale.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="about__right-2">
                <div className="about__info pb-20">
                  <div className="section-2__wrapper mb-30">
                    <h5 className="section__title-sm">
                      Precision Assured, Quality Delivered
                    </h5>
                  </div>
                  <p>
                  Our meticulous approach ensures precise evaluation of Quality and compliance with industry standards, providing you with reliable insights to enhance product quality and streamline operations.
                  </p>
                </div>
                <div className="proceess__list pt-30">
                  <div className="process__list-item mb-30">
                    <div className="process__list-info">
                      <div className="process__list-icon">
                        <i className="flaticon-pencil"></i>
                      </div>
                      <div className="process__list-content">
                        <h5 className="process__list-item-title">
                          Looking for a versatile team to meticulously inspect and  <br /> 
                          handle your parts quality concerns?                          
                        </h5>
                      </div>
                    </div>
                    <div className="process__list-sp-icon">
                      <Link href="/services-details">
                        <a><i className="fa-light fa-arrow-right-long"></i></a>
                      </Link>
                    </div>
                  </div>
                </div>
                <p className="process__text">
               
                  VAS tailors our inspection services to ensure that your needs are met. From the simple sorting activity to a complex inspection process we can deploy quickly, set up professionally and ensure that the product involved is compliant. Our processes ensure that we provide the services in a cost effective manner.

                </p>
                <div className="about__button mt-35">
                <Link href="assets/documents/QualityInspection.pdf">
                    <a className="tp-touch-btn">Learn More <i className="fa-light fa-arrow-right-long"></i></a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* righr side image */}
      <section id="assembly" className="about__area pt-30 pb-10">
        <div className="container">
          <div className="row">
            
            <div className="col-xl-6 col-lg-6">
              <div className="about__right-2">
                <div className="about__info pb-20">
                  <div className="section-2__wrapper mb-30">
                    <h5 className="section__title-sm">
                       Efficiency in Every Assembly
                    </h5>
                  </div>
                  <p>
                  VAS understands the particular issues that industrial organizations encounter. As a result, our kitting and assembly services are customized according to your individual requirements, offering adaptable solutions that meet your production desires. Let us assist you in improving your operational efficiency and staying ahead in today's competitive industrial scene.
                  </p>
                </div>
              
                <p className="process__text">
                  <br/>
                In today's rapid industrial world, efficiency and precision are critical. Our kitting and assembly services are intended to streamline your production process, saving you time and resources. With great attention to detail, our skilled staff guarantees that all components are precisely constructed to satisfy the highest industry standards. From component sourcing to final assembly, we provide end-to-end solutions that optimize workflow and efficiency.
                </p>
                <div className="about__button mt-35">
                  <Link href="assets/documents/Assembly.jpg" >
                    <a className="tp-touch-btn">Learn More <i className="fa-light fa-arrow-right-long"></i></a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="reactimage">
             
              <div className="col-xl-6 col-lg-6">
              <div>
                <img
                  src="assets/img/services/time-5.jpg"
                  alt="url"
                  style={{
                    clipPath: 'polygon(20% 0px, 100% 0px, 100% 100%, 0% 100%)',
                    height:'35rem',
                    width:'33.6rem',
                    border:'5px solid #f2fb3e',
                    borderRadius:'10px'
                  }}
                />

              </div>
            </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="rework" className="about__area  pb-30">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="about__image about__image-2">
                <div className="about__image-big">
                <div>
                <img
                  src="assets/img/services/rework.jpg"
                  alt="url"
                  style={{
                    clipPath: 'polygon(0% 0px, 80% 0px, 100% 100%, 0% 100%)',
                    height: '35.6rem',
                    width:'34.6rem',
                    marginTop: '20px',
                    border:'5px solid #f2fb3e',
                    borderRadius:'10px'
                   
                  }}
                />
              </div>
                </div>
               
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="about__right-2">
                <div className="about__info pb-20">
                  <div className="section-2__wrapper mb-30">
                    <h5 className="section__title-sm">
                    Repairing with Precision, Rework with Care
                    </h5>
                  </div>
                  <p>
                  At VAS, we recognize the vital role that dependability and quality control play in all facets of industrial production. 
                  For this reason, we provide thorough repair and rework services to take care of any potential quality problems.
                   With the most advanced equipment and knowledge, our highly qualified specialists can carefully examine, identify, 
                   and fix any flaws or inconsistencies in your products. We are dedicated to providing excellent outcomes 
                   with the highest level of accuracy and efficiency, whether it be through the repair of malfunctioning parts, 
                   the optimization processes and procedures, or the improvement of product performance.
                  </p>
                </div>
                
                <p className="process__text">
                  <br/>
                You can be sure that your items are in good hands when you use VAS. Our proactive approach minimizes downtime and maximizes productivity by quickly identifying and resolving quality issues. 
                </p>
                <div className="about__button mt-35">
                  <Link href="assets/documents/Rework.jpg" >
                    <a className="tp-touch-btn">Learn More <i className="fa-light fa-arrow-right-long"></i></a>
                  </Link>
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </section>

      <section id="pick&pack" className="about__area pt-50 pb-40">
        <div className="container">
          <div className="row">
            
           <div className="col-xl-6 col-lg-6">
              <div className="about__right-2">
                <div className="about__info pb-20">
                  <div className="section-2__wrapper mb-30">
                    <h5 className="section__title-sm">
                    Fast, Flexible, Flawless Packaging Solutions
                    </h5>
                  </div>
                  <p>
                  At VAS, we understand the fundamental necessity of packaging in the business world.
                   With an unrelenting dedication to quality and precision, we provide a complete range of packaging solutions 
                   designed to meet the unique needs of enterprises operating in workplaces. We collaborate closely with each customer 
                   to design tailored packaging strategies that not only preserve their products but also improve their supply chain efficiency. 
                  
                  </p>
                  <p className="process__text">
                  <br/>

                  Our approach to packaging for business is founded on creativity and meticulous attention to detail. 
                   From the initial concept design to the final delivery, we prioritize the use of superior supplies and cutting-edge technology 
                   to ensure that each package fulfills the highest durability and reliability criteria. 
                  </p>
                  <p className="process__text">

                   <br/>
                   At VAS, we understand that effective packaging improves your company's entire productivity and goes beyond only safeguarding your  products.
                   To help you save time and money on logistics, we provide a variety of value-added services like inventory management,
                    kitting, and labeling.
                     You can concentrate on what you do best—growing your business—knowing that your items will arrive at  their destination safely and securely when VAS is your packaging partner.
                  </p>
                </div>

                <div className="about__button mt-35">
                  <Link href="assets/documents/pickpack.jpg" >
                    <a className="tp-touch-btn">Learn More <i className="fa-light fa-arrow-right-long"></i></a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
            <div className="about__image about__image-2">
                <div className="about__image-big">
                <div>
                <img
                  src="assets/img/services/pick-2.jpg"
                  alt="url"
                  style={{
                    clipPath: 'polygon(20% 0px, 100% 0px, 100% 100%, 0% 100%)',
                    height:'44.6rem',
                    width:'40.6rem',
                    marginTop: '20px',
                    border:'5px solid #f2fb3e',
                    borderRadius:'10px'
               
                  }}
                />
                </div>
                </div>
              </div>   
            </div>
          </div>
        </div>
      </section>

      <section id="ondemandstaff" className="about__area  pb-30">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="about__image about__image-2">
                <div className="about__image-big">
                <div>
                <img
                  src="assets/img/services/staff.jpg"
                  alt="url"
                  style={{
                    clipPath: 'polygon(0% 0px, 80% 0px, 100% 100%, 0% 100%)',
                    height: '36.8rem',
                    width: '40rem',
                    marginTop:'22px',
                    backgroundSize: 'cover',
                    border:'5px solid #f2fb3e',
                    borderRadius:'10px',
                   
                  }}
                />
              </div>
                </div>
               
              </div>
            </div>
            <div  className="col-xl-6 col-lg-6">
              <div className="about__right-2">
                <div className="about__info pb-20">
                  <div className="section-2__wrapper mb-30">
                    <h5 className="section__title-sm">
                     Enhanced Labour Services
                    </h5>
                  </div>
                  <p>
                  VAS offers agile workforce solutions that are specifically adapted to your company's changing demands. 
                  Our on-demand staffing service gives you access to a dependable and adaptable workforce whenever you need it. 
                  Whether you are dealing with seasonal peaks, unforeseen absences, or special projects, VAS has the experience to deliver competent staff on short notice. 
                  We realize the importance of maintaining operational efficiency and are devoted to delivering workforce solutions that allow you to easily handle unpredictable business demands.
                  </p>
                </div>
                
                <p className="process__text">
                  <br/>
                  Our employees collaborate closely with you to understand your specific needs and create tailored solutions that correspond with your goals. 
                  We value quality and efficiency, ensuring that every individual we hire has been thoroughly vetted and trained to match your expectations. 
                  With VAS's on-demand staffing solution, you can concentrate on your main business activities while we handle your staffing requirements, giving you peace of mind and the assistance you require to thrive.
                </p>
                <div className="about__button mt-35">
                  <Link href="assets/documents/LabourServices.jpg" >
                    <a className="tp-touch-btn">Learn More <i className="fa-light fa-arrow-right-long"></i></a>
                  </Link>
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </section>


       {/* righr side image */}
      <section id="warehouse" className="about__area pt-50 pb-50">
        <div className="container">
          <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="about__image about__image-2">
                <div className="about__image-big">
                <div>
                    <img
                    src="assets/img/services/warehouse.jpg"
                    alt="url"
                    style={{
                        clipPath: 'polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)',
                        height: '34rem',
                        width: '30rem',
                        backgroundSize: 'cover',
                        transform: 'scale(1.2)',
                        paddingTop: '3rem'
                       }}
                    />
                </div>
                </div>
              </div>   
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="about__right-2">
                <div className="about__info pb-20">
                  <div className="section-2__wrapper mb-30">
                    <h5 className="section__title-sm">
                    Warehousing Solutions, Tailored for Your Needs
                    </h5>
                  </div>
                  <p>
                  Offering extensive warehouse and distribution services that are intended to
                  optimize your supply chain operations is something we at VAS are proud to offer.
                  <br/>
                  VAS has 12,000 sq. ft. of warehouse space available in Guelph Ontario. We are able to provide 24/7 shipping and receiving.  
                  </p>
                </div>
                <div className="proceess__list pt-30">
                  <div className="process__list-item mb-30">
                    <div className="process__list-info">
                      
                      <div className="process__list-content">
                        <h5 className="process__list-item-title">
                        Services include:<br /> <br/>
                        • Storage <br/>

                        • Scanning & Labelling<br/>

                        • Inventory management<br/>

                        • Order Picking<br/>

                        • Document generation / customs<br/>

                        • Logistic services<br/>

                        • JIT shipping<br/>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="about__button mt-35">
                  <Link href="assets/documents/Warehousing.jpg" >
                    <a className="tp-touch-btn">Learn More <i className="fa-light fa-arrow-right-long"></i></a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      </div>
    </>
  );
};

export default AboutArea;
