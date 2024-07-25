import Link from 'next/link';

const ProcessArea = () => {
  return (
    <>
      <section className="process__area pt-50 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="process__images">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div className="image-1 w-img">
                      <div className='process-img'>
                         <img src="assets/img/process/img-1.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div className="image-2 w-img">
                    <div className='process-img'>
                      <img src="assets/img/process/v3.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="process__right">
                <div className="section__wrapper mb-55">
                  <h4 className="section__title">
                     Foundations Of VAS
                  </h4>
                </div>
                <div className="proceess__list">
                  <div className="process__list-item mb-30">
                    <div className="process__list-info">
                      <div className="process__list-icon">
                        <img src="assets/img/icon/values.png" alt="" />
                      </div>
                      <div className="process__list-content">
                        <span>VAS</span>
                        <h5>
                          <Link href="/about#home">
                            <a>Values</a>
                          </Link>
                        </h5>
                      </div>
                    </div>
                    <div className="process__list-sp-icon">
                      <Link href="/about#home">
                        <a><i className="fa-light fa-arrow-right-long"></i></a>
                      </Link>
                    </div>
                  </div>
                  <div className="process__list-item mb-30">
                    <div className="process__list-info">
                      <div className="process__list-icon">
                        <img src="assets/img/icon/target.png" alt="" />
                      </div>
                      <div className="process__list-content">
                        <span>VAS</span>
                        <h5>
                          <Link href="/about#profile">Misson</Link>
                        </h5>
                      </div>
                    </div>
                    <div className="process__list-sp-icon">
                      <Link href="/about#profile">
                        <a><i className="fa-light fa-arrow-right-long"></i></a>
                      </Link>
                    </div>
                  </div>
                  <div className="process__list-item mb-30">
                    <div className="process__list-info">
                      <div className="process__list-icon">
                        <img src="assets/img/icon/vision.png" alt="" />
                      </div>
                      <div className="process__list-content">
                        <span>VAS</span>
                        <h5>
                          <Link href="/about#contact">Vision</Link>
                        </h5>
                      </div>
                    </div>
                    <div className="process__list-sp-icon">
                      <Link href="/about#contact">
                        <a><i className="fa-light fa-arrow-right-long"></i></a>
                      </Link>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProcessArea;
