import styled from 'styled-components';
import backgroundCrewTablet from '../../assets/crew/background-crew-tablet.jpg';
import { CrewTitle, CrewSection, CrewInfo, AstronautInfo, CrewNavigation, AstronautImg } from './styles';
import { DesktopCrewContainer } from './desktop-styles'

export const TabletCrewContainer = styled(DesktopCrewContainer)`
    background-image: url(${backgroundCrewTablet});

    ${CrewTitle} {
        h1 {
            font-size: 20px;
        }    
    }

    ${CrewSection} {
        flex-direction: column;
        align-items: center;
    }

    ${CrewInfo} {
        margin: 40px 0 0 0;
        width: 500px;
    }

    ${AstronautInfo} {
        h3 {
            font-size: 24px;
            margin-top: 0;
        }

        div {
            h2 {
                font-size: 40px;
                margin: 0;
            }

            p {
                font-size: 16px;
                width: auto;
                margin-top: 15px;
            }
        }
    }

    ${CrewNavigation} {
        margin: 30px 0 50px 0;

        ul {
            justify-content: center;

            li {
                width: 10px;
                height: 10px;
            }
        }      
    }

    ${AstronautImg} {
        width: 100%;
        text-align: center;
        height: 350px;
        margin-right: 0px;
    }
`;

export default TabletCrewContainer;