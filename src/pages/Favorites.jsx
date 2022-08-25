import React from 'react';
import favorites from './Home';


const Favorites = () => {
    return (
        <div>
            <h1>Favorites</h1>

        </div>
    );
};
console.log(localStorage.getItem(favorites))

export default Favorites;   