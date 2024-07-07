import React from "react";
import profile from "../assets/profile.jpg";
import theme_pattern from "../assets/theme_pattern.svg";

const About = () => {
  return (
    <div
      id="about"
      className="display-3 container mt-5 ms-auto me-auto d-flex flex-column align-items-center justify-content-center gap-4"
    >
      <div className="display-3 about-title">
        <h1 className="">About me</h1>

        <img src={theme_pattern} alt="" />
      </div>

      <div className="d-flex flex-column flex-md-row gap-4">
        <div className="d-flex w-75 h-75">
          <img className="w-75 m-5" src={profile} alt="" />
        </div>
        <div className="d-flex flex-column gap-4">
          <div className="d-flex flex-column fs-4 gap-2 fw-semibold">
            <p className="md:ml-5 md:mr-5 ml-0 mr-0">
              Hello! I'm Imran Khan, a recent MCA graduate with a passion for
              front-end development. With a strong foundation in React.js,
              Node.js, Tailwind CSS, Bootstrap, and JavaScript.
            </p>
            <p className="md:ml-5 md:mr-5 ml-0 mr-0">
              I'm enthusiastic about crafting engaging and responsive web
              experiences.
            </p>
          </div>
          <div className="d-flex flex-column gap-2">
            <div className="custom-div d-flex gap-3 align-items-center">
              <p className="min-w-28 fs-5 fw-semibold">HTML & CSS</p>
              <hr
                style={{ width: "80%" }}
                className=" custom-hr rounded-pill"
              />
            </div>
            <div className="custom-div d-flex gap-3 align-items-center">
              <p className="min-w-28 fs-5 fw-semibold">React JS</p>
              <hr
                style={{ width: "90%" }}
                className=" custom-hr rounded-pill"
              />
            </div>
            <div className="custom-div d-flex gap-3 align-items-center">
              <p className="min-w-28 fs-5 fw-semibold">Bootstrap</p>
              <hr
                style={{ width: "60%" }}
                className=" custom-hr rounded-pill"
              />
            </div>
            <div className="custom-div d-flex gap-3 align-items-center">
              <p className="min-w-28 fs-5 fw-semibold">Tailwind CSS</p>
              <hr
                style={{ width: "50%" }}
                className=" custom-hr rounded-pill"
              />
            </div>
            <div className="custom-div d-flex gap-3 align-items-center">
              <p className="min-w-28 fs-5 fw-semibold">JavaScript</p>
              <hr
                style={{ width: "85%" }}
                className=" custom-hr rounded-pill"
              />
            </div>
            <div className="custom-div d-flex gap-3 align-items-center">
              <p className="min-w-28 fs-5 fw-semibold">Node.js</p>
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

// import React from "react";
// import profile from "../assets/about_profile.svg";
// import theme_pattern from "../assets/theme_pattern.svg";
// const About = () => {
//   return (
//     <div className="my-20 ml-80 mr-72  md:ml-44 flex flex-col items-center justify-center gap-16 ">
//       <div className="  relative">
//         <h1 className="py-0 px-8 text-6xl font-semibold">About me </h1>
//         <img
//           className="absolute bottom-0 right-0 -z-10 "
//           src={theme_pattern}
//           alt=""
//         />
//       </div>
//       <div className="flex flex-col md:flex-row gap-20">
//         <div className=" flex  min-w-48 w-full   h-full ">
//           <img className="" src={profile} alt="" />
//         </div>
//         <div className="flex flex-col gap-20 ">
//           <div className="flex flex-col text-2xl gap-5 font-semibold">
//             <p>
//               Hello! I'm Imran Khan, a recent MCA graduate with a passion for
//               front-end development. With a strong foundation in React.js,
//               Node.js, Tailwind CSS, Bootstrap, and JavaScript.
//             </p>
//             <p>
//               {" "}
//               I'm enthusiastic about crafting engaging and responsive web
//               experiences.
//             </p>
//           </div>
//           <div className="flex flex-col gap-5 ">
//             <div className="transform transition-transform duration-300 hover:scale-125 flex gap-12 items-center ">
//               <p className="min-w-28 text-xl font-semibold">HTML & CSS</p>
//               <hr className="w-96  outline-none border-none h-2 rounded-full  bg-gradient-to-r" />
//             </div>
//             <div className="transform transition-transform duration-300 hover:scale-125 flex gap-12 items-center">
//               <p className="min-w-28 text-xl font-semibold">React JS</p>
//               <hr className="w-11/12 outline-none border-none h-2 rounded-full  bg-gradient-to-r" />
//             </div>
//             <div className="flex gap-12 items-center transform transition-transform duration-300 hover:scale-125">
//               <p className="min-w-28 text-xl font-semibold">Bootstrap</p>
//               <hr className="w-80 outline-none border-none h-2 rounded-full  bg-gradient-to-r" />
//             </div>
//             <div className="flex gap-12 items-center transform transition-transform duration-300 hover:scale-125">
//               <p className="min-w-28 text-xl font-semibold">Tailwind CSS</p>
//               <hr className="w-1/2 outline-none border-none h-2 rounded-full  bg-gradient-to-r" />
//             </div>
//             <div className="flex gap-12 items-centertransform transition-transform duration-300 hover:scale-125">
//               <p className="min-w-28 text-xl font-semibold">Java Script</p>
//               <hr className="w-11/12 outline-none border-none h-2 rounded-full  bg-gradient-to-r" />
//             </div>
//             <div className="flex gap-12 items-center transform transition-transform duration-300 hover:scale-125">
//               <p className="min-w-28 text-xl font-semibold">Node js</p>
//               <hr className="w-72 outline-none border-none h-2 rounded-full  bg-gradient-to-r" />
//             </div>
//           </div>
//           <div className="flex flex-row w-full justify-between mb-20">
//             <div className="flex flex-col items-center gap-3transform transition-transform duration-300 hover:scale-125">
//               <h1 className="text-6xl font-bold  bg-gradient-to-r bg-clip-text">
//                 10+
//               </h1>
//               <p className="text-2xl font-bold">PROJECTS COMPLETED</p>
//             </div>
//             <hr className="" />
//             <div className="flex flex-col items-center gap-3transform transition-transform duration-300 hover:scale-125">
//               <h1 className="text-6xl font-bold  bg-gradient-to-r bg-clip-text">
//                 15+
//               </h1>
//               <p className="text-2xl font-bold">HAPPY CLIENTS</p>
//             </div>
//             <hr />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
