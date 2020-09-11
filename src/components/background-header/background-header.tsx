import React from "react";
import styled from "styled-components";
import { Center} from "../../common/mixin";

interface props {
  color?: any;
  bgColor1?: string;
  bgColor2?: string;
  className?: string;
  img?: any;
  starImg?: any;
}

const BackgroundHeader: React.FC<props> = ({
  color,
  className,
  bgColor1,
  bgColor2,
  img,
  starImg,
  children,
}) => {
  const HeaderCont = styled.div`
    color: var(--${color});
    /* background: var(--${bgColor1}) 0% 0% no-repeat padding-box; */
    background: transparent
      linear-gradient(180deg, ${bgColor1} 0%, ${bgColor2} 100%) 0% 0% no-repeat
      padding-box;
    /* background: transparent linear-gradient(180deg, #eb692a 0%, #e1421a 100%) 0%
      0% no-repeat padding-box; */
    opacity: 1;
    /* opacity: 0.5; */
    height: 100vh;
    width: 100%;
    position: relative;
    overflow: hidden;
    .bg {
      display: flex;
      height: 100vh;
      width: 100%;
    }

    .bg1 {
      /* background: var(--mainWhite); */
      flex-basis: 1 0 25%;
      height: 100%;
      width: 25%;
      .star-img {
        width:53%;
        z-index: 100;
        position: absolute;
        left: -4%;
        top: 5%;
        img {
          width: 55%;
        }
        @media (max-width: 992px) {
          width: 50%;
        }
      }
    }
    .bg2 {
      background: ${bgColor2};
      flex-basis: 1 0 50%;
      width: 50%;
      height: 100%;
    }
    .curve-bg {
      position: absolute;
      /* z-index: 100; */
      left: 50%;
      top: 30%;
      justify-content: end;
      display: flex;
      /* height:30vh; */

      transform: rotate(270deg);
      img {
        width: 130rem;
      }
      /* transform: matrix(-1, 0, 0, -1, 0, 0); */
    }
    .text-cont {
      ${Center}
    }
    .arrow-btn2 {
      position: absolute;
      left: 50%;
      bottom: 5%;
      transform: translate(-50%, 5%);
      @media (max-width: 992px) {
      }
    }
  `;
  return (
    <HeaderCont className={className}>
      <>
        <div className="bg">
          <div className="bg1">
            <div className="star-img">
              <img src={starImg} alt="" />
            </div>
          </div>
          <div className="bg2"></div>
        </div>
        <div className="curve-bg">
          <img src={img} alt="svg" />
        </div>
        <div className="">{children}</div>
      </>
    </HeaderCont>
  );
};

export default BackgroundHeader;
