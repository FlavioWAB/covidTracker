import React, { useState } from 'react';
import { ICovidGroup } from '../../model/CovidData';
import GlobalStyle from '../../styles/global';
import { HomeContainer } from './styles';
import HomeBanner from '../../components/HomeBanner';
import CovidTracker from '../../components/CovidTracker';
import CovidOccupation from '../../components/CovidOccupation';

const Home: React.FC = () => {

    const covidDataPlaceholder: ICovidGroup = {
        label: 'Pessoas Notificadas',
        quantity: 1993,
        description: 'lorem',
        color: '#3D5EA5',
        children: [
            {
                label: 'Notificados que no inínio da pandemia não fizeram exames',
                quantity: 193,
                description: 'lorem',
                color: '#6E6FB0',
            },{
                label: 'Suspeitos aguardando resultado dos exames',
                quantity: 168,
                description: 'lorem',
                color: '#D28D30',
                children: [
                    {
                        label: 'Internados',
                        quantity: 4,
                        description: 'lorem',
                    },{
                        label: 'Óbitos em investigação',
                        quantity: 2,
                        description: 'lorem',
                    },
                ]
            },{
                label: 'Confirmados',
                quantity: 78,
                description: 'lorem',
                color: '#C62128',
                children: [
                    {
                        label: 'Óbitos/COVID',
                        quantity: 1,
                        description: 'lorem',
                    },{
                        label: 'Internados',
                        quantity: 4,
                        description: 'lorem',
                    },{
                        label: 'Em acompanhamento',
                        quantity: 46,
                        description: 'lorem',
                    },{
                        label: 'Curados',
                        quantity: 27,
                        description: 'lorem',
                    }
                ]
            },{
                label: 'Confirmados peniténciaria (Detentos)',
                quantity: 6,
                description: 'lorem',
                color: '#7A3C25',
            },{
                label: 'Descartados',
                quantity: 1547,
                description: 'lorem',
                color: '#2D673F',
            }
        ],
        lastUpdated: '01/01/1970'
    };

    const [covidData,setCovidData] = useState<ICovidGroup>(covidDataPlaceholder);

    return (
        <HomeContainer>
            <GlobalStyle />
            <HomeBanner date={covidData.lastUpdated}/>
            <CovidTracker covidData={covidData} />
            <CovidOccupation percentage={21}/>
        </HomeContainer>
    )
}

export default Home;