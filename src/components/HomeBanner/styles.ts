import styled from "styled-components";
import colors from "../../styles/colors";
import ViewContainer from "../ViewContainer";
import fonts from "../../styles/fonts";

export const BannerWrapper = styled.div`
    background-color: ${colors.headerBackground};
`;

export const BannerContainer = styled(ViewContainer)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.5rem;
    @media (min-width: 992px){
        flex-direction: row;
    }
`;

export const BannerLogo = styled.img`
    border-radius: 1rem;
    width: 300px;
    margin-bottom: 1rem;
    @media (min-width: 992px){
        margin-bottom: 0;
        margin-right: 2rem;
    }
`;

export const BannerTitleContainer = styled.div`
    text-align: center;
`;

export const BannerTitle = styled.h1`
    color: white;
    text-transform: uppercase;
    margin-bottom: 1rem;
    font-weight: normal;
    border-bottom: 5px dotted ${colors.headerTitleBorder};
    padding-bottom: 1rem;
`;

export const BannerTitleFeatured = styled.span`
    -webkit-text-stroke: 1px ${colors.headerFeaturedStroke};
    -webkit-text-fill-color: ${colors.headerFeaturedColor};
    font-size: 2.1rem;
`;

export const BannerSubTitle = styled.h2`
    font-size: 2rem;
    color: white;
    text-transform: uppercase;
    font-weight: normal;
    margin-bottom: 1rem;
    font-family: ${fonts.bannerSubtitleFont};
    text-shadow: 3px 3px ${colors.headerSubtitleTextShadow};
    @media (min-width: 992px){
        margin-bottom: 0;
    }
`;

export const BannerDate = styled.h2`
    font-size: 2rem;
    color: white;
    font-weight: normal;
    font-family: ${fonts.bannerSubtitleFont};
`;