import React from "react";
import "./Mywork.css";
import theme from "../../assets/theme_pattern.svg";
import mywork from "../../assets/mywork_data";
import arrow from "../../assets/arrow_icon.svg";
const Mywork = () => {
  return (
    <div id="work" className="container mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme} alt="" />
      </div>
      <div className="my-work-container row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5 ">
        {mywork.map((data, index) => {
          return (
            <div class="container mt-3" style={{ width: "16rem" }}>
              <img
                key={index}
                src={data.w_img}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title mt-2">{data.w_name}</h5>

                <a href={data.w_link} class="btn mt-3 btn-primary">
                  Live link
                </a>
                <hr />
              </div>
            </div>

            // <img className="col" key={index} src={data.w_img} alt=""></img>
          );
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow} alt="" />
      </div>
    </div>
  );
};

export default Mywork;
