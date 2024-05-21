import { styled } from 'styled-components'
import backgroundDestination from '../../assets/destination/background-destination-desktop.jpg'

export const DestinationContainer = styled.section`
    background-image: url(${backgroundDestination});
    background-size: cover;
    width: 100vw;
    height: 100vh;
`

export const DestinationSection = styled.section`
    display: flex;
    justify-content: space-evenly;
    margin-top: 40px;
` 
   
export const DestinationTitle = styled.h1`
    font-family: "Barlow Condensed", sans-serif;
    font-size: 28px;
    text-transform: uppercase;
    margin-bottom: 30px;

    span{
        opacity: 0.6;
        margin-right: 25px;
    }
`

export const DestinationInfo = styled.div`
    width: 445px;
    margin-top: 100px;

    ul {
        display: flex;
        padding: 0;

        li {
            font-size: 16px;
            color: #D0D6F9;
            font-family: "Barlow Condensed", sans-serif;
            text-transform: uppercase;
            transition: border-color 0.1s ease-in-out;
            border-bottom: 3px solid transparent;
            padding-bottom: 5px;
            margin-right: 15px;
            
            &:hover {
                border-color: rgba(255,255,255,0.6);
                cursor: pointer;
                
            }
        }
    }
`

export const DestinationDetails = styled.div`
    border-bottom: 1px solid #d0d6f9;  

    h2{
        font-size: 100px;
        margin: 0px 0px 18px 0px;
        font-family: 'Bellefair', sans-serif;
        text-transform: uppercase;
    }

    p{
        font-size: 18px;
        color: #D0D6F9;
        font-family: "Barlow", sans-serif;
        padding-bottom: 55px;
    }
`

export const TravelDetails = styled.div`
    display: flex;
    align-items: center;

    div{
        margin: 20px 70px 0 0;

        h3{
            font-weight: normal;
            font-size: 14px;
            font-family: "Barlow Condensed", sans-serif;
            color: #D0D6F9;
            text-transform: uppercase;
            margin: 0 0 10px 0;
        }

        p{
            font-size: 26px;
            font-family: "Bellefair", sans-serif;
            text-transform: uppercase; 
            margin: 0 0 0 10px;
        }
    }
`

export default { DestinationContainer, DestinationSection, DestinationTitle, DestinationInfo, DestinationDetails, TravelDetails }