import styled, { ThemedStyledFunction } from "styled-components";
import { ArrowTop, ArrowBottom, ArrowTopDefault, ArrowBottomDefault, ItemArrowContainer, ItemArrowDefault } from "./ItemArrow/styles";
import colors from "../../../styles/colors";
import { ITrackerQuantity } from "../../../model/CovidData";

export const TrackerItemContainer = styled.div`
    display: flex;
    justify-content: center;
    /* Overview */
    &:first-of-type{
        @media (min-width: 992px){
            flex-basis: 100%;
            flex-direction: column-reverse;
            align-items: center;
        }
        ${ArrowTop}{
            border-left: transparent;
        }
    }
    &:not(:first-of-type){
        @media (min-width: 992px){
            flex-direction: column;
            justify-content: flex-start;
            ${ArrowTop}, ${ArrowBottom}{
                border-bottom: none;
            }
        }
    }
    &:last-of-type{
        ${ArrowBottom}{
            border-left-color: transparent;
            @media (min-width: 992px){
                border-left-color: ${colors.arrowColor};
            }
        }
    }
`;


export const ItemLabel = styled.div`
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    margin-top: 0.25rem;
    @media (min-width: 992px){
        height:76px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;


export const ItemQuantity = styled.div<ITrackerQuantity>`
    padding: 0 2rem;
    font-size: 2.5rem;
    text-align: center;
    color: ${colors.trackerQuantityFont};
    background-color: ${props => props.color};
`;

export const ItemOverview = styled.div`
    max-width: 200px;
    width: 100%;
    margin-left: 0.25rem;
    /* Nested */
    ${TrackerItemContainer}{
        svg{
            display: none;
        }
        &:not(:first-of-type){
            @media (min-width: 992px){
                flex-direction: row;
                justify-content: center;
            }
        }
        &:last-of-type{
            ${ArrowBottom}{
                border-left-color: transparent;
    
            }
        }
        ${ItemLabel}{
            font-size: 0.8125rem;
            height:unset;
        }
        ${ItemQuantity}{
            font-size: 2rem;
        }
        ${ArrowTop}, ${ArrowBottom}{
            border-width: 2px !important;
        }
        ${ItemArrowContainer}{
            @media (min-width: 992px){
                ${ItemArrowDefault}
            }
        }
        ${ArrowTop}{
            @media (min-width: 992px){
                ${ArrowTopDefault}
            }
        }
        ${ArrowBottom}{
            @media (min-width: 992px){
                ${ArrowBottomDefault}
            }
        }
    }
    
    @media (min-width: 992px){
        max-width: 150px;
    }
`;