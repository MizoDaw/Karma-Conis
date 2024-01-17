import React from 'react';
import { TSpecialProperty } from '../../Layout/app/Types';


type TSpecialProperties = {data : TSpecialProperty[]}

const SpecialProperties: React.FC<TSpecialProperties> = ({data}) => {
  return (
    <div className='special_properties'>
      {data?.map((property, index) => (
        <div className='special_property' key={index}>
          {property.icon}
          <div>
            <h5>{property.title}</h5>
            <p>{property.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpecialProperties;
