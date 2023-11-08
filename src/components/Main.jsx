import { useState } from "react";
import movies from "../data/movies.json";

function Main(){

    const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

    const deleteMovie = (movieId) => {
        const newList = moviesToDisplay.filter( (movieDetails) => {
            return movieDetails.id !== movieId;
        });
        
        // moviesToDisplay = newList; // NEVER UPDATE STATE DIRECTLY !!
        // moviesToDisplay.pop(); // NEVER UPDATE STATE DIRECTLY !!
        setMoviesToDisplay(newList);
    }

    let message = "";
    if(moviesToDisplay.length){
        message = <h1>List of movies</h1>
    } else {
        message = <h1>Sorry, no movies to display</h1>
    }

    return (
        <>

            {message}

            {moviesToDisplay.map(function(movieObj, index){
                return(
                    <div key={movieObj.id}>

                        {movieObj.imgURL 
                            ? <img src={movieObj.imgURL}  /> 
                            : <img src="https://dummyimage.com/182x268/ffffff/000000" />
                        }

                        <h2>{movieObj.title}</h2>
                        <p>Rating: {movieObj.rating}</p>

                        { movieObj.rating > 8 && <p>RECOMMENDED</p>}
                        

                        <button onClick={function(){ deleteMovie(movieObj.id) }}>Delete</button>
                        
                    </div>
                );
            })}

        </>
    );
}

export default Main;