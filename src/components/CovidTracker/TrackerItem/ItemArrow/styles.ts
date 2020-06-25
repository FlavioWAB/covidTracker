import styled from "styled-components";
import colors from "../../../../styles/colors";
import { ItemQuantity } from "../styles";

export const ItemArrowDefault:string = `
    width: 30px;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    height: unset;
`;

export const ItemArrowContainer = styled.div`
    ${ItemArrowDefault}
    @media (min-width: 992px){
        flex-direction: row;
        width: 100%;
        height: 30px;
        justify-content:center;
        align-self: unset;
    }
`;

export const ArrowTopDefault:string = `
    flex-basis: 100%;
    margin-left: 1rem;
    border-left: 4px solid ${colors.arrowColor};
    border-bottom: 4px solid ${colors.arrowColor};
    border-right: none;
    flex-direction: column;
    max-height: 140px;
`

export const ArrowTop = styled.div`
    ${ArrowTopDefault}
    @media (min-width: 992px){
        margin-left: 0;
        flex-basis: 310px;
        border-left: none;
        border-right: 2px solid ${colors.arrowColor};
        flex-direction: column-reverse;
    }
`;

export const ArrowBottomDefault:string = `
    flex-basis: 100%;
    height: 100%;
    margin-left: 1rem;
    border-left: 4px solid ${colors.arrowColor};
`;

export const ArrowBottom = styled.div`
    ${ArrowBottomDefault}
    @media (min-width: 992px){
        height: unset;
        flex-direction: column-reverse;
        border-bottom: 4px solid ${colors.arrowColor};
        border-left: 2px solid ${colors.arrowColor};;
        flex-basis: 310px;
        margin: 0;
    }
`;