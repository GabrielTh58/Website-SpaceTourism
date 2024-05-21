import styled from 'styled-components';
import backgroundCrew from '../../assets/crew/background-crew-desktop.jpg';

export const CrewContainer = styled.section`
    background-image: url(${backgroundCrew});
    background-size: cover;
    width: 100vw;
    height: 100vh;
    overflow-y: hidden;
`

export const CrewTitle = styled.div`
    width: 100%;
    margin: 75px 0 0 185px;

    h1 {
        font-family: "Barlow Condensed", sans-serif;
        font-size: 28px;
        text-transform: uppercase;

        span {
            opacity: 0.6;
            margin-right: 25px;
        }
    }
`;

export const CrewSection = styled.section`
    display: flex;
    justify-content: space-between;
`;

export const CrewInfo = styled.div`
    margin: 0 80px 0 185px;
    width: 800px;
    position: relative;
`;

export const AstronautInfo = styled.div`
    margin-right: 20px; 

    h3 {
        font-size: 32px;
        font-family: "Bellefair", sans-serif;
        text-transform: uppercase;
        opacity: 0.6;
        margin-top: 155px;
    }

    div {
        h2 {
            font-size: 55px;
            font-family: 'Bellefair', sans-serif;
            text-transform: uppercase;
            margin-top: 15px;
        }

        p {
            font-size: 18px;
            font-family: "Barlow", sans-serif;
            color: #D0D6F9;
            margin-top: 27px;
            width: 70%;
        }
    }
`;

export const CrewNavigation = styled.nav`
    margin-top: 100px;

    ul {
        display: flex;
    }

    li {
        width: 15px;
        height: 15px;
        background-color: #979797;
        opacity: 0.4;
        border-radius: 20px;
        border: none;
        margin-right: 25px;

        &:hover {
            opacity: 1;
            cursor: pointer;
        }

        &.clicked {
            background-color: #fff;
        }
    }
`;

export const AstronautImg = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    margin-right: 140px;
    height: 600px;

    img {
        height: 100%;
    }
`;
export default { CrewContainer, CrewSection, CrewInfo, AstronautInfo, CrewNavigation, AstronautImg, CrewTitle }
