import React, { useState, useLayoutEffect } from 'react';
import { ButtonExplore } from '../../components/Button-explore';
import { Menu } from "../../components/Menu";
import { HomeContainer as DesktopHomeContainer, HomeSection, Info } from "./styles";
import { TabletHomeContainer } from "./tablet-styles";
import { MobileHomeContainer } from "./mobile-styles";

export const Home = () => {
    const [isTablet, setIsTablet] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useLayoutEffect(() => {
        const checkMediaQuery = () => {
            setIsTablet(window.matchMedia('(max-width: 1000px)').matches);
            setIsMobile(window.matchMedia('(max-width: 520px)').matches);
        };

        checkMediaQuery();
        window.addEventListener('resize', checkMediaQuery);

        return () => {
            window.removeEventListener('resize', checkMediaQuery);
        };
    }, []);

    const HomeContainer = isMobile ? MobileHomeContainer : isTablet ? TabletHomeContainer : DesktopHomeContainer;

    return (
        <>
            <HomeContainer>
                <Menu />

                <HomeSection>
                    <Info>
                        <h3>So, you want to travel toce</h3>
                        <h2>Space</h2>
                        <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience
                        </p>
                    </Info>

                    <ButtonExplore />
                </HomeSection>
            </HomeContainer>
        </>
    );
};
