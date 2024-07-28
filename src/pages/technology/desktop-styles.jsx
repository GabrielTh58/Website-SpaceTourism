import styled from "styled-components";
import { TechnologyContainer, TechnologySection, TechnologyTitle, TechnologyDetails, TechnologyNavigation, ImageTechnology} from "./styles";

export const DesktopTechnologyContainer = styled(TechnologyContainer)`
    ${TechnologyTitle}{
        @media (max-width: 1400px) {
            margin-left: 80px;
        }
    }

    ${TechnologySection}{
        @media (max-width: 1400px) {
            margin-left: 80px;
        }

        @media (max-width: 1160px) {
            margin-left: 50px;
            margin-right: 30px;
        }   
    }

    ${TechnologyDetails}{
        @media(max-width: 1400px){
            margin-inline: 30px;
        }
        h2{
            @media (max-width: 1400px) {
                font-size: 40px;
            }

            @media (max-width: 1160px) {
               font-size: 35px;
            }   
        }

        p{
            @media (max-width: 1400px) {
                font-size: 16px;
            }

            @media (max-width: 1160px) {
               font-size: 14px;
            }
        }
    }

    ${TechnologyNavigation}{
        ul{
            @media(max-width: 1400px){
                margin-right: 30px;
            }
        }
    }

    ${ImageTechnology}{
        @media(max-width: 1300px){
            height: 480px;
        }
    }    
`

export default DesktopTechnologyContainer;