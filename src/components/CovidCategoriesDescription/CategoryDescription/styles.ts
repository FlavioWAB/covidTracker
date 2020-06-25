import styled from "styled-components";
import ViewContainer from "../../ViewContainer";
import { ICategoryDescriptionWrapper } from "../../../model/CovidData";
import colors from "../../../styles/colors";

export const CategoryDescriptionWrapper = styled.div<ICategoryDescriptionWrapper>`
    background-color: ${props => props.color};
`;

export const CategoryDescriptionContainer = styled(ViewContainer)`
    display: flex;
    flex-direction: column;
    @media (min-width: 992px){
        flex-direction: row;
    }
`;

export const DescriptionTitle = styled.p`
    list-style-type: disc;
    display: list-item;
    list-style: inside;
    color: ${colors.descriptionTitle};
    margin-left: 0;
    margin-right: 0.5rem;
    @media (min-width: 768px){
        white-space: nowrap;
    }
`;

export const DescriptionBody = styled.p`
    color: ${colors.descriptionBody};
`;