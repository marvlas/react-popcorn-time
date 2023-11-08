import { useState } from "react";
import movies from "../data/movies.json";

function Main(){

    // const [something, setSomething] = useState(initialValue);

    const [moviesToDisplay, setMoviesToDisplay] = useState(movies);


    const deleteMovie = (movieId) => {


        const newList = moviesToDisplay.filter( (movieDetails) => {
            return movieDetails.id !== movieId;
            
            // if(movieDetails.id === movieId){
            //     return false; // will not go to the final array
            // } else {
            //     return true; // will be in the final array
            // }
        });
        
        // moviesToDisplay = newList; // NEVER UPDATE STATE DIRECTLY !!
        // moviesToDisplay.pop(); // NEVER UPDATE STATE DIRECTLY !!
        setMoviesToDisplay(newList);
    }

    return (
        <>
            <h1>List of movies</h1>

            {moviesToDisplay.map(function(movieObj, index){
                return(
                    <div key={movieObj.id}>
                        <h2>{movieObj.title}</h2>
                        <p>Rating: {movieObj.rating}</p>

                        <button onClick={function(){ deleteMovie(movieObj.id) }}>Delete</button>
                        
                    </div>
                );
            })}

        </>
    );
}

export default Main;