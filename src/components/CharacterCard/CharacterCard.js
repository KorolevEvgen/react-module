import React from 'react';
import {Link} from 'react-router-dom';
import './CharacterCard.css';

const CharacterCard = ({ character }) => {
    const { id, name, image } = character;

    return (

        <Link to={id.toString()} state={character}>
            <div className={'characterCardWrap'}>
                    <img src={image} alt={name}/>
                    <h2>{name}</h2>
            </div>
        </Link>


    );
};

export default CharacterCard;
