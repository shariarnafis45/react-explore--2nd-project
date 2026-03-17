import { SquareCheckBig } from 'lucide-react';
import React from 'react';

const PricingFeatures = ({feature}) => {
    return (
        <p className='flex gap-3'><SquareCheckBig></SquareCheckBig> {feature}</p>
    );
};

export default PricingFeatures;