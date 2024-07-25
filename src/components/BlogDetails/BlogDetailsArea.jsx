import Photo from "./Photo";


const BlogDetailsArea = () => {
  return (
    <>
      
      <div className="blog__details-area pt-70 pb-70">
        <div className="container ">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog__wrapper">
                <div className="tp-blog mb-50">
                  <p className="blog15years">15 Years of Success: Celebrating Milestones, Embracing the Future</p>
                  <div className="tp-blog__thumb m-img mb-35">
                    <img src="assets/img/blog/celebration.jpg" class="blog-img15" alt="blog-img" />
                  </div>
                  <div className="tp-blog__meta mb-15">
                    <span>
                      <a href="#">
                        <i className="fal fa-clock"></i> December 15, 2023
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="far fa-user"></i> Brandon Lindsay
                      </a>
                    </span>
                    {/* <span>
                      <a href="#">
                        <i className="far fa-comments"></i> 2 Comments
                      </a>
                    </span> */}
                  </div>
                  <p>
                  Join us to celebrate 15 years of excellence and innovation! Since its founding, 
                  we've worked for greatness, developing long-term partnerships and making significant contributions to our industry.
                   As we celebrate this milestone, we reflect on the path that has shaped us and anticipate the great prospects that lie ahead. 
                   Thank you for being a part of our narrative as we continue to innovate, inspire, and thrive for many years to come.
                  </p>

                  <p>
                  Today is a historic day for our organization, as we commemorate 15 years of dedication, growth, and achievement.
                   Over the last decade and a half, we've been on an incredible journey, overcoming obstacles, seizing opportunities, and making visions a reality. 
                   Our journey has been propelled by our team's unrelenting dedication, the faith of our dedicated consumers, and the backing of our partners. 
                   We've achieved milestones that exceeded our wildest expectations, yet our journey is far from over. 
                   As we mark this historic event, we renew our dedication to innovation, excellence, and customer satisfaction. 
                  We are proud of our successes, but more importantly, we are determined and excited about the next chapter of our journey. 
                  </p>

                  <blockquote>
                    <p>
                    15 years: a journey full of obstacles, achievements, and memories that have turned us into the people we are today. Cheers to the past, present, and future, and the limitless possibilities that lay ahead.!
                    </p>

                    <p>
                      <span>Chris Murphy</span>
                    </p>
                  </blockquote>
                </div> 
                
              </div>   
           

            </div>
                <Photo></Photo>

          
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailsArea;
