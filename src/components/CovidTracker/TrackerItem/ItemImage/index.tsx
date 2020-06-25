import React from 'react';
import { IItemImage } from '../../../../model/CovidData';
import OverviewImage from './OverviewImage';
import ChildImage from './ChildImage';
import { ItemImageContainer } from './style';

const ItemImage: React.FC<IItemImage> = ({ color, overview = false }) => {
    return (
        <ItemImageContainer>
            {overview ?  <OverviewImage color={color}/> : <ChildImage color={color} /> }
        </ItemImageContainer>
    )
}

export default ItemImage;