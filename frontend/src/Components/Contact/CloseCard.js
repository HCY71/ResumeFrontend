import styled from "styled-components";
import $ from 'jquery';


const StyledDiv = styled.div`
    width: 30px;
    height: 30px;
    display: none;
    position: absolute;
    left: 50%;
    bottom: 10%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: solid 1px #999;
    cursor: pointer;

    .line1, .line2{
        width: 15px;
        height: 2px;
        background-color: #F25022;
        position: absolute;
        top: 50%;
        left: 50%;
    }
    .line1{
        transform: translateX(-50%) translateY(-50%) rotate(45deg);
    }
    .line2{
        transform: translateX(-50%) translateY(-50%) rotate(-45deg);
    }
    &:hover{
        background-color: #F25022;
        border: solid 1px white;
        transition: 0.5s;
    }
    &:hover .line1, &:hover .line2{
        background-color: #eee;
        transition: 0.5s;
    }

`
const CloseCard = () => {
    const handleCloseCard = ()=>{
            $(".nameCard").removeClass("show");;
            setTimeout(function () {
                $(".contactCardWrapper").fadeOut();
                $(".closeCard").fadeOut();
            }, 500);
    }
    return (
        <StyledDiv className="closeCard" onClick={handleCloseCard}>
            <div className="line1"></div>
            <div className="line2"></div>
        </StyledDiv>
    );
}

export default CloseCard;