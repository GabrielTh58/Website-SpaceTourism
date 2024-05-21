import styled from "styled-components"
import backgroundTechnology from "../../assets/technology/background-technology-desktop.jpg"

export const TechnologyContainer = styled.section`
    background-image: url(${backgroundTechnology});
    background-size: cover;
    width: 100vw;
    height: 100vh;
`
export const TechnologyTitle = styled.div`
    margin: 40px 0 0 165px;

    h1{
        font-family: "Barlow Condensed", sans-serif;
        font-size: 28px;     
        
        span{
            margin-right: 20px;
            opacity: 0.4;
        }
    }
`
export const TechnologySection = styled.section`
    display: flex;
    margin: 60px 80px 0 165px;
    align-items: center;  
`

export const TechnologyInfo = styled.div`    
    width: 50%; 
`

export const TechnologyDetails = styled.div`
    margin: 0 130px 0 80px;
    width: 100%;

    h3{
        font-size: 16px;
        font-family: "Barlow Condensed", sans-serif;
        text-transform:uppercase;
        color: #D0D6F9;
    }

    h2{
        font-size: 55px;
        font-family: "Bellefair", sans-serif;
        text-transform:uppercase;
        margin-top: 10px;
    }

    p{
        font-size: 17px;
        font-family: "Barlow", sans-serif;        
        color: #D0D6F9;
        opacity: 0.8;
    }
  
`
export const TechnologyContent = styled.div`
    display: flex;
`

export const TechnologyNavigation = styled.div`
    ul{
        display: flex;
        flex-direction: column;        
    }

    ul li {
        width: 80px;
        height: 80px;     
        border-radius: 50%;
        border: 1.5px solid rgba(255,255,255,0.6);       
        margin-bottom: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        
        span {
            color: rgb(255,255,255);
            font-family: "Bellefair", sans-serif;
            font-size: 30px;
            z-index: 1;
        }

        &:hover{
            cursor: pointer;
            border-color: #fff; 
        }

        
        &.clicked{
            background-color: #fff;
            z-index: 0;

            span {
                color: #000;            
            }
        }
    }
`

export const ImageTechnology = styled.div`
    width: 520px;
    height: 550px;

    img{
        width: 100%;
        height: 100%;
    }

`

export default {TechnologyContainer, TechnologyTitle, TechnologySection, TechnologyInfo, TechnologyContent, TechnologyNavigation, TechnologyDetails, ImageTechnology }