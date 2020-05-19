import React from 'react';

const Movies = (props) => {
    return (
        <div>
            <p>My Favourite film is {props.film}</p>
            <p>My Favourite genre is {props.genre}</p>
        </div>
    )
}

export default Movies;