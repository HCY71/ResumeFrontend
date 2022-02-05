import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import $ from "jquery";

const scaling = keyframes`
    0%{
        transform: scale(1);
    }
    100%{
        transform: scale(1.1);
    }
`

const StyledDiv = styled.div`
    position: absolute;
    right: 12px;
    bottom: 12px;
    display: grid;
    justify-items: end;
    .fa-paper-plane{
        font-size: 30px;
        font-weight: bold;
        color: #666;
        cursor: pointer;
        z-index: 2;
        animation: ${scaling} 1s infinite ease-out alternate;
    }
    .right{
        margin-top: 14px;
        font-size: 8px;
        color: rgba(0,0,0, 0.6);
    }
    @media (min-width: 768px) {
        right: 30px;
        bottom: 30px;
        .fa-paper-plane{
            font-size: 40px;
        }
        .right{
            font-size: 12px;
        }
    }
    @media (min-width: 1024px) {
        right: 40px;
        bottom: 40px;
        .fa-paper-plane{
            font-size: 40px;
        }
        .right{
            font-size: 12px;
            margin-top: 20px;
        }
    }
    @media (min-width: 1280px) {
        right: 40px;
        bottom: 20px;
        .fa-paper-plane{
            font-size: 40px;
        }
        .right{
            font-size: 12px;
            margin-top: 10px;
        }
    }
    `
const Contact = () => {
    
    const handleFadeIn = ()=>{
        $(".contactCardWrapper").fadeIn();
        setTimeout(function () {
            $(".nameCard").addClass("show");
            setTimeout(function () {
                $(".closeCard").fadeIn();
            }, 1500);
        }, 1000);
    }

    return ( 
    <StyledDiv className="contact" onClick={handleFadeIn}>
        <FontAwesomeIcon icon={faPaperPlane} className='fa-paper-plane'/>
        <div className="right">Copyright © 2022 CHING-YI HSU</div>
    </StyledDiv> );
}
 
export default Contact;