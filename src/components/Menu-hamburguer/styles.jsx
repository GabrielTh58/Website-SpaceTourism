import styled from 'styled-components';

export const NavMenuHamburger = styled.nav`
    display: flex;
    justify-content: flex-end;
    position: relative;
    transition: 5ms ease-in-out;
`;

export const HamburgerIcon = styled.img`
    cursor: pointer;
    padding-right: 30px;
    position: relative;
    z-index: 10;
`;

export const MenuItems = styled.div`
    position: fixed;
    padding-top: 100px;
    width: 60%; 
    height: 100%;
    top: 0;
    right: 0;
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.06);    
    z-index: 9;

    ul {
        li {
            padding: 30px 0 0 30px;

            a {              
                color: #fff;
                font-family: "Barlow Condensed", sans-serif;
                font-size: 16px;
                display: flex;
                align-items: center;
                text-transform: uppercase;

                span {
                    margin-right: 10px;
                    font-weight: bold;
                }
            }

            &:hover {
                opacity: 0.7;
            }
        }
    }
`;

export default { NavMenuHamburger, HamburgerIcon, MenuItems }