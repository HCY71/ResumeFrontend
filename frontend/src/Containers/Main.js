import styled from "styled-components";

// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import github from '../assets/github_logo.png';
import codepen from '../assets/codepen_logo.png';
import resume from '../assets/resume.svg'
import codepenProject from '../assets/codepen.jpg'
import ptt from '../assets/modernPtt.jpg'
import ntut from '../assets/ntut.jpg'

const StyledTitle = styled.div`
    font-size: 30px;
    color: #597FC7;
    font-weight: bold;
    margin: 10px 0 5px 0px;
`
const Title = ({ word }) => {
    return (
        <StyledTitle className="title">{word}</StyledTitle>
    )
}

const StyledMain = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .swiper-slide{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 60px;
        min-height: 80vh;
        .img{
            height: 80vh;
            max-width: 90vw;
            /* border: solid 1px rgba(0,0,0,0.3); */
            margin: 10px; 
        }
        .links{
            position: absolute;
            bottom: 20px;
            display: flex;
            .logo{
                width: 3vh;
                margin: 10px;
                img{
                    width: 100%;
                }
            }
        }
    }
    .slide{
        display: grid;
        justify-items: center;
        align-content: center;
        img{
            width: 700px;
            max-width: 100vw;
        }
        .sub{
            font-size: 20px;
            font-weight: bold;
            max-width: 100vw;
        }
        .des{
            margin-top: 30px;
            width: 500px;
            max-width: 90vw;
            line-height: 1.5;
        }
        a{
            margin-top: 20px;
            color: #597FC7;
            font-weight: bold;
            text-decoration: none;
        }
    }
`
const Main = () => {
    return (
        <StyledMain className="main">
            <Swiper modules={[Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }}>
                <SwiperSlide>
                    <img src={resume} alt="" className="img" />
                    <div className="links">
                        <a href="https://github.com/HCY71/ResumeFrontend" className="logo" target='_blank' rel="noreferrer">
                            <img src={github} alt="" />
                        </a>
                        <a href="https://codepen.io/hci_71" className="logo" target='_blank' rel="noreferrer">
                            <img src={codepen} alt="" />
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide slide2">
                    <img src={codepenProject} alt="" className="codepen"/>
                    <Title word='CodePen Self Project'/>
                    <div className="sub">Stop Watch</div>
                    <div className="des">Using JS to draw on HTML canvas and detect user mouse movement to create a interactive as well as functional stop watch.</div>
                    <a href="https://codepen.io/hci_71/pen/OJmgoBo" target='_blank' rel="noreferrer">Link</a>
                </SwiperSlide>
                <SwiperSlide className="slide slide3">
                    <img src={ptt} alt="" className="codepen"/>
                    <Title word='Team Project'/>
                    <div className="sub">Modern PTT</div>
                    <div className="des">Using React, GraphQL and MongoDB as structure. Collaborating with others to fulfill the forum with complete functions,
                    I was in charge of layout design and frontend data management. </div>
                    <a href="https://modern-ptt.herokuapp.com/intro" target='_blank' rel="noreferrer">Link</a>
                </SwiperSlide>
                <SwiperSlide className="slide slide4">
                    <img src={ntut} alt="" className="codepen"/>
                    <Title word='Self Project'/>
                    <div className="sub">NTUT Exhibition (Fullend Application)</div>
                    <div className="des">An one page Web application with frontend and backend. Created using REACT, Express, and deployed on AWS EC2. From frontend to backend and deployment, including layout, animation, data transfer, SSL, and etc, these process are all done by my own.</div>
                    <a href="https://ntutcvd107.com/" target='_blank' rel="noreferrer">Link</a>
                </SwiperSlide>
            </Swiper>
        </StyledMain>
    );
}

export default Main;