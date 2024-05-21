import styled from 'styled-components';
import { CrewContainer, CrewTitle, CrewInfo, AstronautInfo, CrewNavigation, AstronautImg } from './styles';

export const DesktopCrewContainer = styled(CrewContainer)`
    ${CrewTitle}{        
        @media(max-width: 1200px){
            margin-left: 40px;
        }
    }

    ${CrewInfo}{
        @media(max-width: 1200px){
            margin-top: 40px;
            margin-left: 40px;
        }
    }

    ${AstronautInfo}{
        @media(max-width: 1200px){
            h3{
                margin-top: 90px;
            }
        }
    }

    ${CrewNavigation}{
        @media(max-width: 1300px){
            margin-top: 50px;
        }
    }

    ${AstronautImg}{
        @media(max-width: 1440px){
            margin-right: 20px;
        }
    } 
`;

export default DesktopCrewContainer;