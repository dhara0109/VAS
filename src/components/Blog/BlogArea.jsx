import Link from 'next/link';
import BlogData from "../../data/blogData";
import BlogRightSide from "../common/BlogRightSide";
import useGlobalContext from "../../hook/useGlobalContext";
import VideoModal from "../common/VideoModal";
import styled from 'styled-components';

const Wrapper = styled.div`
 
  transition: 0.25s;
  position: relative;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
`;

const HoverOverlay = styled.div`
  content: '';
  left: 0;
  top: 0;
  height: calc(100% - 30%);
  width: calc(100% - 30%);
  
 
  position: absolute;
  z-index: -1;
  transition: 0.5s 0.05s;
`;

const HoverWrapper = styled.div`
  &:hover {
    transform: translateX(-1rem) translateY(-1rem);
  }
`;


const BlogArea = () => {
const {show,handleClose} = useGlobalContext();
  return (
    <>
   

      <div className="blog__area pt-120 pb-65">
        <div className="container custom-container-3">
          <div className="row">
            <div className="col-lg-8">
              <div className="tp-blog__wrapper mb-50">
                {BlogData.slice(0, 3).map((blog) => {
                  const { author,titleTwo,date,desc,imgTwo } = blog;
                  return (
                    <div key={blog.id} className="tp-blog mb-60">
                      <div className="tp-blog__thumb m-img mb-35">
                        {(
                          <Wrapper className="wrapper">
                          <HoverWrapper>
                            <Link href="/blog-details">
                              <a className="img-link">
                                <Image src={imgTwo} alt="blog-img" />
                                <HoverOverlay />
                              </a>
                            </Link>
                          </HoverWrapper>
                        </Wrapper>

                        )}
                      </div>
                      <div className="tp-blog__content">
                        <div className="tp-blog__meta mb-15">
                          <span>
                            <a href="#">
                              <i className="fal fa-clock"></i> {date}
                            </a>
                          </span>
                          <span>
                            <a href="#">
                              <i className="far solid fa-location"></i> {author}
                            </a>
                          </span>
                          <span>
                            <a href="#">
                              <i className="far fa-comments"></i> 2 Comments
                            </a>
                          </span>
                        </div>
                        <h3 className="tp-blog__title mb-15">
                          <Link href="/blog-details">
                            {titleTwo}
                          </Link>
                        </h3>
                        <p> {desc} </p>
                        <div className="tp-blog-btn mt-25">
                          <Link href="/blog-details">
                            <a className="tp-btn">Read More</a>                            
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}

               
              </div>
            </div>

           
          </div>
        </div>
      </div>

     
    
    </>
  );
};

export default BlogArea;
