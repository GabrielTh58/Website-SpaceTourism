import { styled } from 'styled-components'
import backgroundDestinationMobile from '../../assets/destination/background-destination-mobile.jpg'
import { TabletDestinationContainer } from './tablet-styles'
import { DestinationSection, DestinationTitle, DestinationInfo, DestinationDetails, TravelDetails  } from './styles'


export const MobileDestinationContainer = styled(TabletDestinationContainer)`
    background-image: url(${backgroundDestinationMobile});

    ${DestinationSection}{
        margin-top: 20px;
    }

    ${DestinationSection} > div{
        img{
            width: 170px;
            height: 170px;
        }
    }

    ${DestinationTitle}{
        font-size: 16px;
        margin-left: 0px;
        text-align: center;

        span{
            margin-right: 15px;
        }
    }

    ${DestinationInfo}{
        padding-inline: 20px;

        ul{
            gap: 20px;

            li{
                font-size: 14px;
            }
        }
    }

    ${DestinationDetails}{
        h2{
            font-size: 55px;
        }

        p{
            font-size: 15px;
            padding-bottom: 20px;
        }
    }

    ${TravelDetails}{
        flex-direction: column;

        div{
            margin: 20px 0 0 0;

            p{
                margin: 0px;
            }
        }
    }
`