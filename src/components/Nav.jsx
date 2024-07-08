import React, { useState } from "react";
import logo from "../assets/Designer-removebg-preview.png";
import { GiHamburgerMenu } from "react-icons/gi";
import underline from "../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menu, Setmenu] = useState();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="nav my-3 mx-5 d-flex align-items-center justify-content-between">
      <img src={logo} alt="Logo" className="logo flex-shrink-0" />
      <div>
        <button className="d-block d-md-none" onClick={toggleMenu}>
          <GiHamburgerMenu />
        </button>
        <ul
          className={`d-md-flex cursor-pointer align-items-center list-unstyled gap-4 fs-4 ${
            isMenuOpen ? "d-block" : "d-none"
          } d-md-block`}
        >
          <li>
            {" "}
            <AnchorLink className="anchor-link" href="#home">
              <p onClick={() => Setmenu("Home")}>Home</p>
            </AnchorLink>{" "}
            {menu === "Home" ? <img src={underline} alt=""></img> : <></>}
          </li>
          <li>
            {" "}
            <AnchorLink className="anchor-link" offset={50} href="#about">
              <p onClick={() => Setmenu("About")}>About me</p>
            </AnchorLink>{" "}
            {menu === "About" ? <img src={underline} alt=""></img> : <></>}
          </li>
          <li>
            {" "}
            <AnchorLink className="anchor-link" offset={50} href="#work">
              <p onClick={() => Setmenu("Portfolio")}>Portfolio</p>
            </AnchorLink>{" "}
            {menu === "Portfolio" ? <img src={underline} alt=""></img> : <></>}
          </li>
          <li>
            {" "}
            <AnchorLink className="anchor-link" offset={50} href="#contact">
              {" "}
              <p onClick={() => Setmenu("Contact")}>Contact</p>
            </AnchorLink>{" "}
            {menu === "Contact" ? <img src={underline} alt=""></img> : <></>}
          </li>
        </ul>
      </div>

      <div className=" cursor-pointer custom-gradient align-item-center justify-content-center rounded-4 me-md-5">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          {" "}
          <p className="container fs-5 p-2">Connect with me </p>
        </AnchorLink>
      </div>
    </div>
  );
};

export default Nav;

// import React, { useState } from "react";
// import logo from "../assets/logo.svg";

// const Nav = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className="flex items-center justify-between">
//       <img src={logo} alt="Logo" className="flex-shrink-0" />
//       <div>
//         <button className="block md:hidden" onClick={toggleMenu}>
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16M4 18h16"
//             ></path>
//           </svg>
//         </button>
//         <ul
//           className={`md:flex cursor-pointer items-center list-none gap-7 text-xl ${
//             isMenuOpen ? "block" : "hidden"
//           } md:block`}
//         >
//           <li>Home</li>
//           <li>About me</li>
//           <li>Services</li>
//           <li>Portfolio</li>
//           <li>Contact</li>
//         </ul>
//       </div>

//       <div className="cursor-pointer bg-gradient-to-r p-4 text-xl rounded-3xl transform transition-transform duration-500 hover:scale-90 md:mr-40">
//         Connect with me
//       </div>
//     </div>
//   );
// };

// export default Nav;
