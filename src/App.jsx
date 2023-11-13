import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
// import movies from "./data/movies.json";
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import MovieList from './components/MovieList'
import AddMovie from './components/AddMovie';
import About from './components/About';
import MovieDetails from './components/MovieDetails';


function App() {

  axios
    .get("https://json-server-movies-api.adaptable.app/movies/")
    .then( () => {
      console.log('success')
    })
    .catch( () => {
      console.log('request failed')
    })

  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);


  const addNewMovie = (newMovie) => {
    // find out id for the movie that we want to add
    const movieIds = moviesToDisplay.map(function (elm) {
      return elm.id;
    });
    const maxId = Math.max(...movieIds);
    const nextId = maxId + 1;

    // prepare an object with the details of the new movie (inc. the id)
    const movieDetails = {
      ...newMovie,
      id: nextId
    }

    const newList = [movieDetails, ...moviesToDisplay];
    setMoviesToDisplay(newList);
  }

  
  const deleteMovie = (movieId) => {
    const newList = moviesToDisplay.filter((movieDetails) => {
      return movieDetails.id !== movieId;
    });
    setMoviesToDisplay(newList);
  }


  return (
    <>
      <Header numberOfMovies={moviesToDisplay.length} />
      <AddMovie callbackToAddMovie={addNewMovie} />

      <Routes>
        <Route path='/' element={<MovieList moviesArr={moviesToDisplay} callbackToDelete={deleteMovie} />} />
        <Route path='/movies/:movieId' element={<MovieDetails moviesArr={moviesToDisplay} />}  />
        <Route path='/about' element={<About />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
