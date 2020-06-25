import React from 'react';
import { ICovidCategoriesDescription } from '../../model/CovidData';
import CategoryDescriptionGroup from './CategoryDescriptionGroup';

const CovidCategoriesDescription: React.FC<ICovidCategoriesDescription> = ({ covidData }) => {
    return (
        <>
            <CategoryDescriptionGroup covidData={covidData} overview/>
            {covidData.children.map(covidChildren =><CategoryDescriptionGroup covidData={covidChildren}/> )}
        </>
    )
}

export default CovidCategoriesDescription;