import React from "react";
import profile from "../assets/profile.jpg";
import theme_pattern from "../assets/theme_pattern.svg";

const About = () => {
  return (
    <div
      id="about"
      className="display-3 container mt-5 ms-auto me-auto d-flex flex-column align-items-center justify-content-center gap-4"
    >
      <div className="display-2  about-title">
        <h1 className="">About me</h1>

        <img src={theme_pattern} alt="" />
      </div>

      <div className="d-flex flex-column flex-md-row gap-3">
        <div className="d-flex w-75 h-75">
          <img className="w-75 m-5" src={profile} alt="" />
        </div>
        <div className="d-flex flex-column gap-4">
          <div className="d-flex flex-column fs-4  fw-semibold">
            <p className="fs-5 md:ml-5 md:mr-5 ml-0 mr-0">
              Hello! I'm Imran Khan, a recent MCA graduate with a passion for
              front-end development. With a strong foundation in React.js,
              Node.js, Tailwind CSS, Bootstrap, and JavaScript.
            </p>
            <p className="fs-5 md:ml-5 md:mr-5 ml-0 mr-0">
              I'm enthusiastic about crafting engaging and responsive web
              experiences.
            </p>
            <p className=" text-center fs-5">
              Check out some of my projects below to see my work in action. Feel
              free to reach out if you’d like to collaborate or just want to say
              hi!
            </p>
          </div>
          <div className="d-flex flex-column gap-2">
            <div className="custom-div d-flex gap-3 align-items-center">
              <abbr style={{ textDecoration: "none" }} title="Intermediat">
                <p className="min-w-28 fs-6 fw-semibold">HTML & CSS</p>
              </abbr>
              <hr
                style={{ width: "80%" }}
                className=" custom-hr rounded-pill"
              />
            </div>
            <div className="custom-div d-flex gap-3 align-items-center">
              <abbr style={{ textDecoration: "none" }} title="Advanced">
                <p className="min-w-32 fs-6 fw-semibold">React JS</p>
              </abbr>
              <hr
                style={{ width: "90%" }}
                className=" custom-hr rounded-pill"
              />
            </div>
            <div className="custom-div d-flex gap-3 align-items-center">
              <abbr style={{ textDecoration: "none" }} title="Intermediat">
                <p className="min-w-28 fs-6 fw-semibold">Bootstrap</p>
              </abbr>
              <hr
                style={{ width: "60%" }}
                className=" custom-hr rounded-pill"
              />
            </div>
            <div className="custom-div d-flex gap-3 align-items-center">
              <abbr style={{ textDecoration: "none" }} title="Intermediat">
                <p className="min-w-28 fs-6 fw-semibold">Tailwind CSS</p>
              </abbr>
              <hr
                style={{ width: "50%" }}
                className=" custom-hr rounded-pill"
              />
            </div>
            <div className="custom-div d-flex gap-3 align-items-center">
              <abbr style={{ textDecoration: "none" }} title="Advanced">
                <p className="min-w-28 fs-6 fw-semibold">JavaScript</p>
              </abbr>
              <hr
                style={{ width: "85%" }}
                className=" custom-hr rounded-pill"
              />
            </div>
            <div className="custom-div d-flex gap-3 align-items-center">
              <abbr style={{ textDecoration: "none" }} title="Advanced">
                <p className="min-w-28 fs-6 fw-semibold">Typescript</p>
              </abbr>
              <hr
                style={{ width: "60%" }}
                className=" custom-hr rounded-pill"
              />
            </div>
            <div className="custom-div d-flex gap-3 align-items-center">
              <abbr style={{ textDecoration: "none" }} title="Advanced">
                <p className="min-w-28 fs-6 fw-semibold">Node.js</p>
              </abbr>
              <hr
                style={{ width: "70%" }}
                className=" custom-hr rounded-pill"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
