import Link from "next/link";

const ServicesArea = () => {
  const servicesData = [
    {
      id: 1,
      img: "assets/img/icon/quality-control.png",
      link: "#qualityinspection",
      title: (
        <>
          Quality Solutions
        </>
      ),
      desc: "When quality issues occur, VAS is there to provide that your customer only receives product that meets the required specification. With a focus on continuous improvement and innovation, VAS sets the bar for quality inspection services.",
    },
    {
      id: 2,
      link: "#warehouse",
      img: "assets/img/icon/warehouse.png",
      title: (
        <>
          Warehouse & Distribution
        </>
      ),
      desc: "VAS provides reliable and efficient warehouse and distribution services, ensuring the safe and timely delivery of your products. Trust VAS for all your warehouse and distribution needs.",
    },
    {
      id: 3,
      link: "#ondemandstaff",
      img: "assets/img/icon/on-demand-service.png",
      title: (
        <>
          Enhanced Labour 
        </>
      ),
      desc: "VAS provides reliable and agile workforce solutions tailored to meet fluctuating business demands with trust and efficiency, ensuring seamless staffing for dynamic operational needs.",
    },
    {
      id: 4,
      img: "assets/img/icon/product.png",
      link: "#assembly",
      title: (
        <>
          Assembly
        </>
      ),
      desc: "VAS specializes in kitting and assembly services, offering a turnkey solution to streamline your supply chain. Trust VAS to handle all your kitting and assembly needs, delivering accuracy and efficiency to your operations.",
    },
     {

      id: 5,
      link: "#pick&pack",
      img: "assets/img/icon/kitting.png",
      title: (
        <>
          Pick & Pack
        </>
      ),
      desc: "VAS delivers dependable and effective fulfillment solutions that ensure the safe and fast processing of your purchases. Trust us to handle all of your pick and pack needs, optimizing logistics for flawless delivery.",
    }, 
    {
      id: 6,
      img: "assets/img/icon/rework.png",
      link: "#rework",
      title: (
        <>
          Rework & Repair
        </>
      ),
      desc: "VAS provides top-notch repair and rework services with a focus on quality and efficiency. Our experienced team uses the latest tools and techniques to ensure a fast and reliable repair process, while maintaining strict quality standards.",
    },
    
  ];
  
  return (
    <>
      <section className="services__area-2 pt-90 pb-20 ">
        <div className="container">
          <div className="row mt-30">
            {servicesData.map((service) => {
              return (
                <div key={service.id} className="col-xl-4 col-lg-4 col-md-6">
                  <div className="services__item services__item-grid text-center mb-40 custom-css">
                    <div className="services__item-content">
                      <div className="ser__icon mb-30">
                      {service.img.startsWith("assets") ? (
                        <img src={service.img} alt={service.title} />
                      ) : (
                        <i className={service.img}></i>
                      )}
                      </div>
                      <h5 className="ser__title mb-10">
                      {service.link ? (
                        <Link href={service.link}>
                          <a>{service.title}</a>
                        </Link>
                      ) : (
                        service.title
                      )}
                    </h5>
                      <p>
                      {service.desc}
                      </p>
                      <div className="ser__more-option mt-15">
                      <Link href={`/services-details${service.link}`}>
                      <a>
                        Service Details
                        <i className="fal fa-long-arrow-right"></i>
                      </a>
                    </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesArea;
