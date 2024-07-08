import React from "react";
import profile_img from "../assets/profile.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero = () => {
  return (
    <div
      id="home"
      className="d-flex  mb-5 flex-column justify-content-center align-items-center gap-3"
    >
      <img className="img-cover mt-4 img-fluid" src={profile_img} alt="" />

      <h5 className="text-center w-75 display-3 fw-semibold">
        <span className=" custom-gradient text-transparent bg-clip-text">
          I, am Imran Khan{" "}
        </span>
        , frontend developer based in India.
      </h5>
      <p className="w-50 text-center fs-4">
        I am a frontend developer from Rajasthan, India with great skills.
      </p>
      <div className="d-flex align-items-center gap-3 fs-4 fw-semibold mb-4">
        <div className="overflow-hidden fs-6 cursor-pointer custom-gradient py-2 px-3 rounded-pill border border-transparent duration-300 hover-border">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            {" "}
            Connect with me{" "}
          </AnchorLink>
        </div>
        <div className="cursor-pointer fs-6 py-2 px-3 rounded-pill border custom-hover-border">
          <a
            className="nav-link"
            target="_blank"
            href="https://drive.google.com/file/d/1xW3RPIdiaJ6TqqLOhp9XEzWoHql-nJi1/view?usp=drive_link"
          >
            My resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// import React from "react";
// import profile_img from "../assets/profile_img.svg";
// const Hero = () => {
//   return (
//     <div className="flex ml-24 flex-col justify-center items-center gap-9">
//       <img className="mt-16 " src={profile_img} alt="" />

//       <h1 className=" text-center w-3/4 text-6xl font-semibold">
//         <span className="bg-gradient-to-r  text-transparent bg-clip-text from-orange-500 to-yellow-500">
//           I,am Imran Khan{" "}
//         </span>
//         , frontend developer based in India.
//       </h1>
//       <p className="w-1/2 text-center text-2xl">
//         I am a frontend developer from rajsthan , india with graet skills
//       </p>
//       <div className="flex items-center gap-6 text-2xl font-semibold mb-10">
//         <div className="overflow-hidden cursor-pointer py-4 px-5 bg-gradient-to-r rounded-full  duration-300 hover:border-white border-2 border-transparent">
//           <span className="  text-white">Connect with me</span>
//         </div>
//         <div className="hover:border-pink-800 cursor-pointer py-4 px-5 rounded-full border-2">
//           {" "}
//           My resume
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
