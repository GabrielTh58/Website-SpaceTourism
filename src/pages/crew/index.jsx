import React, { useEffect, useState, useLayoutEffect } from 'react';
import data from '../../data.json';
import douglasHurleyImage from '../../assets/crew/image-douglas-hurley.png';
import markShuttleworthImage from '../../assets/crew/image-mark-shuttleworth.png';
import victorGloverImage from '../../assets/crew/image-victor-glover.png';
import anoushehAnsariImage from '../../assets/crew/image-anousheh-ansari.png';
import { Menu } from '../../components/Menu';
import { NavigationList } from '../../components/Navigation-list';
import { DataDisplay } from '../../components/Data-display';
import { DesktopCrewContainer } from './desktop-styles';
import { TabletCrewContainer } from './tablet-styles';
import { MobileCrewContainer } from './mobile-styles';
import { CrewTitle, CrewSection, CrewInfo, AstronautInfo, CrewNavigation, AstronautImg } from './styles';

const astronautImages = [douglasHurleyImage, markShuttleworthImage, victorGloverImage, anoushehAnsariImage];
const altDescriptions = ['Douglas Hurley Image', 'Mark Shuttleworth Image', 'Victor Glover image', 'Anousheh Ansari image'];

export const Crew = () => {
    const [crewData, setCrewData] = useState();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [astronautImage, setAstronautImage] = useState();
    const [altDescription, setAltDescription] = useState();
    const [isTablet, setIsTablet] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useLayoutEffect(() => {
        const checkMediaQuery = () => {
            setIsTablet(window.matchMedia('(max-width: 1020px)').matches);
            setIsMobile(window.matchMedia('(max-width: 590px)').matches);
        };

        checkMediaQuery();
        window.addEventListener('resize', checkMediaQuery);

        return () => {
            window.removeEventListener('resize', checkMediaQuery);
        };
    }, []);

    useEffect(() => {
        setCrewData(data.crew);
    }, []);

    useEffect(() => {
        setAstronautImage(astronautImages[currentIndex]);
        setAltDescription(altDescriptions[currentIndex]);
    }, [currentIndex]);

    const CrewContainer = isMobile ? MobileCrewContainer : isTablet ? TabletCrewContainer : DesktopCrewContainer;

    return (
        <CrewContainer>
            <Menu />

            <CrewTitle>
                <h1><span>02</span> Meet your crew</h1>
            </CrewTitle>

            <CrewSection>
                <CrewInfo>
                    <AstronautInfo>
                        {crewData && crewData.length > 0 && (
                            <>
                                <h3>{crewData[currentIndex].role}</h3>
                                <DataDisplay data={crewData} currentIndex={currentIndex} detailKey="bio" />
                            </>
                        )}
                    </AstronautInfo>

                    <CrewNavigation>
                        <NavigationList datas={crewData} setCurrentIndex={setCurrentIndex} currentIndex={currentIndex} />
                    </CrewNavigation>
                </CrewInfo>

                <AstronautImg>
                    <img src={astronautImage} alt={altDescription} />
                </AstronautImg>                
            </CrewSection>
        </CrewContainer>
    );
};
