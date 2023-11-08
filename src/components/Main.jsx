import movies from "../data/movies.json";

function Main(){

    return (
        <>
            <h1>List of movies</h1>

            {movies.map(function(movieObj, index){
                return(
                    <div key={movieObj.id}>
                        <h2>{movieObj.title}</h2>
                        <p>Rating: {movieObj.rating}</p>

                        <button>Delete this movie</button>
                    </div>
                );
            })}

        </>
    );
}

export default Main;