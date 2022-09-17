import React, { useState, useEffect } from "react";
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";
import './App.css';


const API_URL = "http://www.omdbapi.com?apikey=f3ffe9c7";

const movie1 = {
  Title: "Spiderman",
  Year: "2010",
  imdbID: "tt1785572",
  Type: "movie",
  Poster: "N/A",
};


const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(()=> {
    searchMovies('Spiderman');
  }, []);

  const searchMovies = async (title) => {
     const response = await fetch(`${API_URL}&${title}`);
     const data = await response.json();

     setMovies(data.Search);
  };


  return (
    <div className="app">
      <h1>Movie World</h1>

      <div className="search">
        <input
        placeholder="Search for movies"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
        src={SearchIcon}
        alt="search"
        onClick = {()=> searchMovies(searchTerm)}
        />
    </div>

      {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
            <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
            <div className="empty">
              <h2> No movies found </h2>
            </div>
            )}
    </div>
  );
};

export default App;
