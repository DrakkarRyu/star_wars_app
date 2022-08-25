import React, { useState } from 'react';
import { FavoriteCharacters } from '../components';
import '../styles/Favorites.css'

const Favorites = () => {
    const [people, setPeople] = useState(JSON.parse(localStorage.getItem("favorites")))

    const deletemyfavorites = (i) => {
        people.splice(i, 1);
        setPeople([...people])
        const peopleJson = JSON.stringify(people);
        localStorage.setItem("favorites", peopleJson)
    }

    return (
        <div>
            <h1>Favorites</h1>
            <ul className='container'>
                {
                    !people ? (
                        <div>There are not favorites</div>
                    ) : (
                        people.map((person, i) => (
                            <li className='card' key={person.url}>
                                <FavoriteCharacters key={person.url} name={person.name} />
                                <button
                                    onClick={() => deletemyfavorites(i)}//Delete the specific character from the array favorites 
                                >
                                    Delete from favorites
                                </button>
                            </li>
                        ))
                    )
                }
            </ul>
        </div>
    );
};

export default Favorites;   