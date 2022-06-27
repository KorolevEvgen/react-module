import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className={'headerWrap'}>
            <NavLink to={'character'}>Character</NavLink>
            <NavLink to={'location'}>Location</NavLink>
            
        </div>
    );
};

export default Header;
