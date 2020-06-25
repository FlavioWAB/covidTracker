import { ReactChildren } from "react";

export interface ICovidGroup {
    label: string;
    quantity: number;
    description: string;
    color?: string;
    children?: ICovidGroup[];
    lastUpdated?: string;
}

export interface ICovidOccupation {
    percentage: number;
}

export interface ICovidTracker {
    covidData: ICovidGroup;
}

export interface IItemImage {
    color: string;
    overview?: boolean;
}

export interface IHomeBanner {
    date: string;
}