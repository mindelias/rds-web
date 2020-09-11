import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Sidebar from "../../components/Sidebar/Sidebar";
import tab1 from "../../assets/Tab1.svg";
import tab2 from "../../assets/Tab2.svg";
import tab3 from "../../assets/settings.svg";
import arrowBtn from "../../assets/Group 7005.svg";
import svg from "../../assets/svg.svg";
import p1 from "../../assets/alexandru-acea-GhwCef9VRr4-unsplash/alexandru.png";
import p2 from "../../assets/nesa-by-makers-7d4LREDSPyQ-unsplash/laptop-guy.png";
import dImg1 from "../../assets/Image 2/Image 2.png";
import Group7030 from "../../assets/Group 7030/Group 7030.png";
import dImg2 from "../../assets/Image 3/Image 3.png";
import amara from "../../assets/amara/amara.png";
import asgardia from "../../assets/asgardia/asgardia.png";
import circle from "../../assets/circle/circle.png";
import codeLab from "../../assets/code-lab/code-lab.png";
import foxHub from "../../assets/fox-hub/fox-hub.png";
import hexLab from "../../assets/hex-lab/hex-lab.png";
import ideaa from "../../assets/ideaa/ideaa.png";
import utosia from "../../assets/utosia/utosia.png";
import logo from "../../assets/footer-logo.svg";
import coloredLogo from "../../assets/colored-logo/colored-logo.png";
import "./home.scss";
import P from "../../components/AtomicComponent/Paragraph";
import Cards from "../../components/AtomicComponent/Card";
import Button1 from "../../components/AtomicComponent/Buttons/Button1";
import Footer from "../../components/footer/footer";
import Button2 from "../../components/AtomicComponent/Buttons/Button2";

function Home() {
  return (
    <>
      <div>
        <Sidebar img1={logo} img2={coloredLogo} />
        <div className="containerd">
          <div className="tabs">
            <img className="tab1" src={tab1} alt="tab1" />
            <img className="tab2" src={tab2} alt="tab2" />
            <img className="tab3" src={tab3} alt="tab3" />
          </div>
          <div className="text-center text-cont">
            <div className="text-inner-cont">
              <P
                color="mainWhite"
                name="Build It,"
                size="5rem"
                weight="bolder"
                className="mb-3"
              ></P>
              <P
                color="mainWhite"
                name="Launch It!"
                size="5rem"
                weight="bolder"
                className="mb-3"
              ></P>
              <P
                color="offWhite4"
                name="Our mission is to enhance business growth of our client with user"
                size="1.8rem"
                weight="normal"
                lineHeight={1.1}
              ></P>
              <P
                color="offWhite4"
                name="centric Design and Development to deliver cutting-edge solutions that"
                size="1.8rem"
                weight="normal"
                lineHeight={1.1}
              ></P>
              <P
                color="offWhite4"
                name="create value and reliable competitive advantage for our customers"
                size="1.8rem"
                weight="normal"
                lineHeight={1.1}
              ></P>
              <P
                color="offWhite4"
                name="around the globe."
                size="1.8rem"
                weight="normal"
                lineHeight={1.1}
              ></P>
              <div className="curve-bg">
                <img src={svg} alt="svg" />

                <div className="arrow-btn">
                  <a href="#endregion">
                    <img src={arrowBtn} alt="arr-btn" />
                  </a>
                  <P
                    color="offWhite4"
                    name="Find out more"
                    size="1.1rem"
                    weight="normal"
                    lineHeight={1.1}
                    className="mt-3"
                  ></P>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* beginning of section 1 */}
        <section id="endregion" className="section1">
          <div className="container">
            <div className="row justify-content-center">
              <div className="text-cont2 col-md-4">
                <P
                  color="darkGray1"
                  name="Who we are"
                  size="4rem"
                  weight="bolder"
                  lineHeight={1.1}
                  className="mb-3"
                ></P>
                <P
                  color="lightGray"
                  name="RDS Technology Ltd is a proprietary software "
                  size="1.8rem"
                  weight="normal"
                  lineHeight={1.1}
                  className="mb-2"
                ></P>
                <P
                  color="lightGray"
                  name=" services center based in Lagos, Nigeria. We have "
                  size="1.8rem"
                  weight="normal"
                  lineHeight={1.1}
                  className="mb-2"
                ></P>
                <P
                  color="lightGray"
                  name="proven records in diverse array of software development and
                software management. "
                  size="1.8rem"
                  weight="normal"
                  lineHeight={1.1}
                  className="mb-2"
                ></P>
                <P
                  color="lightOrange"
                  name="Learn more &rarr;"
                  size="1.5rem"
                  weight="normal"
                  lineHeight={1.1}
                  className="mb-2"
                ></P>
              </div>
              <div className="col-md-4 offset-md-2">
                <div className="img-cont">
                  <img className="p2" src={p2} alt="p2" />
                  <img className="p1" src={p1} alt="p1" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CARDS SECTIONS */}
        <section className="section2">
          <div className="text-center mb-6">
            {" "}
            <P
              color="darkGray1"
              name="Our Expertise"
              size="3.5rem"
              weight="bolder"
              lineHeight={1.1}
              className="mb-5"
            ></P>
          </div>
          <article className="inner-sect2 row justify-content-center  no-gutters align-items-center">
            <div className="col-md-3">
              <Cards bgColor="lightGreen">
                <div className="section2-text-cont">
                  <P
                    color="darkBlue3"
                    name="Modernize Legacy"
                    size="1.7rem"
                    weight="bolder"
                    lineHeight={1.1}
                    className=""
                  ></P>
                  <P
                    color="darkBlue3"
                    name="Systems"
                    size="1.7rem"
                    weight="bolder"
                    lineHeight={1.1}
                    className="mb-5"
                  ></P>
                  <P
                    color="darkBlue3"
                    name="IT Consultancy and Trainings"
                    size="1.1rem"
                    weight="normal"
                    lineHeight={1.1}
                    className="mb-3"
                  >
                    <span className="lightGreen mr-4">
                      <i className="fas fa-angle-right"></i>
                    </span>
                  </P>
                  <P
                    color="darkBlue3"
                    name="System Architecture"
                    size="1.1rem"
                    weight="normal"
                    lineHeight={1.1}
                    className="mb-3"
                  >
                    <span className="lightGreen mr-4">
                      <i className="fas fa-angle-right"></i>
                    </span>
                  </P>
                  <P
                    color="darkBlue3"
                    name="Project Management"
                    size="1.1rem"
                    weight="normal"
                    lineHeight={1.1}
                    className="mb-3"
                  >
                    <span className="lightGreen mr-4">
                      <i className="fas fa-angle-right"></i>
                    </span>
                  </P>
                </div>
              </Cards>
            </div>
            <div className="col-md-3">
              <Cards bgColor="lightOrange">
                <div className="section2-text-cont">
                  <P
                    color="darkBlue3"
                    name="Modernize Legacy"
                    size="1.7rem"
                    weight="bolder"
                    lineHeight={1.1}
                    className=""
                  ></P>
                  <P
                    color="darkBlue3"
                    name="Systems"
                    size="1.7rem"
                    weight="bolder"
                    lineHeight={1.1}
                    className="mb-5"
                  ></P>
                  <P
                    color="darkBlue3"
                    name="IT Consultancy and Trainings"
                    size="1.1rem"
                    weight="normal"
                    lineHeight={1.1}
                    className="mb-3"
                  >
                    <span className="lightOrange mr-4">
                      <i className="fas fa-angle-right"></i>
                    </span>
                  </P>
                  <P
                    color="darkBlue3"
                    name="System Architecture"
                    size="1.1rem"
                    weight="normal"
                    lineHeight={1.1}
                    className="mb-3"
                  >
                    <span className="lightOrange mr-4">
                      <i className="fas fa-angle-right"></i>
                    </span>
                  </P>
                  <P
                    color="darkBlue3"
                    name="Project Management"
                    size="1.1rem"
                    weight="normal"
                    lineHeight={1.1}
                    className="mb-3"
                  >
                    <span className="lightOrange mr-4">
                      <i className="fas fa-angle-right"></i>
                    </span>
                  </P>
                </div>
              </Cards>
            </div>
            <div className="col-md-3">
              <Cards bgColor="lightBlue">
                <div className="section2-text-cont">
                  <P
                    color="darkBlue3"
                    name="Modernize Legacy"
                    size="1.7rem"
                    weight="bolder"
                    lineHeight={1.1}
                    className=""
                  ></P>
                  <P
                    color="darkBlue3"
                    name="Systems"
                    size="1.7rem"
                    weight="bolder"
                    lineHeight={1.1}
                    className="mb-5"
                  ></P>
                  <P
                    color="darkBlue3"
                    name="IT Consultancy and Trainings"
                    size="1.1rem"
                    weight="normal"
                    lineHeight={1.1}
                    className="mb-3"
                  >
                    <span className="lightBlue mr-4">
                      <i className="fas fa-angle-right"></i>
                    </span>
                  </P>
                  <P
                    color="darkBlue3"
                    name="System Architecture"
                    size="1.1rem"
                    weight="normal"
                    lineHeight={1.1}
                    className="mb-3"
                  >
                    <span className="lightBlue mr-4">
                      <i className="fas fa-angle-right"></i>
                    </span>
                  </P>{" "}
                  <P
                    color="darkBlue3"
                    name="Project Management"
                    size="1.1rem"
                    weight="normal"
                    lineHeight={1.1}
                    className="mb-3"
                  >
                    <span className="lightBlue mr-4">
                      <i className="fas fa-angle-right"></i>
                    </span>
                  </P>
                </div>
              </Cards>
            </div>
          </article>
          <Link to="/page1">
            <P
              color="lightOrange"
              name="View all  Services &rarr;"
              size="1.5rem"
              weight="normal"
              lineHeight={1.1}
              className="my-5 text-center"
            ></P>
          </Link>
        </section>
        {/* curve bacground */}
        <div className="curve-bg2">
          <img src={svg} alt="svg" />
        </div>
        {/* begining of section 3 */}
        <section className="section3">
          <div className="text-center">
            {" "}
            <P
              color="darkGray1"
              name="Our Works"
              size="3.5rem"
              weight="bolder"
              lineHeight={1.1}
              className="mb-5"
            ></P>
          </div>
          <div className="row inner-sect3  justify-content-center align-items-center ">
            <div className="col-md-1">
              <Button1 className="btn1" icon="fas fa-angle-left"></Button1>
            </div>
            <div className="col-md-4">
              {" "}
              <P
                color="darkGray1"
                name="Lorem ipsum dolor sit amet, consetetur"
                size="3.4rem"
                weight="bolder"
                lineHeight={1.1}
                className="mb-5"
              ></P>{" "}
              <P
                color="lightGray"
                name="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet"
                size="1.5rem"
                weight="normal"
                lineHeight={1.1}
                className="mb-5"
              ></P>
              <P
                color="lightOrange"
                name="View Project &rarr;"
                size="1.5rem"
                weight="normal"
                lineHeight={1.1}
                className=""
              ></P>
            </div>

            <div className="desktop-cont col-md-5">
              <img className="img1" src={Group7030} alt="desktop1" />
            </div>

            <div className="col-md-1">
              <Button1 className="btn2" icon="fas fa-angle-right"></Button1>
            </div>
          </div>
        </section>
        {/* beginning of section 4 */}
        <section className="section4">
          <div className="text-center mb-6">
            <P
              color="offWhite15"
              name="A few brands we’ve"
              size="3rem"
              weight="bolder"
              className=""
            ></P>{" "}
            <P
              color="offWhite15"
              name="worked with."
              size="3.2rem"
              weight="bolder"
              className="mb-5"
            ></P>{" "}
          </div>
          <div className="logo-section text-center">
            <div className="row justify-content-center align-items-center mb-5">
              <div className="col-sm-2">
                <img src={foxHub} alt="foxhub" />
              </div>
              <div className="col-sm-2">
                <img src={utosia} alt="utosia" />
              </div>
              <div className="col-sm-2">
                {" "}
                <img src={hexLab} alt="hexLab" />
              </div>
              <div className="col-sm-2">
                <img src={codeLab} alt="codeLab" />
              </div>
              <div className="col-sm-2">
                <img src={circle} alt="circle" />
              </div>
            </div>
            <div className="row justify-content-center align-items-center">
              <div className="col-sm-2">
                <img src={ideaa} alt="ideaa" />
              </div>
              <div className="col-sm-2">
                <img src={amara} alt="amara" />
              </div>
              <div className="col-sm-2">
                <img src={codeLab} alt="codeLab" />
              </div>
              <div className="col-sm-2">
                <img src={asgardia} alt="asgardia" />
              </div>
            </div>
          </div>
        </section>
        {/* beginning of section 5 */}
        <section className="section5">
          <div className="text-center">
            <P
              color="darkGray1"
              name=" Got a project in mind, we’ve built some amazing,"
              size="3.5rem"
              weight="bolder"
              lineHeight={1}
              className=""
            ></P>
            <P
              color="darkGray1"
              name="products for great brands"
              size="3.3rem"
              weight="bolder"
              lineHeight={1}
              className=""
            ></P>
            <P
              color="lightGray"
              name="Get in touch with us today."
              size="1.3rem"
              weight="normal"
              lineHeight={1.1}
              className="mb-5"
            ></P>
            <Button2
              name="Get in touch"
              bgColor="lightOrange"
              color="mainWhite"
            >
              {" "}
              &rarr;
            </Button2>
          </div>
        </section>
        {/* curve bacground */}
        <div className="curve-bg2">
          <img src={svg} alt="svg" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
