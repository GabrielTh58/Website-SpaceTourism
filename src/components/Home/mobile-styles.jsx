import styled from "styled-components";
import backgroundHomeMobile from '../../assets/home/background-home-mobile.jpg'
import { TabletHomeContainer } from "./tablet-styles";
import { HomeSection, Info } from "./styles";

export const MobileHomeContainer = styled(TabletHomeContainer)`
    background-image: url(${backgroundHomeMobile});

    ${HomeSection}{
        margin-inline: 0;
    }

    ${Info}{
        width: 100%;
        padding: 25px;

        h2{
            font-size: 80px;
        }

        h3{
            font-size: 16px;
        }

        p{
            font-size: 15px;
            margin-top: 20px;
        }  
    }
`

export default MobileHomeContainer;