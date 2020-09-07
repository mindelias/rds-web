import React from "react";
import "./footer.scss";
import footerLogo from "../../assets/rds-logo.svg";
import P from "../AtomicComponent/Paragraph";
import twitter from "../../assets/twitter.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";

function Footer() {
  return (
    <>
      <footer className="footer-container ">
        <div className="footer row align-items-center">
          <div className="col-md-3">
            <img src={footerLogo} alt="footer-logo" />
          </div>
          <div className="col-md-3 justify-self-center">
            <P
              name="Block G4, Moore road, yaba, Lagos, Nigeria"
              color="darkGray1 "
              size="1.2rem"
              weight="normal"
              className="ml-1"
            ></P>
          </div>
          <div className="col-md-3 justify-self-center">
            <P
              name="08130143439"
              color="darkGray1 "
              size="1.2rem"
              weight="normal"
            ></P>

            <P
              name="rds.riby.ng"
              color="darkGray1 "
              size="1.2rem"
              weight="normal"
            ></P>
          </div>
          <div className="col-md-1 justify-self-center">
            <img src={twitter} alt="twitter" />
          </div>
          <div className="col-md-1 justify-self-center">
            <img src={instagram} alt="instagram" />
          </div>
          <div className="col-md-1">
            <img src={facebook} alt="facebook" />
          </div>
        </div>
        <div className="row copy-right">
          <div className="col-9">
            <P
              name="© 2020 RDS. All rights reserved."
              color="darkGray1 "
              size="1rem"
              weight="normal"
            ></P>
          </div>
          <div className="col-2 justify-self-end">
            <P
              name="Privacy Policy."
              color="lightBlue "
              size="1rem"
              weight="normal"
            ></P>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
