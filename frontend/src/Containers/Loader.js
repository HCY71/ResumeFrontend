import styled from "styled-components";
import {keyframes} from "styled-components";
import { useEffect } from "react";

import $ from 'jquery';

const moveBallRed = keyframes`
    0% {
    background-color: #F25022;
    transform: translate(0, 0);
  }
  25% {
    background-color: #7FBA00;
    transform: translate(calc(10px + 100%), 0);
  }
  50% {
    background-color: #FFB900;
    transform: translate(calc(10px + 100%), calc(10px + 100%));
  }
  75% {
    background-color: #00A4EF;
    transform: translate(0, calc(10px + 100%));
  }
  100% {
    background-color: #F25022;
    transform: translate(0, 0);
  }
`
const moveBallYellow = keyframes`
    0% {
    background-color: #FFB900;
    transform: translate(0, 0);
  }
  25% {
    background-color: #00A4EF;
    transform: translate(calc(-10px - 100%), 0);
  }
  50% {
    background-color: #F25022;
    transform: translate(calc(-10px - 100%), calc(-10px - 100%));
  }
  75% {
    background-color: #7FBA00;
    transform: translate(0, calc(-10px - 100%));
  }
  100% {
    background-color: #FFB900;
    transform: translate(0, 0);
  }
`
const moveBallBlue = keyframes`
    0% {
    background-color: #00A4EF;
    transform: translate(0, 0);
  }
  25% {
    background-color: #F25022;
    transform: translate(0, calc(-10px - 100%));
  }
  50% {
    background-color: #7FBA00;
    transform: translate(calc(10px + 100%), calc(-10px - 100%));
  }
  75% {
    background-color: #FFB900;
    transform: translate(calc(10px + 100%), 0);
  }
  100% {
    background-color: #00A4EF;
    transform: translate(0, 0);
  }
`
const moveBallGreen = keyframes`
    0% {
    background-color: #7FBA00;
    transform: translate(0, 0);
  }
  25% {
    background-color: #FFB900;
    transform: translate(0, calc(10px + 100%));
  }
  50% {
    background-color: #00A4EF;
    transform: translate(calc(-10px - 100%), calc(10px + 100%));
  }
  75% {
    background-color: #F25022;
    transform: translate(calc(-10px - 100%), 0);
  }
  100% {
    background-color: #7FBA00;
    transform: translate(0, 0);
  }
`

const StyledDiv = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #eee;
    z-index: 9;
    .loader{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background-color: transparent;
        z-index: 10;
        .ball{
            width: 3vh;
            height: 3vh;
            border-radius: 50%;
            margin: 5px;
            animation-delay: -1s;
            transition: 1s;
        }
        .row{
            display: flex;
            .ball1{
                background-color: #F25022;
                animation: ${moveBallRed} 4s infinite;
            }
            .ball2{
                background-color: #7FBA00;
                animation: ${moveBallGreen} 4s infinite;
            }
            .ball3{
                background-color: #FFB900;
                animation: ${moveBallBlue} 4s infinite;
            }
            .ball4{
                background-color: #00A4EF;
                animation: ${moveBallYellow} 4s infinite;
            }
        }

    }
    &.loaded{
        transition: 1s 0.5s;
        background-color: transparent;
        .loader{
            transition: 1s;
            transform-origin: center;
            transform: translate(-50%, -50%) scale(0.2);
            .ball{
                margin: -5px;
                opacity: 0;
            }
        }
    }
`

const Loader = () => {
    useEffect(()=>{
        let loadChecker = setInterval(() => {
          if(document.readyState === 'complete'){
            clearInterval(loadChecker);
            setTimeout(()=>{
                $('.loaderWrapper').addClass('loaded');
                setTimeout(function () {
                    $(".loaderWrapper").hide()
                }, 2000);
            }, 3000);
          }
        }, 10);
      },[])
    return (
        <StyledDiv className="loaderWrapper">
            <div className="loader">
                <div className="row row1">
                    <div className="ball ball1"></div>
                    <div className="ball ball2"></div>
                </div>
                <div className="row row2">
                    <div className="ball ball3"></div>
                    <div className="ball ball4"></div>
                </div>
            </div>
        </StyledDiv>
    );
}

export default Loader;