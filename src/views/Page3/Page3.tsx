import React from "react";
import BackgroundHeader from "../../components/background-header/background-header";
import P from "../../components/AtomicComponent/Paragraph";
import "./Page3.scss";
import arrowBtn from "../../assets/Group 7005.svg";
import svg4 from "../../assets/svg (4).svg";
import greenStar from "../../assets/green star.svg";
import Group7030 from "../../assets/Group 7030/Group 7030.png";
import Group7049 from "../../assets/Group 7049/Group 7049.png";
import Button2 from "../../components/AtomicComponent/Buttons/Button2";
import amara from "../../assets/amara/amara.png";
import asgardia from "../../assets/asgardia/asgardia.png";
import circle from "../../assets/circle/circle.png";
import codeLab from "../../assets/code-lab/code-lab.png";
import foxHub from "../../assets/fox-hub/fox-hub.png";
import hexLab from "../../assets/hex-lab/hex-lab.png";
import ideaa from "../../assets/ideaa/ideaa.png";
import utosia from "../../assets/utosia/utosia.png";
import svg from "../../assets/svg.svg";
import Footer from "../../components/footer/footer";

function Page3() {
  return (
    <>
      <div>
        <BackgroundHeader
          bgColor1="#3D9B3D"
          bgColor2="#4DB94D"
          img={svg4}
          starImg={greenStar}
        >
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
              name="Voyez ce jeu exquis wallon, de"
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
            <img src={arrowBtn} alt="arrow-btn2" />
          </div>
        </BackgroundHeader>
        {/* beginning of section1 */}
        <section className="section1-page3">
          <article className="section1-page3-article1 row align-items-center">
            <div className="col-md-6 offset-md-1 laptop-screen ">
              <img src={Group7030} alt="" />
            </div>
            <div className="col-md-4">
              <P
                color="darkGray1"
                name="ABOUT US"
                size="1rem"
                weight="bold"
                className="mb-3"
                lineHeight={0.9}
                letterSpacing="3px"
              ></P>
              <P
                color="darkGray1"
                name="The quick"
                size="3.5rem"
                weight="bolder"
                className="mb-3"
                lineHeight={1.5}
              ></P>
              <P
                color="lightGray"
                name="Quiere la boca exhausta vid, kiwi, piña y fugaz jamón. Fabio me exige, sin tapujos, que añada cerveza al whisky. Jovencillo emponzoñado de"
                size="1.3rem"
                weight="normal"
                className="mb-3"
                lineHeight={1.5}
              ></P>
              <P
                color="lightOrange"
                name="Learn more"
                size="1.3rem"
                weight="bold"
                lineHeight={1.1}
                className="mb-2"
              >
                <span>
                  <i className="fas fa-arrow-right"></i>
                </span>
              </P>
            </div>
          </article>

          <article className="section1-page3-article2 row align-items-center">
            <div className="col-md-4 offset-md-1">
              <P
                color="darkGray1"
                name="ABOUT US"
                size="1rem"
                weight="bold"
                className="mb-3"
                lineHeight={0.9}
                letterSpacing="3px"
              ></P>
              <P
                color="darkGray1"
                name="The quick"
                size="3.5rem"
                weight="bolder"
                className="mb-3"
                lineHeight={1.5}
              ></P>
              <P
                color="lightGray"
                name="Quiere la boca exhausta vid, kiwi, piña y fugaz jamón. Fabio me exige, sin tapujos, que añada cerveza al whisky. Jovencillo emponzoñado de"
                size="1.3rem"
                weight="normal"
                className="mb-3"
                lineHeight={1.5}
              ></P>
              <P
                color="lightOrange"
                name="Learn more"
                size="1.3rem"
                weight="bold"
                lineHeight={1.1}
                className="mb-2"
              >
                <span>
                  <i className="fas fa-arrow-right"></i>
                </span>
              </P>
            </div>
            <div className="col-md-5 offset-md-1 stacked-phones">
              <img src={Group7049} alt="stacked-phones" />
            </div>
          </article>
          <article className="section1-page3-article3 row align-items-center">
            <div className="col-md-6 offset-md-1 laptop-screen ">
              <img src={Group7030} alt=" " />
            </div>
            <div className="col-md-4">
              <P
                color="darkGray1"
                name="ABOUT US"
                size="1rem"
                weight="bold"
                className="mb-3"
                lineHeight={0.9}
                letterSpacing="3px"
              ></P>
              <P
                color="darkGray1"
                name="The quick"
                size="3.5rem"
                weight="bolder"
                className="mb-3"
                lineHeight={1.5}
              ></P>
              <P
                color="lightGray"
                name="Quiere la boca exhausta vid, kiwi, piña y fugaz jamón. Fabio me exige, sin tapujos, que añada cerveza al whisky. Jovencillo emponzoñado de"
                size="1.3rem"
                weight="normal"
                className="mb-3"
                lineHeight={1.5}
              ></P>
              <P
                color="lightOrange"
                name="Learn more &rarr;"
                size="1.3rem"
                weight="bold"
                lineHeight={1.1}
                className="mb-2"
              >
                <span>
                  <i className="fas fa-arrow-right"></i>
                </span>
              </P>
            </div>
          </article>
        </section>
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
            <div className="row justify-content-center mb-5">
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
            <div className="row justify-content-center">
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
        <div className="curve-bg2">
          <img src={svg} alt="svg" />
        </div>
          </div>
          <Footer/>
    </>
  );
}

export default Page3;
