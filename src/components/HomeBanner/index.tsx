import React from 'react';
import {
    BannerWrapper,
    BannerContainer, 
    BannerLogo, 
    BannerTitleContainer, 
    BannerTitle, 
    BannerTitleFeatured, 
    BannerSubTitle, 
    BannerDate
} from './styles';
import headerLogo from '../../img/headerLogo.png';
import { IHomeBanner } from '../../model/CovidData';

const HomeBanner: React.FC<IHomeBanner> = ({ date }) => {
    return (
        <BannerWrapper> 
            <BannerContainer>
                <BannerLogo src={headerLogo} />
                <BannerTitleContainer>
                    <BannerTitle>Formiga na guerra contra o <BannerTitleFeatured>CoronaVirus</BannerTitleFeatured></BannerTitle>
                    <BannerSubTitle>Boletim Informativo Diário</BannerSubTitle>
                    <BannerDate>{date}</BannerDate>
                </BannerTitleContainer>
            </BannerContainer>
        </BannerWrapper>
    )
}

export default HomeBanner;