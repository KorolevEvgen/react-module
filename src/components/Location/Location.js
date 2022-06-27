import React from 'react';
import {Link} from 'react-router-dom';

import './Location.css'

const Location = ({location}) => {
   const {id,name,type,dimension} = location;

    return (
        <div>
            <Link to={id.toString()} state={location}>
                <div className={'locationWrap'}>
                    <div>id: {id}</div>
                    <div>Name: {name}</div>
                    <div>Type: {type}</div>
                    <div>Dimension: {dimension}</div>
                </div>
            </Link>

        </div>
    );
};

export default Location;
