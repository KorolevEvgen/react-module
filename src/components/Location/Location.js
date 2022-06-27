import React from 'react';
import {Link} from 'react-router-dom';

const Location = ({location}) => {
   const {id,name,type,dimension} = location;

    return (
        <div>
            <Link to={id.toString()} state={location}>
                <div>
                    <div>id: {id}</div>
                    <div>Name: {name}</div>
                    <div>Type: {type}</div>
                    <div>Dimension: {dimension}</div>
                    <hr/>
                </div>
            </Link>

        </div>
    );
};

export default Location;
