import React from "react";
import theme from "../../assets/theme_pattern.svg";
import email from "../../assets/mail_icon.svg";
import call from "../../assets/call_icon.svg";
import location from "../../assets/location_icon.svg";
import "./Contact.css";
const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(event.target.value);

    const formData = new FormData(event.target);

    formData.append("access_key", "efcffadb-d96c-4760-8829-59ca858ee209");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    event.target.reset();
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert("email sent sucessfully !");
      console.log("Success", res);
    }
  };
  return (
    <div id="contact" className="container my-container mb-5">
      <div className="contact-title text-center">
        <h1> Get in Touch</h1>
        <img src={theme} alt="" />
      </div>

      <div className="container-fluid Contact">
        <div className="row">
          <div className="col-md-6">
            <div className="g-5">
              <h1 className="h-class">Let's talk</h1>
              <p className="p-class">
                I'm currently available to take new projects, so feel free to
                send me a message about anything that you want me to work on.
                You can contact me anytime.
              </p>
              <h3>
                <p>
                  <img src={email} alt="" /> imarankhan9768@gmail.com
                </p>
              </h3>
              <h3>
                <p>
                  <img src={call} alt="" /> 8003545085
                </p>
              </h3>
              <h3>
                <p>
                  <img src={location} alt="" /> Rajasthan, India
                </p>
              </h3>
            </div>
          </div>
          <div className="col-md-5 ">
            <form onSubmit={onSubmit} className=" form-signin">
              <h3 className="h5 mb-4 mt-3 fw-normal">Your Name</h3>
              <div className="form-floating">
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                />
              </div>
              <h3 className="h5 mb-4 mt-3 fw-normal">Your Email</h3>
              <div className="form-floating">
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <p className="h5 mb-4 mt-3 fw-normal">Write your message here</p>
              <div className="form-floating custom-msg">
                <textarea
                  name="message"
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>

              <button
                className="submit btn  mt-3 "
                type="submit"
              >
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
