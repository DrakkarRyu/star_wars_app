import React from 'react';

const FavoriteCharacters = (props) => {
    return (
        <div>
            <h2 key={props.url}>{props.name}</h2>
            <p>Height: {props.height}</p>
            <p>Mass: {props.mass}</p>
        </div>
    );
};

export default FavoriteCharacters