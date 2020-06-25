import styled from "styled-components";
import ViewContainer from "../../ViewContainer";
import { ICategoryDescriptionWrapper } from "../../../model/CovidData";

export const CategoryDescriptionGroupContainer = styled.div<ICategoryDescriptionWrapper>`
    background-color: ${props => props.color};
    padding: 0.5rem 1rem;
    margin-bottom: 0.5rem;
`;