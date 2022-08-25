import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPeopleThunk } from '../redux/actions'; //Calling the response from the api
import { Link } from 'react-router-dom'; //Link help you for be redirected to another page of the app
import '../styles/Home.css'

const favorites = []; //Making and empty array where will save the favorite characters

const Home = () => {

    const dispatch = useDispatch();
    const people = useSelector(state => state.people); //Making the variable with useSelector for to call the datas from the api

    useEffect(() => {
        dispatch(getPeopleThunk());
    }, [dispatch]);

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
                                onClick={() => favorites.push(peopleItem.url)}//Adding the specific character to the array favorites 
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