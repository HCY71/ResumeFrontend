import styled from 'styled-components';
import {keyframes} from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons'

const colorChange = keyframes`
0% {
    color: #F25022;
    border-bottom-color: #F25022;
  }
  30% {
    color: #7FBA00;
    border-bottom-color: #7FBA00;
  }
  60% {
    color: #FFB900;
    border-bottom-color: #FFB900;
  }
  100% {
    color: #00A4EF;
    border-bottom-color: #00A4EF;
  }
`
const StyledDiv = styled.div`
    width: 400px;
    /* height: 200px; */
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0.1);
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.8);
    font-weight: 100;
    letter-spacing: 1px;
    color: #434343;
    border: solid 1px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    box-shadow: -25px 25px 15px -20px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    transition: 1s 0.2s;
    max-width: 90vw;
    h2{
        font-size: 25px;
        font-weight: 800;
        letter-spacing: 3px;
        span{
            font-size: 12px;
            font-weight: 600;
            letter-spacing: normal;
            margin-left: 5px;
        }
    }
    hr{
        width: 240px;
        margin-left: 0;
        margin-right: 0;
    }
    .shape{
        width: 100px;
        height: 100px;
        position: absolute;
        border-radius: 3px;
    }
    .rec1{
        right: 30px;
        bottom: -70px;
        background-color: #4d6083;
        transform: rotate(30deg);
    }
    .rec2{
        width: 60px;
        height: 60px;
        right: 20px;
        top: 15px;
        border: solid 3px #4d6083;
        transform: rotate(60deg);
    }
    .rec3{
        width: 30px;
        height: 30px;
        right: 50px;
        top: 75px;
        border: solid 3px rgba(77, 96, 131, 0.7);
        transform: rotate(60deg);
    }
    &:hover{
        transform: translate(-50%, -50%) scale(1.1);
    }
    &.show{
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
        transition-delay: 0.2s;
    }
    &:hover.show{
        transition: 0.5s 0s;
        transform: translate(-50%, -50%) scale(1.1);
    }
    .info{
        display: flex;
        justify-content: start;
        align-items: center;
    }
    .fa{
        font-size: 16px;
        margin: 8px 0;
        margin-left: 3px;
    }
    .fa.fa-mobile-alt{
        font-size: 20px;
        margin-right: 4px;
    }
    span, a{
        margin-left: 20px;
    }
    span{
        font-size: 13px;
        letter-spacing: 0px;
        font-weight: bold;
    }
    a{
        font-size: 13px;
        letter-spacing: 0px;
        font-weight: bold;
        text-decoration: none;
        color: #F25022;
    }
    a:after{
        content: "";
        border: solid 2px transparent;
        position: absolute;
        width: 0;
        height: 0;
        bottom: -2px;
        left: -2px;
    }
    a:hover{
        animation: ${colorChange} 5s infinite alternate;
    }
    a:hover:after{
        width: 100%;
        height: 100%;
        transition: border-color 0s ease-out 0.5s, width 0.5s ease-out 0s;
        color: none;
        border-bottom-color: #F25022;
        animation: ${colorChange} 5s infinite alternate;
    }
`

const NameCard = () => {
    return (<StyledDiv className="nameCard">
        <h2>&#x5F90;&#x6176;&#x6BC5;<span>CHING-YI HSU (Erkin)</span></h2>
        <hr />
        <div className="email info">
            <FontAwesomeIcon className='fa' icon={faEnvelope}/>
        <span>b07501131@g.ntu.edu.tw</span></div>
        <div className="phone info">
            <FontAwesomeIcon className='fa fa-mobile-alt' icon={faMobileAlt}/>
        <span>(+886) 0919433275</span></div>
        <div className="works info">
            <FontAwesomeIcon className='fa' icon={faFolderOpen}/>
        <a href="https://github.com/HCY71/ResumeFrontend" rel="noreferrer" target="_blank">Source Code</a></div>
        <div className="shape rec1"></div>
        <div className="shape rec3"></div>
        <div className="shape rec2"></div>
    </StyledDiv>);
}

export default NameCard;