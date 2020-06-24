import React from 'react';
import { IItemImage } from '../../../../model/CovidData';
import OverviewImage from './OverviewImage';
import ChildImage from './ChildImage';

const ItemImage: React.FC<IItemImage> = ({ color, overview = false }) => {
    return (
        <>
            {overview ?  <OverviewImage color={color}/> : <ChildImage color={color} /> }
        </>
    )
}

export default ItemImage;