import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-area black-bg-2 pt-30  pb-1">
          <div className="container">
            <div className="row">
              <div className="col-xl-2  col-lg-2 col-md-3 col-sm-4">
                <div className="footer__widget mb-40">
                  <div className="footer__logo">
                    <Link href="/">
                      <a>
                        <img src="assets/img/logo/logo-vas.png" alt="" />
                        
                      </a>
                    </Link>
                    <p>350 Hanlon Creek Boulevard #107, Guelph, ON N1C 1B9</p>
                  </div>
                  <div className=" ISO_img">
                    <Link href="assets/documents/ISODOC.pdf">
                      <a>
                        <img src="assets/img/logo/ISOlogo.png" alt="" />
                        
                      </a>
                    </Link>
                   
                  </div>
                </div>
              </div>
              <div className="col-xl-3 pl-100 col-lg-3 col-md-4 col-sm-5 col-6">
                <div className="footer__widget footer__pages mb-40">
                  <h5 className="footer__widget-title">Quick Links</h5>
                  <div className="footer__widget-content">
                    <div className="footer__links">
                      <ul>
                        <li>
                          <Link href="/about">Why Choose Us</Link>
                        </li>
                        <li>
                          <Link href="/services">Our Services</Link>
                        </li>
                        <li>
                          <Link href="/blog">Our Blog</Link>
                        </li>
                          <li>
                          <Link href="/contact">Contact Us</Link>
                        </li>                 
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 pr-50 col-lg-3 col-md-4 col-sm-5 col-6">
                <div className="footer__widget footer__services mb-40">
                  <h5 className="footer__widget-title">Our Services</h5>
                  <div className="footer__widget-content">
                    <div className="footer__links">
                      <ul>
                      <li>
                          <Link href="/services-details">Quality Inspection</Link>
                        </li>
                        <li>
                          <Link href="/services-details">Warehousing & Distribution </Link>
                        </li>
                        <li>
                          <Link href="/services-details">Enhanced Labour Services</Link>
                        </li>
                        <li>
                          <Link href="/services-details">Pick & Pack Services</Link>
                        </li>         
                        <li>
                          <Link href="/services-details">Assembly Service </Link>
                        </li>
                        <li>
                          <Link href="/services-details">Rework & Repair</Link>
                        </li>                      
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-5 col-6">
                <div className="footer__widget mb-40">
                  <h5 className="footer__widget-title">Connect with us</h5>
                  <div className="footer__widget-content">
                    <p className="ft-text mb-35">
                      Let's collaborate on your next project. We respect
                      your privacy and your information will not be shared.
                    </p>
                    <div className="footer__subscribe-form p-relative mb-30">
                      <form action="#">
                        <input type="email" placeholder="Email Address" />
                        <button type="submit" className="s-button">
                          Connect
                        </button>
                      </form>
                    </div>
                    <div className="footer__social">
                      <div className="footer__social-info">
                        <span>Social Network:</span>
                        <div className="footer__social-icon">
                          <a href="https://www.facebook.com/people/VAS-Value-Added-Services/61561593402163/">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                          {/* <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                          <a href="#">
                            <i className="fab fa-behance"></i>
                          </a>
                          <a href="#">
                            <i className="fab fa-youtube"></i>
                          </a> */}
                          <a href="https://www.linkedin.com/company/vas-value-added-services/">
                            <i className="fab fa-linkedin"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer__copyright white-bg ">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                  <div className="footer__copyright-text">
                    <p>
                     &copy; <a href="#">VAS</a> - 2023
                    </p>
                  </div>
                </div>  
                {/* <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                  <div className="footer__copyright-links text-sm-end">
                    <Link href="/contact">Careers </Link>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          {/* <div className="footer__shape-1">
            <img src="assets/img/footer/footer-shape-1.png" alt="" />
          </div>
          <div className="footer__shape-2">
            <img src="assets/img/footer/footer-shape-2.png" alt="" />
          </div> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
