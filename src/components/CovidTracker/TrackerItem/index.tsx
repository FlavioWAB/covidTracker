import React from 'react';
import { ICovidTracker } from '../../../model/CovidData';
import {
    TrackerItemContainer,
    ItemOverview,
    ItemLabel,
    ItemQuantity,
    ItemArrowContainer
} from './styles'
import ItemImage from './ItemImage';

const TrackerItem: React.FC<ICovidTracker> = ({ covidData }) => {
    return (
        <TrackerItemContainer>
            <ItemArrowContainer />
            <ItemOverview>
                <ItemImage color={covidData.color}/>
                <ItemLabel>{covidData.label}</ItemLabel>
                <ItemQuantity>{covidData.quantity}</ItemQuantity>
            </ItemOverview>
        </TrackerItemContainer>
    )
}

export default TrackerItem;