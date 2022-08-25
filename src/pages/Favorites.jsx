import React, { useState } from 'react';
import favorites from './Home';
import { FavoriteCharacters } from '../components';
import '../styles/Favorites.css'

const Favorites = () => {
    const [people] = useState([favorites])

    return (
        <div>
            <h1>Favorites</h1>
            {
                people.map((person) => (
                    (
                        <li className='card' key={person}>
                            <FavoriteCharacters key={person.url} name={person.name} />
                        </li>
                    )
                ))
            }
        </div>
    );
};

export default Favorites;   