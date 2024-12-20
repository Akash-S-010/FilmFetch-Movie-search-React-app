import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../App.css";
import Header from "./Header";

function Movies() {
  const [movieData, setMovieData] = useState(null);
  const [movieName, setMovieName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const fetchMovies = async () => {
    if (!movieName) return;
    try {
      const response = await Axios.get(
        `https://www.omdbapi.com/?apikey=27c144&t=${movieName}`
      );
      if (response.data.Response === "False") {
        setErrorMessage(response.data.Error); // Set error message if no movie is found
        setMovieData(null); // Clear previous movie data
      } else {
        setMovieData(response.data);
        setErrorMessage(""); // Clear error message on valid data
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Error occurred while fetching the movie.");
      setMovieData(null);
    }
  };

  return (
    <div>
      <Header
        movieName={movieName}
        setMovieName={setMovieName}
        fetchMovies={fetchMovies}
      />

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      {movieData ? (
        <div className="Movie-field">
          <div className="left-div">
            <img src={movieData.Poster} alt="movie poster" />
          </div>
          <div className="movie-info">
            <h1 className="title">{movieData.Title}</h1>
            <h3 className="rating">
              IMDB rating ⭐
              <span className="rating-value"> {movieData.imdbRating}</span>
            </h3>
            <div className="flex">
              <p className="release-date">
                <span className="data-name">Released:</span>{" "}
                {movieData.Released}
              </p>
              <p className="directors">
                <span className="data-name">Director:</span>{" "}
                {movieData.Director}
              </p>
            </div>
            <div className="genre">
              {movieData.Genre ? (
                movieData.Genre.split(", ").map((genre, index) => (
                  <div key={index} className="genre-item">
                    {genre}
                  </div>
                ))
              ) : (
                <p>No genres available</p>
              )}
            </div>
            <p className="cast">
              <span className="data-name">Cast:</span> {movieData.Actors}
            </p>
            <div className="plot">{movieData.Plot}</div>
          </div>
        </div>
      ) : (
        !errorMessage && (
          <p className="no-movie-message">
            Search for a movie to see its details.
          </p>
        )
      )}
    </div>
  );
}

export default Movies;
