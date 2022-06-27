import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';

import './CharacterDetailsPage.css'

const CharacterDetailsPage = () => {

    const [character,setCharacter] = useState(null);
    const {state} = useLocation();

    useEffect(()=>{
        if (state){
            setCharacter(state)
            return
        }
    })

    return (
        <div>

            {character && (

                <div className={'characterDetailsWrap'}>
                  <div><img src={character.image} alt={character.name}/></div>
                    <div className={'characterDetailsText'}>
                    <div>Name: {character.name}</div>
                    <div>Status: {character.status}</div>
                    <div>Species: {character.species}</div>
                    <div>Gender: {character.gender}</div>
                    <div>Location: {character.location.name}</div>
                    </div>
                </div>

            )}

        </div>
    );
};

export default CharacterDetailsPage;
