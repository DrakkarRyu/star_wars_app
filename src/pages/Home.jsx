import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPeopleThunk } from '../redux/actions'; //Calling the response from the api
import { Link } from 'react-router-dom'; //Link help you for be redirected to another page of the app
import '../styles/Home.css'
import InfiniteScroll from 'react-infinite-scroll-component'; //For to make the infinite scroll


// Making the function for to get the characters
const Home = () => {

    const dispatch = useDispatch();
    const people = useSelector(state => state.people); //Making the variable with useSelector for to call the datas from the api
    const [page, setPage] = useState(1);
    const hasMore = true;

    useEffect(() => {
        dispatch(getPeopleThunk(1))
        setPage(prevState => prevState + 1)
    }, [dispatch])

    const fetchCharacters = () => {
        setPage(prevState => prevState + 1)
        setTimeout(() => {
            if (hasMore) {
                dispatch(getPeopleThunk(page))
            }
        }, 1000)
    }

    //Saving the favorite characters in the local storage 
    const addMyFavorites = (personItem) => {
        const currentFavorites = localStorage.getItem("favorites")
        if (currentFavorites) {
            let favorites = JSON.parse(currentFavorites);
            favorites.push(personItem);
            favorites = JSON.stringify(favorites);
            localStorage.setItem("favorites", favorites)
        } else {
            const favorites = JSON.stringify([personItem])
            localStorage.setItem("favorites", favorites)
        }
    }

    return (
        <div className='HomePage'>
            <Link to='/favorites'>Favorites </Link>
            <h1>Home Page</h1>
            <InfiniteScroll
                dataLength={people.length}
                hasMore={hasMore}
                next={fetchCharacters}>
                <ul className='Container'>
                    {
                        people.map(personItem => (//showing the informations of the characters in cards
                            <li className='card' key={personItem.url}>
                                <h2>Name: {personItem.name}</h2>
                                <p>Height: {personItem.height}</p>
                                <p>Mass: {personItem.mass}</p>
                                <p>Birth date: {personItem.birth_year}</p>
                                <button
                                    key={personItem.url}
                                    onClick={() => addMyFavorites(personItem)}//Adding the specific character to the array favorites 
                                >
                                    Add to Favorites
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </InfiniteScroll>
        </div>
    );
};


export default Home; 