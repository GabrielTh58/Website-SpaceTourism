import { styled } from 'styled-components'
import backgroundDestinationTablet from '../../assets/destination/background-destination-tablet.jpg'
import {  DestinationContainer, DestinationSection, DestinationTitle, DestinationInfo, DestinationDetails, TravelDetails  } from './styles'

export const TabletDestinationContainer = styled(DestinationContainer)`
    background-image: url(${backgroundDestinationTablet});
    background-size: 100% 100%;

    ${DestinationSection}{
        flex-direction: column;
        align-items: center;
        justify-content: center; 
    }

    ${DestinationSection} > div{
        width: 100%;
        text-align: center;

        img{
            width: 250px;
            height: 250px;
        }
    }    

    ${DestinationTitle}{
        text-align: start;
        margin-left: 40px;
        font-size: 20px;
    }

    ${DestinationInfo}{
        text-align: center;
        width: auto;
        padding-inline: 100px;
        margin-top: 30px;

        ul{
            justify-content: center;
        }
    }

    ${DestinationDetails}{
        h2{
            font-size: 70px;
            margin-bottom: 0;
        }

        p{
            font-size: 16px;
            padding-bottom: 30px;
            width: 100%;
        }  
    }

    ${TravelDetails}{
        justify-content: center;

        div h3{
            @media(max-width: 600px){
                margin: 0;
            }
        }
    }
`