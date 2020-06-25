import React from 'react';
import { ICovidCategoriesDescription } from '../../../model/CovidData';
import {
    CategoryDescriptionWrapper,
    CategoryDescriptionContainer,
    DescriptionTitle,
    DescriptionBody
} from './styles';

const CategoryDescription: React.FC<ICovidCategoriesDescription> = ({ covidData }) => {
    return (
        <CategoryDescriptionWrapper color={covidData.color}>
            <CategoryDescriptionContainer>
                <DescriptionTitle>{covidData.label}:</DescriptionTitle>
                <DescriptionBody>{covidData.description}</DescriptionBody>
            </CategoryDescriptionContainer>
        </CategoryDescriptionWrapper>
    )
}

export default CategoryDescription;