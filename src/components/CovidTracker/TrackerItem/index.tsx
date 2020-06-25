import React from 'react';
import { ICovidTrackerItem } from '../../../model/CovidData';
import {
    TrackerItemContainer,
    ItemOverview,
    ItemLabel,
    ItemQuantity
} from './styles'
import ItemImage from './ItemImage';
import ItemArrow from './ItemArrow';

const TrackerItem: React.FC<ICovidTrackerItem> = ({ covidData, overview }) => {
    return (
        <TrackerItemContainer>
            <ItemArrow />
            <ItemOverview>
                <ItemImage color={covidData.color} overview={overview}/>
                <ItemLabel>{covidData.label}</ItemLabel>
                <ItemQuantity color={covidData.color}>{covidData.quantity}</ItemQuantity>
                {!overview && covidData.children ? covidData.children.map(covidChildren => <TrackerItem covidData={covidChildren} /> ): null}
            </ItemOverview>
        </TrackerItemContainer>
    )
}

export default TrackerItem;