import React from "react";
import BackgroundHeader from "../../components/background-header/background-header";
import P from "../../components/AtomicComponent/Paragraph";
import "./Page2.scss";
import svg3 from "../../assets/svg (3).svg";
import arrowBtn from "../../assets/Group 7005.svg";
import campaignCreators from "../../assets/campaign-creators/campaign-creators.png";
import Group6999 from "../../assets/Group 6999.svg";
import Group6958 from "../../assets/Group 6958.svg";
import amara from "../../assets/amara/amara.png";
import asgardia from "../../assets/asgardia/asgardia.png";
import circle from "../../assets/circle/circle.png";
import codeLab from "../../assets/code-lab/code-lab.png";
import foxHub from "../../assets/fox-hub/fox-hub.png";
import hexLab from "../../assets/hex-lab/hex-lab.png";
import ideaa from "../../assets/ideaa/ideaa.png";
import utosia from "../../assets/utosia/utosia.png";
import svg from "../../assets/svg.svg";
import blueStar from "../../assets/blue star.svg";
import Button2 from "../../components/AtomicComponent/Buttons/Button2";
import Footer from "../../components/footer/footer";

function Page2() {
  return (
    <>
      <div>
        <BackgroundHeader bgColor1="#3A98CE" bgColor2="#49ABE3" img={svg3} starImg={blueStar}>
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
        <section className="section2-page1 bg-white">
          <div className="inner-section2-page1 row justify-content-center align-items-center">
            <div className="col-4 austin">
              <P
                color="darkGray1"
                name="Who we are: "
                size="3.8rem"
                weight="bolder"
                className="mb-5"
              ></P>
              <P
                color="lightGray"
                name=" RDS Technology Ltd is a proprietary software services center based in Lagos, Nigeria. We have proven records in diverse array of software development and software management. Our highly experienced staff of professionals have worked with arrays of platforms, languages, frameworks and tools to deliver robust solutions for different clients."
                size="1.4rem"
                weight="normal"
                lineHeight={1.5}
                className="mb-5"
              ></P>
              <P
                color="lightGray"
                name="We leverage diverse platforms, tools and environments to deliver robust solutions for different businesses by using dynamic design and development approach. Developing a cross platform solutions and reviving existing systems by using latest frameworks and libraries."
                size="1.4rem"
                weight="normal"
                lineHeight={1.5}
                className="mb-"
              ></P>
            </div>
            <div className="col-4 offset-md-1 campaignCreators">
              <img src={campaignCreators} alt="campaignCreators" />
            </div>
          </div>
        </section>
        <section className="section2">
          <div className="row justify-content-center align-items-center mb-8">
            <div className="col-md-6 Group6999">
              <img src={Group6999} alt="Group6999" />
            </div>
            <div className="col-md-3">
              <P
                color="darkGray1"
                name="Values"
                size="3.3rem"
                weight="bold"
                className="mb-3"
              ></P>
              <div className="row  mb-4">
                <span className="mainGreen col-md-1">
                  <i className="fas fa-angle-right"></i>
                </span>

                <P
                  color="darkGray1"
                  name="Innovations"
                  size="1.4rem"
                  weight="normal"
                  className="mb-3 col-md-10 rw1"
                ></P>
              </div>
              <div className="row  mb-4">
                <span className="mainGreen col-md-1">
                  <i className="fas fa-angle-right"></i>
                </span>

                <P
                  color="darkGray1"
                  name="Product Excellence"
                  size="1.4rem"
                  weight="normal"
                  className="mb-3 col-md-10 rw1"
                ></P>
              </div>
              <div className="row  mb-4">
                <span className="mainGreen col-md-1">
                  <i className="fas fa-angle-right"></i>
                </span>

                <P
                  color="darkGray1"
                  name="Excellence Customer Experience"
                  size="1.4rem"
                  weight="normal"
                  className="mb-3 col-md-10 rw1"
                ></P>
              </div>
              <div className="row  mb-4">
                <span className="mainGreen col-md-1">
                  <i className="fas fa-angle-right"></i>
                </span>

                <P
                  color="darkGray1"
                  name="Global Impact"
                  size="1.4rem"
                  weight="normal"
                  className="mb-3 col-md-10 rw1"
                ></P>
              </div>
              <div className="row  mb-4">
                <span className="mainGreen col-md-1">
                  <i className="fas fa-angle-right"></i>
                </span>

                <P
                  color="darkGray1"
                  name="Profitability"
                  size="1.4rem"
                  weight="normal"
                  className="mb-3 col-md-10 rw1"
                ></P>
              </div>
            </div>
          </div>
          {/* begining of row 2 in section 2 */}
          <div className="row justify-content-center align-items-center mb-8">
            <div className="col-md-4 offset-md-1">
              <P
                color="darkGray1"
                name="Mission"
                size="3.3rem"
                weight="bold"
                className="mb-3"
              ></P>
              <P
                color="darkGray1"
                name="Our mission is to enhance business growth of our client with user-centric Design and Development to deliver cutting-edge solutions that create value and reliable competitive advantage for our customers around the globe."
                size="1.4rem"
                weight="normal"
                lineHeight={1.5}
                className="mb-3"
              ></P>
            </div>
            <div className="col-md-4 offset-md-1 Group6958">
              <img src={Group6958} alt="Group6958" />
            </div>
          </div>
        </section>
        {/* beginning of section 3 */}
        <section className="section3-page2">
          <div className="text-center mb-12">
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
          <div className="logo-section mt-5">
            <div className="row justify-content-center mb-5">
              <div className="col-2 logo-img">
                <img src={foxHub} alt="foxhub" />
              </div>
              <div className="col-2  logo-img">
                <img src={utosia} alt="utosia" />
              </div>
              <div className="col-2 logo-img ">
                {" "}
                <img src={hexLab} alt="hexLab" />
              </div>
              <div className="col-2 logo-img">
                <img src={codeLab} alt="codeLab logo-img" />
              </div>
              <div className="col-2 logo-img">
                <img src={circle} alt="circle" />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-2 logo-img">
                <img src={ideaa} alt="ideaa" />
              </div>
              <div className="col-2 logo-img">
                <img src={amara} alt="amara" />
              </div>
              <div className="col-2 logo-img">
                <img src={codeLab} alt="codeLab" />
              </div>
              <div className="col-2 logo-img">
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
      <Footer/>
    </>
  );
}

export default Page2;
