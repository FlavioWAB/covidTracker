import React from 'react';
import { CovidTrackerContainer } from './styles';
import { ICovidTracker } from '../../model/CovidData';
import TrackerItem from './TrackerItem';

const CovidTracker: React.FC<ICovidTracker> = ({ covidData }) => {
    return (
        <CovidTrackerContainer>
            <TrackerItem covidData={covidData} />
            {covidData.children.map(covidChild => <TrackerItem covidData={covidChild} />)}
        </CovidTrackerContainer>
    )
}

export default CovidTracker;