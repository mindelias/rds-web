import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import P from "../../components/AtomicComponent/Paragraph";
import Button2 from "../../components/AtomicComponent/Buttons/Button2";
import svg from "../../assets/svg.svg";
import Footer from "../../components/footer/footer";
import coloredLogo from "../../assets/colored-logo/colored-logo.png";

import "./Page4.scss";

function Page4() {
  return (
    <>
      <Sidebar bgColor="white" img={coloredLogo}/>
      <div>
        <section className="section1-page4">
          <div className="row align-items-center justify-content-center ">
            <div className="col-md-4">
              <P
                color="darkGray1"
                name="GET IN TOUCH"
                size="1.5rem"
                weight="bolder"
                className="mb-5"
                letterSpacing="5px"
              ></P>
              <P
                color="darkGray1"
                name="Let’s Work Together"
                size="4.3rem"
                weight="bolder"
                className="mb-5"
              ></P>
              <P
                color="darkGray1"
                name=" Send us a message for more information about how we can help you:"
                size="1.2rem"
                weight="normal"
                className="mb-5"
              ></P>
              <P
                color="darkGray1"
                name=" 08130143439"
                size="1.5rem"
                weight="bold"
                className=""
                letterSpacing="5px"
              ></P>
              <P
                color="darkGray1"
                name=" rds.riby.ng"
                size="1.5rem"
                weight="bold"
                className="mb-5"
                letterSpacing="5px"
              ></P>
            </div>
            <div className="col-md-4 offset-md-1 form">
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <textarea
                    rows={3}
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    placeholder="tell us what we can do for you"
                  ></textarea>
                </div>
                <div className="text-right mt-8">
                  <Button2
                    type="submit"
                    className="btn btn-primary"
                    name="Send Message"
                    bgColor="lightOrange"
                    color="mainWhite"
                  >
                    &rarr;
                  </Button2>
                </div>
              </form>
            </div>
          </div>
        </section>
        <div className="curve-bg2">
          <img src={svg} alt="svg" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Page4;
