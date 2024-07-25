import Link from "next/link";
import dynamic from 'next/dynamic';
import useSticky from "../../hook/use-sticky";
import useGlobalContext from "../../hook/useGlobalContext";
import Sidebar from "./Sidebar";

const Header = () => {
  const { headerSticky } = useSticky();
  const { setShowSidebar } = useGlobalContext();
  return (
    <>
      <header
        id="header-sticky"
        className={`${ headerSticky ? "header-area header__sticky" : "header-area"}`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-2 col-lg-2 ">
              <div className="logo-area">
                <div className="logo">
                  <Link href="/">
                      <a>
                        <img src="assets/img/logo/logo-vas.png" alt="" />
                      </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 col-md-6 col-6">
              <div className="menu-area menu-padding">
                <div className="main-menu">
                  <nav id="mobile-menu" className="d-none d-lg-block">
                    <ul>
                      <li >
                        <Link href="/">Home</Link>                       
                      </li>
                      <li>
                        <Link href="/about">Why Choose Us</Link>
                      </li>
                      <li className="has-dropdown">
                        <Link href="/services">Services</Link>
                        <ul className="sub-menu">
                          <li>
                            <Link href="/services">Services</Link>
                          </li>
                          <li>
                            <Link href="/services-details">
                              <a>Services Details</a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      
                   
                      <li className="has-dropdown">
                        <Link href="/blog">News</Link>
                        <ul className="sub-menu">
                          <li>
                            <Link href="/blog">News</Link>
                          </li>
                          <li>
                            <Link href="/blog-details">News Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="/contact">Contact</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div
                onClick={() => setShowSidebar(true)}
                className="side-menu-icon d-lg-none text-end"
              >
                <button
                  className="info-toggle-btn f-right sidebar-toggle-btn"
                >
                  <i className="fal fa-bars"></i>
                </button>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 d-none d-lg-block">
              <div className="header-info f-right">
                <div className="info-item info-item-right">
                  <span style={{color:'#a6a6a7'}}>Phone Number</span>
                  <h5>
                    <a href="tel:+1(519)-400-2284">+1 (844)-971-1141</a>
                  </h5>
                </div>
                <div className="info-item">
                  <span style={{color:'#a6a6a7'}}>Free Consultancy</span>
                  <h5>
                    <a href="mailto:blindsay@vascan.net">sales@vascan.net</a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar  */}
      <Sidebar />
      {/* Sidebar  */}
    </>
  );
};

export default dynamic(()=> Promise.resolve(Header), {ssr: false});

