import IconHamburgerImage from '../../assets/shared/icon-hamburger.svg';
import IconCloseImage from '../../assets/shared/icon-close.svg';
import { useState } from 'react';
import ListMenuItems from '../List-menu-items';
import {NavMenuHamburger, HamburgerIcon, MenuItems } from './styles'

export const MenuHamburger = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <NavMenuHamburger>
            <div>
                <HamburgerIcon
                    src={isMenuOpen ? IconCloseImage : IconHamburgerImage}
                    alt={"Menu icon"}
                    onClick={toggleMenu}
                />
            </div>

            {isMenuOpen && (
                <MenuItems>
                    <ListMenuItems />
                </MenuItems>
            )}
        </NavMenuHamburger>
    );
};


export default MenuHamburger;
