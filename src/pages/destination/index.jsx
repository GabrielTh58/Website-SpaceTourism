import React, { useEffect, useState, useLayoutEffect } from 'react';
import data from '../../data.json';
import moonImage from '../../assets/destination/image-moon.png';
import europaImage from '../../assets/destination/image-europa.png';
import marsImage from '../../assets/destination/image-mars.png';
import titanImage from '../../assets/destination/image-titan.png';
import { Menu } from '../../components/Menu';
import { NavigationList } from '../../components/Navigation-list';
import { DataDisplay } from '../../components/Data-display';
import { DestinationContainer as DesktopDestinationSection } from './styles';
import { TabletDestinationContainer } from './tablet-styles';
import { MobileDestinationContainer } from './mobile-styles';
import { DestinationSection, DestinationInfo, DestinationDetails, TravelDetails, DestinationTitle } from './styles';

const destinationImages = [moonImage, europaImage, marsImage, titanImage];
const altDescriptions = ['Image of the Moon', 'Image of the Mars', 'Image of the Europa', 'Image of the Titan'];

export const Destination = () => {
    const [destinationData, setdestinationData] = useState();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [destinationImage, setDestinationImage] = useState();
    const [altDescription, setAltDescription] = useState();
    const [isTablet, setIsTablet] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useLayoutEffect(() => {
        const checkMediaQuery = () => {
            setIsTablet(window.matchMedia('(max-width: 990px)').matches);
            setIsMobile(window.matchMedia('(max-width: 590px)').matches);
        };

        checkMediaQuery();
        window.addEventListener('resize', checkMediaQuery);

        return () => {
            window.removeEventListener('resize', checkMediaQuery);
        };
    }, []);

    useEffect(() => {
        setdestinationData(data.destinations);
    }, []);

    useEffect(() => {
        setDestinationImage(destinationImages[currentIndex]);
        setAltDescription(altDescriptions[currentIndex]);
    }, [currentIndex]);

    const DestinationContainer = isMobile ? MobileDestinationContainer : isTablet ? TabletDestinationContainer : DesktopDestinationSection;

    return (
        <>
            <DestinationContainer>
                <Menu />

                <DestinationSection>
                    <div>
                        <DestinationTitle> <span>01</span> Pick your destination</DestinationTitle>
                        <img src={destinationImage} alt={altDescription} />
                    </div>

                    <DestinationInfo>
                        <NavigationList datas={destinationData} setCurrentIndex={setCurrentIndex} detailKey="name" />

                        {destinationData && destinationData.length > 0 && (
                            <>
                                <DestinationDetails>                               
                                    <DataDisplay data={destinationData} currentIndex={currentIndex} detailKey="description" />
                                </DestinationDetails>

                                <TravelDetails>
                                    <div>
                                        <h3>AVG. Distance</h3>
                                        <p>{destinationData[currentIndex].distance}</p>
                                    </div>

                                    <div>
                                        <h3>EST. Travel Time</h3>
                                        <p>{destinationData[currentIndex].travel}</p>
                                    </div>
                                </TravelDetails>
                            </>
                        )}
                    </DestinationInfo>
                </DestinationSection>
            </DestinationContainer>
        </>
    );
};
