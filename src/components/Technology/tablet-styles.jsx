import styled from "styled-components";
import backgroundTechnologyTablet from "../../assets/technology/background-technology-tablet.jpg"
import { TechnologyTitle, TechnologyContainer, TechnologySection, TechnologyInfo, TechnologyDetails, TechnologyNavigation, TechnologyContent, ImageTechnology } from './styles'

export const TabletTechnologyContainer = styled(TechnologyContainer)` //1020
    background-image: url(${backgroundTechnologyTablet});

    ${TechnologyTitle}{
        margin: 40px 0 0 40px;
        font-size: 20px;

        h1{
            font-size: 20px;
        }
    }

    ${TechnologySection}{
        flex-direction: column-reverse; //1024
        align-items: center;
        margin: 50px 0 0 0;
    }
    
    ${TechnologyInfo}{
        width: auto;
    }

    ${TechnologyDetails}{
        text-align: center;
        margin: 0;

        p{
            margin: 10px 0 0 0;
            padding-inline: 100px;          
        }
    }

    ${TechnologyNavigation}{
        margin: 40px 0 30px 0;  

        ul{
            flex-direction: row;
            justify-content: center;

            li{
                width: 50px;
                height: 50px;
                margin: 0 5px;

                span{
                    font-size: 24px;
                }
            }
        }
    }

    ${TechnologyContent}{
        flex-direction: column;
    }

    ${ImageTechnology}{
        width: 100%;
        height: 300px;
        margin: 0;
    }
`

export default TabletTechnologyContainer;