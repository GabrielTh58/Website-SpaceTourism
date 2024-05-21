import styled from 'styled-components';

export const MenuSection = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 45px 0 0 55px;
    font-family: "Barlow Condensed", sans-serif;
    position: relative;
    height: 140px;
    max-width: 100%;
`;

export const Logo = styled.img`
     width: 48px;
        height: 48px;
        margin-right: 60px;
`;

export const NavMenu = styled.nav`
    display: flex;
    width: 60%;
    height: 100%;
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.1);

    ul {
        display: flex;
        gap: 48px;
        margin-left: 123px;
        width: 100%;

        @media(max-width: 1300px){
            margin-left: 50px;
            gap: 20px;
        }
        
        li{
            display: flex;
            align-items: center;
            margin-right: 28px;
            border-bottom: 3px solid transparent;
            transition: border-color 0.1s ease-in-out;
            
            &:hover {
                border-color: rgba(255, 255, 255, 0.6);
                cursor: pointer;
            }
        }


        a {
            color: #ffffff;
            padding: 5px;
            font-size: 16px;
            text-transform: uppercase;
            opacity: 0.8;

            span {
                font-weight: bold;
                margin-right: 10px;
            }
        }        
    }
`;

export const Line = styled.div`
    width: 33%;
    height: 1px;
    background-color: rgba(151, 151, 151, 0.2);
    left: 200px;
    position: absolute;
    z-index: 1;

    @media (max-width: 1300px){
        width: 26%;
    }
`;

export default { Logo, NavMenu, Line, MenuSection }