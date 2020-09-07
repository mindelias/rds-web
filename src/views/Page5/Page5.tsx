import React from "react";
import "./Page5.scss";
import P from "../../components/AtomicComponent/Paragraph";
import bgImage from "../../assets/home page/home page.png";
import desktopImage from "../../assets/Image 2/Image 2.png";
import svg from "../../assets/svg.svg";
import Button1 from "../../components/AtomicComponent/Buttons/Button1";
import Image2 from "../../assets/Image 2/Image 2.png";
import Button2 from "../../components/AtomicComponent/Buttons/Button2";
import Footer from "../../components/footer/footer";

function Page5() {
  return (
    <>
      <div className="page5">
        <header className="section5-header" role="banner">
          <div className="text-center text-cont">
            <div className="text-inner-cont">
              <P
                color="mainWhite"
                name="OUR WORKS"
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
          </div>
        </header>
        <section className="page5-section1">
          <div className="desktopImage">
            <img src={desktopImage} alt="" />
          </div>
          <div className="row justify-content-center abt-project">
            <div className="col-2">
              <P
                color="darkGray1"
                name="ABOUT THE PROJECT"
                size="1.2rem"
                weight="bold"
                className="mb-3"
                lineHeight={1.5}
                letterSpacing="5px"
              ></P>
              <P
                color="darkGray1"
                name="Quiere la boca    "
                size="1.2rem"
                weight="normal"
                className="mb-3"
                lineHeight={1.5}
              ></P>
            </div>
            <div className="col-4">
              <P
                color="darkGray1"
                name="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to"
                size="1.3rem"
                weight="normal"
                className="mb-3"
                lineHeight={1.5}
              ></P>
            </div>
          </div>
        </section>
        {/* section2 */}
        <div className="page5-section2"></div>
        {/* section3 */}
        <div className="page5-section3">
          <div className="row  align-items-center justify-content-end rw1">
            <div className="col-md-3 offset-md-2">
              <P
                color="darkGray1"
                name="Our Solution"
                size="3rem"
                weight="bold"
                className="mb-4"
                lineHeight={1.5}
              ></P>
              <P
                color="lightGray"
                name="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue    "
                size="1.3rem"
                weight="normal"
                className="mb-3"
                lineHeight={1.5}
              ></P>
            </div>
            <div className="col-md-6 offset-md-1 bgImage1 justify-self-end rw1">
              <img src={bgImage} alt="" />
            </div>
          </div>
        </div>
        {/* section 4 */}
        <section className="page5-section4">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-1 offset-md-1">
              <Button1
                className=""
                icon="fas fa-angle-left display-4"
              ></Button1>
            </div>
            <div className="col-md-6 offset-md-1 bgImage2 justify-self-end rw1">
              <img src={bgImage} alt="" />
            </div>
            <div className="col-md-1 offset-md-1">
              <Button1
                className="btn2"
                icon="fas fa-angle-right display-4"
              ></Button1>
            </div>
          </div>
        </section>
        <section className="page5-section5">
          <div className="text-center">
            <P
              color="darkGray1"
              name="More Projects"
              size="3.3rem"
              weight="bolder"
              className="mb-6"
              lineHeight={1.5}
            ></P>
          </div>
          <div className="row align-items-center rw1">
            <div className="col-md-1 offset-md-1">
              <Button1 className="btn2" icon="fas fa-angle-right"></Button1>
            </div>
            <article className="col-md-10 rw1">
              <div className="row align-items-center justify-content-center">
                <div className="col-md-4">
                  <P
                    color="darkGray1"
                    name="Lorem ipsum dolor sit amet, consetetur"
                    size="3.2rem"
                    weight="bolder"
                    className="mb-5"
                    lineHeight={1.5}
                  ></P>
                  <P
                    color="lightGray"
                    name="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet"
                    size="1.3rem"
                    weight="bolder"
                    className="mb-5"
                    lineHeight={1.5}
                  ></P>
                  <P
                    color="lightOrange"
                    name="View Project &rarr;"
                    size="1.3rem"
                    weight="bolder"
                    className="mb-5"
                    lineHeight={1.5}
                  ></P>
                </div>
                <div className="col-md-6 bgImage3">
                  <img src={Image2} alt="" />
                </div>
              </div>
            </article>
          </div>
        </section>
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

export default Page5;
