import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className={'headerWrap'}>
            <div><img src="https://images-na.ssl-images-amazon.com/images/I/91MteSqsrJL.jpg"/></div>
            <div>
                <NavLink to={'character'}>Character</NavLink>
                <NavLink to={'location'}>Location</NavLink>
            </div>

        </div>
    );
};

export default Header;
