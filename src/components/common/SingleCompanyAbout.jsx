  import React from "react";
  const SingleCompanyAbout = ({img,title,desc}) => {
    return (
      <>
        <div className="col-xl-4 col-lg-4">
          <div className="sdf__item mb-30">
            <div className="sdf__icon">
              <img className="img-icon" src={img} alt="" />
            </div>
            <div className="sdf__text">
              <h6>{title}</h6>
              <p>{desc}</p>
            </div>
          </div>
        </div>
      </>
    );
  };

  export default SingleCompanyAbout;
