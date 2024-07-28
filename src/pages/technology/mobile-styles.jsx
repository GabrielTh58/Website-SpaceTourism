import styled from "styled-components";
import backgroundTechnologyMobile from "../../assets/technology/background-technology-mobile.jpg"
import { TabletTechnologyContainer } from "./tablet-styles";
import { TechnologyTitle, TechnologyDetails, TechnologyNavigation, ImageTechnology} from "./styles";

export const MobileTechnologyContainer = styled(TabletTechnologyContainer)`
    background-image: url(${backgroundTechnologyMobile});

    ${TechnologyTitle}{
        text-align: center;
        margin: 30px 0 0 0;
    }

    ${TechnologyDetails}{
        h3{
            font-size: 15px;
        }

        h2{
            font-size: 24px;
        }

        p{
            font-size: 15px;
            padding-inline: 20px;
        }
    }

    ${TechnologyNavigation}{
        ul{
            margin: 0;
        }
        
        ul li{
            width: 30px;
            height: 30px;

            span{
                font-size: 16px;
            }
        }
    }
    
    ${ImageTechnology}{
        height: 200px;     
    }
`

export default MobileTechnologyContainer