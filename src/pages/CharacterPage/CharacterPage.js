import React, {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom';

import {characterService} from '../../services/character.service';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import './CharacterPage.css'

const CharacterPage = () => {
    const [characters,setCharacters] = useState([])

    useEffect(()=>{
        characterService.getAll().then(value => setCharacters(value.results))
    })
    return (
        <div>
           <div className={'characterPageWrap'}>
               {characters.map(character => <CharacterCard key={character.id} character={character}/>)}
           </div>

        </div>
    );
};

export default CharacterPage;
