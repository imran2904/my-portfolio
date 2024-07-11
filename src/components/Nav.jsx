import React, { useState } from "react";
import logo from "../assets/Designer-removebg-preview.png";
import underline from "../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import list from "../assets/list.svg";
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menu, Setmenu] = useState();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar  mx-5 d-flex align-items-center justify-content-between">
      <img src={logo} alt="Logo" className="logo flex-shrink-0" />
      <div className="menu-container">
        <button className="d-block d-md-none menu-toggle" onClick={toggleMenu}>
          <img className="list " src={list} alt="" />
        </button>
        <ul
          className={`menu-list d-md-flex cursor-pointer align-items-center list-unstyled gap-4 fs-4 ${
            isMenuOpen ? "d-block" : "d-none"
          } d-md-block`}
        >
          {["Home", "about", "work", "Contact"].map((item, index) => (
            <li key={index}>
              <AnchorLink
                className="anchor-link"
                offset={50}
                href={`#${item.toLowerCase().replace(" ", "")}`}
              >
                <p onClick={() => Setmenu(item)}>{item}</p>
              </AnchorLink>
              {menu === item ? <img src={underline} alt="underline" /> : null}
            </li>
          ))}
        </ul>
      </div>

      <div className="connect-btn cursor-pointer custom-gradient align-item-center justify-content-center rounded-4 me-md-5">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          <p className="container fs-6 p-2">Connect with me</p>
        </AnchorLink>
      </div>
    </nav>
  );
};

export default Nav;

// import React, { useState } from "react";
// import logo from "../assets/Designer-removebg-preview.png";
// import { GiHamburgerMenu } from "react-icons/gi";
// import underline from "../assets/nav_underline.svg";
// import AnchorLink from "react-anchor-link-smooth-scroll";
// const Nav = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [menu, Setmenu] = useState();
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className="nav my-3 mx-5 d-flex align-items-center justify-content-between">
//       <img src={logo} alt="Logo" className="logo flex-shrink-0" />
//       <div>
//         <button className="d-block d-md-none" onClick={toggleMenu}>
//           <GiHamburgerMenu />
//         </button>
//         <ul
//           className={`d-md-flex cursor-pointer align-items-center list-unstyled gap-4 fs-4 ${
//             isMenuOpen ? "d-block" : "d-none"
//           } d-md-block`}
//         >
//           <li>
//             {" "}
//             <AnchorLink className="anchor-link" href="#home">
//               <p onClick={() => Setmenu("Home")}>Home</p>
//             </AnchorLink>{" "}
//             {menu === "Home" ? <img src={underline} alt=""></img> : <></>}
//           </li>
//           <li>
//             {" "}
//             <AnchorLink className="anchor-link" offset={50} href="#about">
//               <p onClick={() => Setmenu("About")}>About me</p>
//             </AnchorLink>{" "}
//             {menu === "About" ? <img src={underline} alt=""></img> : <></>}
//           </li>
//           <li>
//             {" "}
//             <AnchorLink className="anchor-link" offset={50} href="#work">
//               <p onClick={() => Setmenu("Portfolio")}>Portfolio</p>
//             </AnchorLink>{" "}
//             {menu === "Portfolio" ? <img src={underline} alt=""></img> : <></>}
//           </li>
//           <li>
//             {" "}
//             <AnchorLink className="anchor-link" offset={50} href="#contact">
//               {" "}
//               <p onClick={() => Setmenu("Contact")}>Contact</p>
//             </AnchorLink>{" "}
//             {menu === "Contact" ? <img src={underline} alt=""></img> : <></>}
//           </li>
//         </ul>
//       </div>

//       <div className=" cursor-pointer custom-gradient align-item-center justify-content-center rounded-4 me-md-5">
//         <AnchorLink className="anchor-link" offset={50} href="#contact">
//           {" "}
//           <p className="container fs-5 p-2">Connect with me </p>
//         </AnchorLink>
//       </div>
//     </div>
//   );
// };

// export default Nav;
