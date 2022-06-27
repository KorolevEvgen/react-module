import React, {useEffect, useState} from 'react';
import {locationService} from '../../services/location.service';
import LocationCard from '../../components/LocationCard/LocationCard';
import './LocationPage.css'

const LocationPage = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        locationService.getAll().then(value => setLocations(value.results));
    });
    return (
        <div>
            <div className={'locationPageWrap'}>
                {locations.map(location => <LocationCard key={location.id} location={location}/>)}
            </div>
        </div>
    );
};

export default LocationPage;
