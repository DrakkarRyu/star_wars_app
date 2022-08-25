import React from 'react';

const FavoriteCharacters = (props) => {
    return (
        <div>
            <h2 key={props.url}>{props.name}</h2>
        </div>
    );
};

export default FavoriteCharacters