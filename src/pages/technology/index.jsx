import React, { useEffect, useState, useLayoutEffect } from 'react';
import data from '../../data.json';
import { DataDisplay } from "../../components/Data-display"
import { NavigationList } from "../../components/Navigation-list"
import { Menu } from "../../components/Menu"
import launchVehicleImage from '../../assets/technology/image-launch-vehicle-portrait.jpg';
import spaceCapsuleImage from '../../assets/technology/image-space-capsule-portrait.jpg';
import spacePortImage from '../../assets/technology//image-spaceport-portrait.jpg';
import { DesktopTechnologyContainer } from './desktop-styles'
import { TabletTechnologyContainer } from './tablet-styles'
import { MobileTechnologyContainer } from './mobile-styles'

import { TechnologyTitle, TechnologySection, TechnologyInfo, TechnologyNavigation, TechnologyContent, TechnologyDetails, ImageTechnology } from './styles';

const technologyImages = [launchVehicleImage, spacePortImage, spaceCapsuleImage];
const altDescriptions = ['Launch Vehicle', 'Space Capsule' , 'Space Port'];

export const Technology = () => {
    const [technologyData, setTechnologyData] = useState();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [technologyImage, setTechnologyImage] = useState();
    const [altDescription, setAltDescription] = useState();
    const [isTablet, setIsTablet] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useLayoutEffect(() => {
        const checkMediaQuery = () => {
            setIsTablet(window.matchMedia('(max-width: 1020px)').matches);
            setIsMobile(window.matchMedia('(max-width: 650px)').matches);
        };

        checkMediaQuery();
        window.addEventListener('resize', checkMediaQuery);

        return () => {
            window.removeEventListener('resize', checkMediaQuery);
        };
    }, []);

    useEffect(() => {
        setTechnologyData(data.technology);
    }, []);

    useEffect(() => {
        setTechnologyImage(technologyImages[currentIndex]);
        setAltDescription(altDescriptions[currentIndex]);
    }, [currentIndex]);

    const TechnologyContainer = isMobile ? MobileTechnologyContainer : isTablet ? TabletTechnologyContainer : DesktopTechnologyContainer;

    return (
        <>
            <TechnologyContainer>                
                <Menu />

                <TechnologyTitle>
                    <h1> <span>03</span> Space launch 101</h1>
                </TechnologyTitle>

                <TechnologySection>                      
                    <TechnologyInfo>                                                   

                        <TechnologyContent>
                            <TechnologyNavigation>  
                                {technologyData && technologyData.length > 0 && (
                                    <NavigationList datas={technologyData} setCurrentIndex={setCurrentIndex} includeIndex={true} currentIndex={currentIndex}> </NavigationList>
                                )}
                            </TechnologyNavigation>

                            <TechnologyDetails>
                                <h3>The terminology...</h3>  
                                <DataDisplay data={technologyData} currentIndex={currentIndex} detailKey="description" />
                            </TechnologyDetails>      
                        </TechnologyContent>

                    </TechnologyInfo>

                    <ImageTechnology>
                        <img src={technologyImage} alt={altDescription} />
                    </ImageTechnology>
                </TechnologySection>
            </TechnologyContainer>
        </>
    )
}
