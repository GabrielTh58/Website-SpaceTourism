import React, { useState, useLayoutEffect } from 'react';
import logo from '../../assets/shared/logo.svg';
import { Link } from 'react-router-dom';
import styles from './styles';
import { MenuSection as DesktopMenuSection } from './styles';
import { TabletMenuSection } from './tablet-styles';
import { MobileMenuSection } from './mobile-styles';
import MenuHamburguer from '../Menu-hamburguer';
import ListMenuItems from '../List-menu-items';

const { Logo, NavMenu, Line } = styles;

export const Menu = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);

    useLayoutEffect(() => {
        const checkMediaQuery = () => {
            setIsMobile(window.matchMedia('(max-width: 590px)').matches);
            setIsTablet(window.matchMedia('(max-width: 1020px)').matches);
        };

        checkMediaQuery();
        window.addEventListener('resize', checkMediaQuery);

        return () => {
            window.removeEventListener('resize', checkMediaQuery);
        };
    }, []);

    const MenuSection = isMobile ? MobileMenuSection : isTablet ? TabletMenuSection : DesktopMenuSection;

    return (
        <header>
            <MenuSection>
                <Link to="/">
                    <Logo src={logo} alt="logo space tourism" />
                </Link>

                <Line />
                {
                    !isMobile ? (
                        <NavMenu>
                            <ListMenuItems />
                        </NavMenu>
                    ) : (
                        <MenuHamburguer />
                    )
                }
            </MenuSection>
        </header>
    );
}

export default Menu;
