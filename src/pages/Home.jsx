import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPeopleThunk } from '../redux/actions';
import { Link } from 'react-router-dom';
import '../styles/Home.css'

const favorites = [];
console.log(favorites)

const Home = () => {

    const dispatch = useDispatch();
    const people = useSelector(state => state.people);

    useEffect(() => {
        dispatch(getPeopleThunk());
    }, [dispatch]);

    /*
    const addToFavorites = () => {
        favorites.push()
        console.log(favorites.push())
    }
    */
    return (
        <div className='HomePage'>
            <Link to='/favorites'>Favorites</Link>
            <h1>Home Page</h1>
            <ul className='Container'>
                {
                    people.map(peopleItem => (
                        <li className='card' key={peopleItem.url}>
                            <h2>Name: {peopleItem.name}</h2>
                            <p>Height: {peopleItem.height}</p>
                            <p>Mass: {peopleItem.mass}</p>
                            <p>Birth date: {peopleItem.birth_year}</p>
                            <button
                                key={peopleItem.url}
                                onClick={() => favorites.push(peopleItem.url)}
                            >
                                Add to Favorites
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Home; 