import styled from 'styled-components';
import backgroundCrewMobile from '../../assets/crew/background-crew-mobile.jpg';
import { CrewTitle, CrewSection, CrewInfo, AstronautInfo, CrewNavigation, AstronautImg } from './styles';
import { TabletCrewContainer } from './tablet-styles';

export const MobileCrewContainer = styled(TabletCrewContainer)`
    background-image: url(${backgroundCrewMobile});

    ${CrewTitle} {
        text-align: center;
        margin: 20px 0 40px 0;

        h1 {
            font-size: 16px;
            margin: 0 0 30px 0;
        }
    }

    ${CrewSection} {
        flex-direction: column-reverse;
    }

    ${CrewInfo} {
        display: flex;
        flex-direction: column-reverse;
        margin: 20px 0 0 0;
        width: 100vw;
    }

    ${AstronautInfo} {
        text-align: center;

        h3 {
            font-size: 16px;
        }

        div {
            h2 {
                font-size: 24px;
            }

            p {
                font-size: 15px;
                padding-inline: 10%;
            }
        }
    }

    ${CrewNavigation} {
        margin: 50px 0 40px 0;
        width: 100vw;
    }

    ${AstronautImg} {
        position: static;
        width: 80%;
        border-bottom: 1px solid #383B4B;
        margin: 0 auto;
        height: 200px;
        text-align: center;
    }
`;

export default MobileCrewContainer;