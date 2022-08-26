import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPeopleThunk } from '../redux/actions'; //Calling the response from the api
import { Link } from 'react-router-dom'; //Link help you for be redirected to another page of the app
import '../styles/Styles.css'
import InfiniteScroll from 'react-infinite-scroll-component'; //For to make the infinite scroll


// Making the function for to get the characters
const Home = () => {

    const dispatch = useDispatch();
    const people = useSelector(state => state.people); //Making the variable with useSelector for to call the datas from the api
    const [page, setPage] = useState(1); //Making the varials for page for to use in the infinity scroll
    const hasMore = true; //In this case hasMore with value true mean that always i'll have new pages for to open

    //Dispatching the thunk for to get the array of characters
    useEffect(() => {
        dispatch(getPeopleThunk(1))
        setPage(prevState => prevState + 1) //It says to the thunk => Previous State =  Previous State + 1 for to work with the call of axios
    }, [dispatch])

    // A function for to make a call to the api and to get the next page with more characters
    const fetchCharacters = () => {
        setPage(prevState => prevState + 1)
        setTimeout(() => {
            if (hasMore) { //If the condition is true will send a petition to the thunk for to get more pages
                dispatch(getPeopleThunk(page))
            }
        }, 1000)// Waiting 1 second , 1000 miliseconds = 1 second 
    }

    //Saving the favorite characters in the local storage in format JSON 
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
            <header>
                <Link to='/favorites'>Favorites </Link>
            </header>
            <h1>Home Page</h1>
            <InfiniteScroll //Making the basic structure for infinite scroll 
                dataLength={people.length}//{items.length}This is important field to render the next data 
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
                                    className='button__add'
                                    key={personItem.url}
                                    onClick={() => addMyFavorites(personItem)}//Adding the specific character to the array favorites 
                                >
                                    <i class="fa-solid fa-heart"></i>
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