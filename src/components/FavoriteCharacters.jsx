import React from 'react';

const FavoriteCharacters = (props) => {
    return (//showing the information of the favorite characters 
        <div>
            <h2 key={props.url}>{props.name}</h2>
            <p>Height: {props.height}</p>
            <p>Mass: {props.mass}</p>
        </div>
    );
};

export default FavoriteCharacters