import React from 'react';
import { ICategoryDescriptionGroup, ICovidGroup } from '../../../model/CovidData';
import {
    CategoryDescriptionGroupContainer
} from './styles';
import CategoryDescription from '../CategoryDescription';

const CategoryDescriptionGroup: React.FC<ICategoryDescriptionGroup> = ({ covidData, overview }) => {
    return (
        <CategoryDescriptionGroupContainer color={covidData.color}>
            <CategoryDescription covidData={covidData} />
            {!overview && covidData.children ? covidData.children.map((covidChildren: ICovidGroup) => <CategoryDescription covidData={covidChildren} />) : null}
        </CategoryDescriptionGroupContainer>
    )
}

export default CategoryDescriptionGroup;