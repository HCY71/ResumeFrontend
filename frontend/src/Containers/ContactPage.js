import styled from "styled-components";
import {keyframes} from "styled-components";
import NameCard from "../Components/Contact/NameCard";
import CloseCard from "../Components/Contact/CloseCard";


const divIn = keyframes`
    0% {
      left: -100vw;
    }
    100% {
      left: 0;
    }
`



const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1000;
  display: none;
  top: 0;
  .div{
    width: 100%;
  height: calc(100%/5);
  background-color: #eee;
  border: solid 1vh #eee;
  /* box-sizing: border-box; */
  left: -100%;
  animation: ${divIn} 1s;
  animation-fill-mode: forwards;
  }
  .div1{
    animation-delay: 0.1s;
  }
  .div2{
    animation-delay: 0.2s;
  }
  .div3{
    animation-delay: 0.3s;
  }
  .div4{
    animation-delay: 0.4s;
  }
  .div5{
    animation-delay: 0.5s;
  }
`

const ContactPage = () => {
    return ( <StyledDiv className="contactCardWrapper">
    <div className="div div1"> </div>
    <div className="div div2"> </div>
    <div className="div div3"> </div>
    <div className="div div4"> </div>
    <div className="div div5"></div>
    <NameCard/>
    <CloseCard />
  </StyledDiv> );
}
 
export default ContactPage;