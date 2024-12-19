import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";
import "../App.css";

function Movies() {
  const [movieData, setMovieData] = useState(null);
  useEffect(() => {

    const fetchMovies = async () => {
      try{
        const response = await Axios.get("https://omdbapi.com/?apikey=27c144&t=aadu")
        setMovieData(response.data);
      }catch (error) {
        console.log(error);
      }
    } 
  }, []);

  if (!movieData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="Movie-field">
      <div className="left-div">
        <img
          src={movieData.Poster}
          alt="movie poster"
        />
      </div>
      <div className="movie-info">
      <h1 className="title">{movieData.Title}</h1>
        <h3 className="rating">IMBD rating ⭐<span className="rating-value"> {movieData.imdbRating}</span></h3>
      <div className="flex">
        <p className="release-date"> <span className="data-name">Released:</span> {movieData.Released}</p>
        <p className="directors"> <span className="data-name">Director:</span> {movieData.Director}</p>
      </div>
        <div className="genre">
          <div className="genre-item">Action</div>
          <div className="genre-item">Adventure</div>
          <div className="genre-item">Sci Fi</div>
        </div>
        <p className="cast"> <span className="data-name">Cast:</span> {movieData.Actors}</p>
        <div className="plot">{movieData.Plot}</div>
      </div>
    </div>
  );
}

export default Movies;
