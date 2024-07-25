import SingleCompanyAbout from "../common/SingleCompanyAbout";

const CompanyAbout = () => {
  return (
    <>
      <section className="company__about">
        <div className="row g-0">
          <div className="col-xl-12">
            <div className="company__about-tab">
              <ul className="nav nav-tabs about-tabs" id="myTab" role="tablist">
                <li
                  className="nav-item abst-item abst-item"
                  role="presentation"
                >
                  <button
                    className="nav-link abst-item-vision"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    Our vision
                    <i className="fa-light fa-arrow-down-long"></i>
                  </button>
                </li>
                <li className="nav-item abst-item" role="presentation">
                  <button
                    className="nav-link active abst-item-link abst-item-vision"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    company values
                    <i className="fa-light fa-arrow-down-long"></i>
                  </button>
                </li>
                <li className="nav-item abst-item" role="presentation">
                  <button
                    className="nav-link abst-item-vision"
                    id="contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#contact"
                    type="button"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                  >
                    Our mission
                    <i className="fa-light fa-arrow-down-long"></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div
              className="tab-content company__about-tabs-content"
              id="myTabContent"
            >
              <div className="tab-pane fade pt-60" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div className="row justify-content-center">
                  <div className="col-xl-8">
                    <div className="company__sm-about text-center">
                      <span className="animate"><b>VAS</b></span>
                      <p>
                      Our vision is to be an integrated value-added strategic partner who seamlessly interacts with our customers. We aim to
                      be a torch bearer in our field and continually improve our service offerings while maintaining customer focus to surpass
                      our goals each year.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row mt-50 mb-50">
                  <SingleCompanyAbout
                    img="assets/img/icon/high-quality.png"
                    title="Data Reporting"
                    desc="VAS ensures project transparency with daily custom reports, featuring visual elements for clarity and accountability."
                  />
                  <SingleCompanyAbout
                    img="assets/img/icon/computer.png"
                    title="Technology Driven"
                    desc="At VAS, we blend Google Drive with cutting-edge software for seamless and improved customer support operations."
                  />
                  <SingleCompanyAbout
                    img="assets/img/icon/audience.png"
                    title="Customer Focused"
                    desc="At VAS, we prioritize and fulfill customer requirements. VAS wants to be a one-stop solution."
                  />
                </div>
              </div>
              <div className="tab-pane fade show active pt-60" id="profile"  role="tabpanel" aria-labelledby="profile-tab" >
                <div className="row justify-content-center">
                  <div className="col-xl-8">
                    <div className="company__sm-about text-center">
                      <span className="animate"><b>VAS</b></span>
                      <p>
                      VAS is a superior provider of quality, rework, warehousing, and assembly services.  
                      We are committed to meeting or exceeding our customer’s requirements, internal, external and regulatory.  
                      We continually audit and monitor our customers satisfaction goals in the areas of cost, quality, response and safety. 
                      Through development of our staff, continuous improvement and striving to innovate, we will meet or exceed our customer’s expectation.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row mt-50 mb-50">
                  <SingleCompanyAbout
                    img="assets/img/icon/iso.png"
                    title="ISO 9001:2015 Certified"
                    desc="VAS proudly certified to ISO 9001:2015, demonstrates commitment to quality excellence and customer fulfillment."
                  />
                  <SingleCompanyAbout
                    img="assets/img/icon/belief.png"
                    title="What we believe"
                    desc="In our beliefs, trust is the cornerstone, cultivated through transparency, integrity, and accountability."
                  />
                  <SingleCompanyAbout
                    img="assets/img/icon/three-dimensional.png"
                    title="Multi-dimensional"
                    desc="Becoming a versatile solution provider with quality inspection, assembly warehousing, and just-in-time delivery."
                  />
                </div>
              </div>
              <div className="tab-pane fade pt-60" id="contact" role="tabpanel"  aria-labelledby="contact-tab" >
                <div className="row justify-content-center">
                  <div className="col-xl-8">
                    <div className="company__sm-about text-center">
                      <span className="animate"><b>VAS</b></span>
                      <p>
                      By promoting teamwork and creating an open, inclusive, positive, and focused work environment, VAS will drive
                      customer satisfaction and provide a high level of quality to our services such as inspection, sorting, containment, picking,
                      packing and warehousing.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row mt-50 mb-50">
                  <SingleCompanyAbout
                    img="assets/img/icon/accountability.png"
                    title="Accountability"
                    desc="At our core, we prioritize accountability, ensuring transparency and reliability in all our actions and decisions with customers, partners, and stakeholders."
                  />
                  <SingleCompanyAbout
                    img="assets/img/icon/commitment.png"
                    title="Consistency"
                    desc="We thrive on consistency, delivering unwavering quality, service, and results to ensure excellence our customers can trust."
                  />
                  <SingleCompanyAbout
                    img="assets/img/icon/marketing.png"
                    title="Commitment"
                    desc="Committed to exceeding expectations, meeting deadlines, and fostering enduring relationships built on trust and reliability."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyAbout;
