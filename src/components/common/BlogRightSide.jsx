import Link from 'next/link';

const BlogRightSide = () => {
  return (
    <>
      <div className="col-lg-4">
        <div className="blog-sidebar__wrapper pl-30">
          <div className="blog-sidebar__widget mb-55 d-none">
            <div className="blog-sidebar__widget-content">
              <div className="blog-sidebar__widget-head mb-30">
                <h3 className="blog-sidebar__widget-title">About me</h3>
              </div>
              <div className="blog-sidebar__about">
                <div className="featured__author text-center">
                  <Link href="/team-details">
                  <a>
                    <img src="assets/img/blog/featured-img.jpg" alt="" />
                  </a>
                  </Link>
                  <h6 className=" featured__author-title mt-20">
                    <Link href="/team-details">Rosalina D. Willaimson</Link>
                  </h6>
                  <p>
                    Lorem ipsum dolor sit amet, consect etur adipisicing elit,
                    sed do eiusmod tempor incidi dunt.
                  </p>
                  <div className="featured__author-social">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-behance"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-sidebar__widget mb-55">
            <div className="blog-sidebar__widget-content">
              <div className="blog-sidebar__widget-head mb-30">
                <h3 className="blog-sidebar__widget-title">Search Here</h3>
              </div>
              <div className="blog-sidebar__search p-relative">
                <form action="#">
                  <input type="text" placeholder="Search your keyword..." />
                  <button type="submit">
                    <i className="fa-light fa-magnifying-glass"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="blog-sidebar__widget mb-55">
            <div className="blog-sidebar__widget-head mb-30">
              <h3 className="blog-sidebar__widget-title">Recent posts</h3>
            </div>
            <div className="blog-sidebar__widget-content">
              <div className="rc__post-wrapper">
                <div className="rc__post d-flex align-items-start">
                  <div className="rc__thumb mr-20">
                    <Link href="/blog-details">
                      <a>
                        <img src="assets/img/blog/sm-blog-1.jpg" alt="" />
                      </a>
                    </Link>
                    
                  </div>
                  <div className="rc__content">
                    <h6 className="rc__title">
                      <Link href="/blog-details">
                        ISO Certified
                      </Link>
                    </h6>
                    <div className="rc__meta">
                      <span>
                        <i className="fal fa-clock"></i> Sep 23, 2023
                      </span>
                    </div>
                  </div>
                </div>
                <div className="rc__post d-flex align-items-start">
                  <div className="rc__thumb mr-20">
                  <Link href="/blog-details">
                    <a>
                      <img src="assets/img/blog/sm-blog-2.jpg" alt="" />
                    </a>
                  </Link>
                  </div>
                  <div className="rc__content">
                    <h6 className="rc__title">
                      <Link href="/blog-details">
                        15 Years of Celebration
                      </Link>
                    </h6>
                    <div className="rc__meta">
                      <span>
                        <i className="fal fa-clock"></i> Dec 15, 2024
                      </span>
                    </div>
                  </div>
                </div>
                <div className="rc__post d-flex align-items-start">
                  <div className="rc__thumb mr-20">
                  <Link href="/blog-details">
                    <a>
                      <img src="assets/img/blog/sm-blog-3.jpg" alt="" />
                    </a>
                  </Link>
                  </div>
                  <div className="rc__content">
                    <h6 className="rc__title">
                      <Link href="/blog-details">
                         Women's Day celebration
                      </Link>
                    </h6>
                    <div className="rc__meta">
                      <span>
                        <i className="fal fa-clock"></i> March 08, 2024
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </>
  );
};

export default BlogRightSide;
