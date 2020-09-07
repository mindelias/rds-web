import React from "react";
import NavWrapper from "./Sidebar.styles";
import { useState } from "react";
import logo from "../../assets/footer-logo.svg";
import "../../UtilitiesClass/animations/animate.css";

interface Iprops {
  bgColor?: string;
  img: string;
}

const Sidebar: React.FC<Iprops> = ({ bgColor, img }) => {
  const [active, setActive] = useState<boolean | null>(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleButton = () => {
    setIsOpen(!isOpen);
    setActive(false);
  };

  return (
    <NavWrapper bgColor={bgColor}>
      <header>
        <div className="navbar-closed">
          <div className="navbar-brand">
            <img src={img} alt="logo" />
          </div>
          <div
            className={isOpen ? "navigation_button open" : "navigation_button"}
            onClick={toggleButton}
          >
            <span className="navigation_icon">&nbsp;</span>
          </div>
        </div>
        {/* {isOp} */}
        <div className={isOpen ? "cont show" : "cont"}>
          <div
            className={isOpen ? "logo-container show" : "logo-container"}
          ></div>

          <nav className={isOpen ? "topnav show" : "topnav"}>
            {isOpen && (
              <ul className="nav-linkz">
                <li className={active ? "li-animate" : ""}>
                  <a href="/register" className="nav-linc">
                    Register{" "}
                  </a>
                </li>
                <li className={active ? "li-animate" : ""}>
                  <a href="/register" className="nav-linc">
                    Register{" "}
                  </a>
                </li>
                <li className={active ? "li-animate" : ""}>
                  <a href="/register" className="nav-linc">
                    Register{" "}
                  </a>
                </li>
                <li className={active ? "li-animate" : ""}>
                  <a href="/register" className="nav-linc">
                    Register{" "}
                  </a>
                </li>
              </ul>
            )}
          </nav>
        </div>
        {/* </Animated> */}
      </header>
    </NavWrapper>
  );
};

export default Sidebar;
