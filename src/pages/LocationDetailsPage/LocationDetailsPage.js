import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';

import './LocationDetailsPage.css'

const LocationDetailsPage = () => {

    const [location,setLocation] = useState(null);
    const {state} = useLocation();
    useEffect(()=>{
        if (state){
            setLocation(state)
            return
        }
    })

    return (
        <div>
            {location && (
                <div className={'locationDetailsPageWrap'}>
                    <div>id: {location.id}</div>
                    <div>Name: {location.name}</div>
                    <div>Type: {location.type}</div>
                    <div>Dimension: {location.dimension}</div>
                </div>
            )}
        </div>
    );
};

export default LocationDetailsPage;
