import React from 'react';
//import axios from 'axios';
//import { useState, useEffect } from 'react';
//import favorites from './Home';


const Favorites = () => {
    //const dispatch = useDispatch();
    // const newFavorite = favorites
    // const [myfavorites, setMyFavorites] = useState([])


    /* for (let i; i < newFavorite.length; i++)
         useEffect(() => {
             axios.get(`${i}`)
                 .then(res => setMyFavorites(res.data.results));
         }, [dispatch])*/

    return (
        <div>
            <h1>Favorites</h1>
            <ul className='Favorite people'>
                {/*
                    myfavorites.map(peopleItem => (
                        <li className='card' key={peopleItem.url}>
                            <h2>Name: {peopleItem.name}</h2>
                            <p>Height: {peopleItem.height}</p>
                            <p>Mass: {peopleItem.mass}</p>
                            <p>Birth date: {peopleItem.birth_year}</p>
                            <button
                                key={peopleItem.url}
                                onClick={() => favorites.slice(peopleItem.url)}
                            >
                                delete from Favorites
                            </button>
                        </li>
                    ))
                */}
            </ul>
        </div>
    );
};

export default Favorites;   