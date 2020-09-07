import React from "react";
import BackgroundHeader from "../../components/background-header/background-header";
import P from "../../components/AtomicComponent/Paragraph";
import Button2 from "../../components/AtomicComponent/Buttons/Button2";
import austin from "../../assets/austin/austin-distel.png";
import arrowBtn from "../../assets/Group 7005.svg";
import svg from "../../assets/svg.svg";
import amara from "../../assets/amara/amara.png";
import asgardia from "../../assets/asgardia/asgardia.png";
import circle from "../../assets/circle/circle.png";
import codeLab from "../../assets/code-lab/code-lab.png";
import foxHub from "../../assets/fox-hub/fox-hub.png";
import hexLab from "../../assets/hex-lab/hex-lab.png";
import ideaa from "../../assets/ideaa/ideaa.png";
import utosia from "../../assets/utosia/utosia.png";
import orangeStar from "../../assets/blue curve.svg";
import "./page1.scss";
import Footer from "../../components/footer/footer";
import svg2 from "../../assets/svg (2).svg";

function Page1() {
  return (
    <>
      <div>
        <BackgroundHeader bgColor1="#eb692a" bgColor2="#e1421a" img={svg2} starImg={orangeStar}>
          <div className="text-cont3 text-center">
            <P
              color="mainWhite"
              name="SERVICES"
              size="1.6rem"
              weight="bold"
              className="mb-4"
              letterSpacing="9.6px"
            ></P>
            <P
              color="mainWhite"
              name="From concept, to build, to launch"
              size="5rem"
              weight="bolder"
              className="mb-4"
              lineHeight={1.5}
            ></P>
            <P
              color="mainWhite"
              name="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                clita kasd."
              size="1.5rem"
              weight="normal"
              className="mb-3"
              lineHeight={1.5}
            ></P>
          </div>
          <div className="arrow-btn2">
            <img src={arrowBtn} alt="arrow-btn" />
          </div>
        </BackgroundHeader>
        <section className="section1">
          <div className="text-center">
            <P
              color="darkGray1"
              name="Our Expertise"
              size="3.5rem"
              weight="bolder"
              className="mb-3"
            ></P>
            <P
              color="lightGray"
              name="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod"
              size="1.5rem"
              weight="normal"
              className="mb-2"
            ></P>
            <P
              color="lightGray"
              name="tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                    voluptua. At vero e"
              size="1.5rem"
              weight="normal"
              className="mb-2"
            ></P>
          </div>
        </section>
        <section className="section2-page1">
          <div className="inner-section2-page1 row justify-content-center">
            <div className="col-4 austin">
              <img src={austin} alt="austin" />
            </div>
            <div className="col-6 offset-md-1">
              <P
                color="darkOrange"
                name="We bring your amazing "
                size="3.8rem"
                weight="bolder"
                className="mb-3"
              ></P>
              <P
                color="darkOrange"
                name=" ideas to reality…"
                size="3.5rem"
                weight="bolder"
                className="mb-3"
              ></P>
              <P
                color="mainWhite"
                name="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                    erat"
                size="1.5rem"
                weight="normal"
                className="mb-3"
              ></P>
              {/* beggining of IT consultant and training */}
              <div className="row col-12">
                <div className="col-6 rw1">
                  <div className="row rw1 mb-4">
                    <span className="darkOrange col-1 rw1">
                      <i className="fas fa-angle-right"></i>
                    </span>

                    <P
                      color="mainWhite"
                      name="IT Consultancy and Trainings"
                      size="1.3rem"
                      weight="normal"
                      className="mb-3 col-10 rw1"
                    ></P>
                  </div>
                  <div className="row rw1 mb-4">
                    <span className="darkOrange col-1 rw1">
                      <i className="fas fa-angle-right"></i>
                    </span>

                    <P
                      color="mainWhite"
                      name="System Architecture"
                      size="1.3rem"
                      weight="normal"
                      className="mb-3 col-10 rw1"
                    ></P>
                  </div>
                  <div className="row rw1 mb-4">
                    <span className="darkOrange col-1 rw1">
                      <i className="fas fa-angle-right"></i>
                    </span>

                    <P
                      color="mainWhite"
                      name="Project Management"
                      size="1.3rem"
                      weight="normal"
                      className="mb-3 col-10 rw1"
                    ></P>
                  </div>
                </div>
                <div className="col-6 rw1">
                  <div className="row rw1 mb-4">
                    <span className="darkOrange col-1 rw1">
                      <i className="fas fa-angle-right"></i>
                    </span>

                    <P
                      color="mainWhite"
                      name="IT Consultancy and Trainings"
                      size="1.3rem"
                      weight="normal"
                      className="mb-3 col-10 rw1"
                    ></P>
                  </div>
                  <div className="row rw1 mb-4">
                    <span className="darkOrange col-1 rw1">
                      <i className="fas fa-angle-right"></i>
                    </span>

                    <P
                      color="mainWhite"
                      name="System Architecture"
                      size="1.3rem"
                      weight="normal"
                      className="mb-3 col-10 rw1"
                    ></P>
                  </div>
                  <div className="row rw1 mb-4 ">
                    <span className="darkOrange col-1 rw1">
                      <i className="fas fa-angle-right"></i>
                    </span>

                    <P
                      color="mainWhite"
                      name="Project Management"
                      size="1.3rem"
                      weight="normal"
                      className="mb-3 col-10 rw1"
                    ></P>
                  </div>
                </div>
              </div>
              {/*end of It training section */}
              <Button2
                name="Get in touch"
                bgColor="lightOrange"
                color="mainWhite"
                className="my-5"
              >
                {" "}
                &rarr;
              </Button2>
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
          <div className="logo-section">
            <div className="row justify-content-center mb-5">
              <div className="col-2">
                <img src={foxHub} alt="foxhub" />
              </div>
              <div className="col-2">
                <img src={utosia} alt="utosia" />
              </div>
              <div className="col-2">
                {" "}
                <img src={hexLab} alt="hexLab" />
              </div>
              <div className="col-2">
                <img src={codeLab} alt="codeLab" />
              </div>
              <div className="col-2">
                <img src={circle} alt="circle" />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-2">
                <img src={ideaa} alt="ideaa" />
              </div>
              <div className="col-2">
                <img src={amara} alt="amara" />
              </div>
              <div className="col-2">
                <img src={codeLab} alt="codeLab" />
              </div>
              <div className="col-2">
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
        <div className="curve-bg2">
          <img src={svg} alt="svg" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Page1;
