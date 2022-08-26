import React, { useState } from 'react';
import { FavoriteCharacters } from '../components';
import '../styles/Favorites.css'

//Calling the information saved in the local storage from the page Home
const Favorites = () => {
    const [people, setPeople] = useState(JSON.parse(localStorage.getItem("favorites")))

    //Deleting the specific character from the local storage and from the favorites
    const deleteMyFavorites = (i) => {
        people.splice(i, 1);
        setPeople([...people])
        const peopleJson = JSON.stringify(people);
        localStorage.setItem("favorites", peopleJson)
    }

    return (
        <div>
            <h1>Favorites</h1>
            <ul className='container'>
                {//Making a conditional if not exist a character in favorites 
                    !people ? (
                        <div>There are not favorites</div>
                    ) : (
                        people.map((person, i) => (//showing the information of the favorite characters calling the information from the component
                            <li className='card' key={person.url}>
                                <FavoriteCharacters key={person.url} name={person.name} height={person.height} mass={person.mass} />
                                <button
                                    onClick={() => deleteMyFavorites(i)}//Delete the specific character from the array favorites 
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