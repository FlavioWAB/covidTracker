import styled from "styled-components";

export const CovidTrackerContainer = styled.div`
    width: 100%;
    max-width: 600px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: auto;
    @media (min-width: 992px){
        max-width: initial;
        flex-direction: row;
        flex-wrap: wrap;
    }
`;