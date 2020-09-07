import React from "react";
import styled from "styled-components";

interface props {
  color: any;
  bgColor1: string;
  bgColor2: string;
  className?: string;
}

const Paragraph: React.FC<props> = ({
  color,
  className,
  bgColor1,
  children,
}) => {
  const HeaderCont = styled.div`
    color: var(--${color});
    /* background: var(--${bgColor1}) 0% 0% no-repeat padding-box; */
    background: var(--lightOrange) 0% 0% no-repeat padding-box;
    opacity: 0.5;
    height: 100vh;
    display: flex;

    .bg1 {
      background: var(--lightOrange);
      flex-basis: 1 0 30%;
    }
    .bg2 {
      background: var(--darkOrange);
      flex-basis: 1 0 70%;
    }
  `;
  return (
    <HeaderCont className={className}>
      <div className="">
        <div className="bg1"></div>
        <div className="bg2"></div>
      </div>
      {children}
      {name}{" "}
    </HeaderCont>
  );
};

export default Paragraph;
