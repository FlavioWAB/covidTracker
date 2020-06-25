export interface ICovidGroup {
    label: string;
    quantity: number;
    description: string;
    color: string;
    children?: ICovidGroup[];
}

export interface ICovidOccupation {
    percentage: number;
}

export interface ICovidTracker {
    covidData: ICovidGroup;
}
export interface ICovidTrackerItem extends ICovidTracker {
    overview?: boolean;
}

export interface IItemImage {
    color: string;
    overview?: boolean;
}

export interface ITrackerQuantity {
    color: string;
}