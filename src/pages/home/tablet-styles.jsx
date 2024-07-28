import styled from 'styled-components';
import backgroundHomeTablet from '../../assets/home/background-home-tablet.jpg'
import { HomeContainer, HomeSection, Info } from '../../pages/home/styles'

export const TabletHomeContainer = styled(HomeContainer)`
    background-image: url(${backgroundHomeTablet});

    ${HomeSection}{
        flex-direction: column;
        margin-top: 70px;
    }

    ${Info}{
        margin-right: 100px;

        @media(max-width: 1000px){
            margin-right: 0px;       
            text-align: center;
        }

        
        h2{
            font-size: 120px;

            @media(max-width: 635px){
                font-size: 100px;
            }
        }

        h3{
            font-size: 20px;
        }
    }
    
`
export default TabletHomeContainer;