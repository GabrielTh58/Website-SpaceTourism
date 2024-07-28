import styled from 'styled-components';
import backgroundHome from '../../assets/home/background-home-desktop.jpg'

export const HomeContainer = styled.section`
    background-image: url(${backgroundHome});
    background-size: cover;
    width: 100vw;
    height: 100vh;
`

export const HomeSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 150px 100px 0 100px;
    font-family: 'Barlow', sans-serif;
`

export const Info = styled.div`
    width: 450px;
    margin-right: 250px;

    h2{
        font-size: 150px;
        margin: 25px 0 0px 0;
        font-family: 'Bellefair', sans-serif;
        text-transform: uppercase;
    }

    h3{
        font-size: 28px;
        color: #D0D6F9;
    } 

    p{
        font-size: 18px;
        color: #D0D6F9;
        opacity: 0.8;
    }
`

export default { HomeContainer, HomeSection, Info };
