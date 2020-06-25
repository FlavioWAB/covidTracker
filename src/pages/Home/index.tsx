import React, { useState } from 'react';
import { ICovidGroup } from '../../model/CovidData';
import GlobalStyle from '../../styles/global';
import { 
    HomeContainer,
    TrackerWrapper
} from './styles';
import HomeBanner from '../../components/HomeBanner';
import CovidTracker from '../../components/CovidTracker';
import CovidOccupation from '../../components/CovidOccupation';
import CovidCategoriesDescription from '../../components/CovidCategoriesDescription';

const Home: React.FC = () => {

    const covidDataPlaceholder: ICovidGroup = {
        label: 'Pessoas Notificadas',
        quantity: 1993,
        description: 'Pessoas que apresentam algum tipo de síndrome gripal, desde sintomas leves até casos com complicações e se tornaram “suspeitos” para Covid-19.',
        color: '#3D5EA5',
        children: [
            {
                label: 'Notificados que no início da pandemia não fizeram exames',
                quantity: 193,
                color: '#6E6FB0',
                description: 'Pessoas que no início da Pandemia apresentaram sintomas leves de síndrome gripal, ficaram em isolamento por 14 dias e ainda serão testadas para Covid-19.'
            },{
                label: 'Suspeitos aguardando resultado dos exames',
                quantity: 168,
                color: '#D28D30',
                description: 'Pessoas que apresentam sintomas leves de síndrome gripal e ficam em isolamento domiciliar por 14 dias ou são internadas caso apresentem complicações de saúde. Aguardam resultado de testes para Covid-19.',
                children: [
                    {
                        label: 'Internados',
                        quantity: 4,
                        color: '#D28D30',
                        description: 'Pacientes suspeitos para Covid-19. Permanecem em observação até que haja melhora no quadro clínico.'
                    },{
                        label: 'Óbitos em investigação',
                        quantity: 2,
                        color: '#D28D30',
                        description: 'Pacientes que foram a óbito antes da chegada do resultado do teste. Com o resultado, estes evoluem para óbitos confirmados ou para óbitos descartados para a Covid-19.'
                    },
                ]
            },{
                label: 'Confirmados',
                quantity: 78,
                description: 'Casos suspeitos que evoluíram para confirmados por meio do teste para Covid-19.',
                color: '#C62128',
                children: [
                    {
                        label: 'Óbitos/COVID',
                        quantity: 1,
                        color: '#C62128',
                        description: 'Pacientes que foram notificados, testados e foram a óbito com resultado positivo para a Covid-19.'
                    },{
                        label: 'Internados',
                        quantity: 4,
                        color: '#C62128',
                        description: 'Pacientes confirmados para Covid-19. Permanecem em observação até que haja melhora no quadro clínico.'
                    },{
                        label: 'Em acompanhamento',
                        quantity: 46,
                        color: '#C62128',
                        description: 'Pacientes que apresentaram teste positivo para Covid-19 e ficam em isolamento domiciliar de no mínimo 14 dias.'
                    },{
                        label: 'Curados',
                        quantity: 27,
                        color: '#C62128',
                        description: 'Pacientes com teste positivo para Covid-19 e após período de acompanhamento ou internação realizaram novo teste, obtendo resultado negativo.'
                    }
                ]
            },{
                label: 'Confirmados peniténciaria (Detentos)',
                quantity: 6,
                description: 'Casos confirmados de detentos que foram testados e tiveram resultado positivo para a Covid-19.',
                color: '#7A3C25',
            },{
                label: 'Descartados',
                quantity: 1547,
                description: 'Casos que foram notificados, testados e o resultado deu negativo para Covid-19.',
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
            <CovidCategoriesDescription covidData={covidData} />
        </HomeContainer>
    )
}

export default Home;