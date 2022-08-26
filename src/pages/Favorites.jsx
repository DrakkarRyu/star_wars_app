import React, { useState } from 'react';
import { FavoriteCharacters } from '../components';
import { Link } from 'react-router-dom';
import '../styles/Styles.css'

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
            <header>
                <Link to='/'>Home</Link>
            </header>
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
                                    className='button__delete'
                                    onClick={() => deleteMyFavorites(i)}//Delete the specific character from the array favorites 
                                >
                                    <i class="fa-solid fa-heart-crack"></i>
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