import React from 'react';
import {
    ItemArrowContainer,
    ArrowTop,
    ArrowBottom
} from './styles'

const ItemArrow: React.FC = () => {
    return (
        <ItemArrowContainer>
            <ArrowTop />
            <ArrowBottom />
        </ItemArrowContainer>
    )
}

export default ItemArrow;