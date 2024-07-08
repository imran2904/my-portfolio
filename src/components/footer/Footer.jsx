import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
const Footer = () => {
  return (
    <footer class="container">
      <div class="row d-flex my-footer justify-content-end">
        <div class="  col-md-5 offset-md-1 mb-3">
          <form className="">
            <div class="d-flex flex-column   flex-sm-row w-75 gap-2">
              <label for="newsletter1" class="visually-hidden">
                Email address
              </label>
              <input
                id="newsletter1"
                type="text"
                class="form-control"
                placeholder="Email address"
              />
              <button class="btn btn-primary" type="button">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="d-flex fs-2 gap-3">
        <a
          target="_blank"
          className="nav-link"
          href="https://github.com/imran2904"
        >
          <FaGithub />
        </a>
        <a
          target="_blank"
          className="nav-link"
          href="https://www.linkedin.com/in/imran-khan-2a0711270/"
        >
          <CiLinkedin />
        </a>
        <a
          target="_blank"
          className="nav-link"
          href="https://www.instagram.com/im__imran__2908_/"
        >
          <FaInstagram />
        </a>
      </div>
      <div class="d-flex  justify-content-between py-3 my-4 border-top">
        <p>© 2024 Company, Inc. All rights reserved.</p>
        <div class="col-3 col-md-2 mb-3">
          <ul class="nav d-flex">
            <li class=" mb-2">
              <a href="#" class="nav-link p-0 ">
                Terms of services
              </a>
            </li>
            <li class=" mb-2">
              <a href="#" class="nav-link p-0 ">
                Privecy Policy
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 ">
                Connect with me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
