import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import $ from "jquery";

const StyledDiv = styled.div`
    position: absolute;
    right: 5vh;
    bottom: 6vh;
    .fa-paper-plane{
        font-size: 5vh;
        font-weight: bold;
        color: #666;
        cursor: pointer;
        z-index: 100000000;
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
    </StyledDiv> );
}
 
export default Contact;