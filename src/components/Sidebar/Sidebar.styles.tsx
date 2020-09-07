import React, { Children, ReactChildren } from "react";
import styled from "styled-components";
import "../../UtilitiesClass/animations/animate.css";

interface Iprops {
  bgColor?: string;
  children: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
}

const NavWrapper: React.FC<Iprops> = ({ bgColor, children }) => {
  const NavStyle = styled.div`
    header {
      width: 100%;
      left: 0rem;
      top: 0 !important;
      position: relative;
      transition: all 5s ease;
      overflow-x: hidden;
    }
    .navbar-closed {
      z-index: 2000;
      background: ${bgColor ? bgColor : "transparent"};
      position: fixed;
      width: 100%;
      z-index: 3000;
      display: flex;
      justify-items: space-between;
      align-items: center;
      transition: all 5s ease;
      height: 8rem;
      box-shadow: 4px 0px 2px #00000014;
      padding: 3rem 20rem;
      .navbar-brand {
        flex: 1 0 70%;
        img {
          width: 4.8rem;
        }
      }
    }
    .navigation_button {
      background: white;
      justify-self: end;
      border-radius: 50%;
      height: 4rem;
      width: 4rem;
      box-shadow: 2px 2px 4px grey;
      left: 70%;
      margin: 2rem;
      z-index: 3000;
      cursor: pointer;
      transition: all 5s ease-in-out;
    }
    .navigation_button.open {
      transform: translateX(10rem);
      border: 1px solid var(--darkGray1);
      opacity: 0.44;
      transition: all 5s ease;
    }
    .cont {
      width: 100%;
      height: 100vh;
      /* top: 0; */
      /* right: -100%; */
      position: fixed;
      z-index: 2000;
      transition: all 25s ease;
      /* animation: slideInLeft 5s ease; */
    }
    .cont.show {
      width: 100%;
      height: 100vh;
      position: fixed;
      z-index: 1800;
      right: 0 !important;
      /* transition: all 5s ease; */
      animation: slideInRight 2s ease;
    }
    .logo-container {
      width: 100%;
      /* background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)); */
      height: 100vh;
      right: -100%;
      z-index: 1900;
      transition: all 1s ease-in-out;
    }
    .logo-container.show {
      width: 100%;
      right: 0;
      opacity: 0.44;
      background-color: var(--darkGray1);
      transition: all 1s ease-in;
      /* height: 100vh;
      z-index: 900; */
    }
    .topnav {
      padding: 1.5rem 2rem;
      background: white;
      height: 100vh;
      width: 25%;
      /* right: 3%; */
      z-index: 2000;
      display: flex;
      justify-content: start;
      /* align-items: center; */
      position: absolute;
      /* transform: translateX(-2rem); */
      /* animation: moveInLeft 2s ease-in-out; */
      transition: all 5s ease-in-out;
    }
    .topnav.show {
      height: 100vh;
      right: 0%;
      top: 0;
      /* transform: translateX(1rem); */
      /* animation: moveInLeft 5s ease-in-out; */

      transition: all 2s ease;
    }

    @keyframes moveInLeft {
      0% {
        -webkit-transform: translateX(-10rem);
        transform: translateX(-10rem);
        visibility: visible;
      }

      100% {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }
    @keyframes slideInRight {
      0% {
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
      }

      100% {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }

    .ml {
      margin-right: 10px;
    }
    .nav-linkz {
      /* justify-content: space-between; */
      display: flex;
      /* padding:5rem; */
      width: 45%;
      list-style: none;
      /* align-items: center; */
      flex-direction: column;
      justify-content: center;
      font-weight: 600;
      font-size: 20px;
      li {
        margin: 4rem 0rem;
        a {
          color: var(--darkGray1);
          transition: all 0.9s ease;
          position: relative;
          &:hover {
            color: var(--lightOrange);
            width: 100%;
            transition: all 0.2s ease;
            perspective: 3000;
            backface-visibility: hidden;
            &:after {
              transform: translateX(50%);
              opacity: 1;
            }
          }
          &:after {
            content: " ";
            position: absolute;
            opacity: 0;
            height: 3.3px;
            bottom: 0;
            left: 0;
            /* transform: translateX(-30% -3px); */
            width: 100%;
            background: var(--darkGray1);
            transition: transform 250ms;
          }
        }
      }
    }
    /* .nav-linkz.open {
      display: block;
    } */

    .nav-linc {
      text-decoration: none;
      font-size: 18px;
      color: #0930f4;
      &:hover {
        color: darkblue;
      }
    }

    .navigation_button .navigation_icon {
      position: relative;
      /* margin-top: 10px; */
      height: 3px;
      width: 20px;
      background-color: black;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      margin: 0px;
      border-radius: 3px;
      display: inline-block;
      transition: all 0.2s ease-in-out;
    }

    .navigation_icon::before,
    .navigation_icon::after {
      content: "";
      width: 20px;
      height: 3px;
      border-radius: 3px;
      background-color: black;
      display: inline-block;
      position: absolute;
      left: 0;
      box-shadow: 0 2px 5px rgba(255, 170, 80, 0.2);
      transition: all 0.2s ease-in-out;
    }
    .navigation_icon::before {
      transform: translateY(-7px);
    }
    .navigation_icon::after {
      transform: translateY(7px);
    }

    .navigation_button.open .navigation_icon {
      background: transparent;
    }
    .navigation_button.open .navigation_icon::before {
      transform: rotate(45deg);
      background: black;
      top: 0;
    }
    .navigation_button.open .navigation_icon::after {
      transform: rotate(-45deg);
      background: black;
      top: 0;
    }

    @media screen and (max-width: 768px) {
      /* .topnav {
      transition: all 0.5s ease-in;
      height: 35vh;
      padding: 0;
      margin-top: 0rem;
      margin-right: -8rem;
      justify-content: center;
      align-items: center;
      flex: 1 0 18%;
      display: none;
    } */
      .nav-linkz {
        flex-direction: column;
        /* justify-content:center; */
        /* align-items: center; */
      }
      .topnav.responsive {
        display: flex;
      }
      .topnav.responsive li {
        margin: 1rem 0px;
        &:hover {
          background-color: #ffbf00;
          padding: 0.3rem 0.5rem;
          border-radius: 3px;
        }
        /* opacity: 0; */
      }
    }
  `;
  return <NavStyle>{children}</NavStyle>;
};
export default NavWrapper;
