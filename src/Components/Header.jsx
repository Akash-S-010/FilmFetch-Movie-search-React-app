import React from "react";
import logo from "../assets/filmfetch.png";
import "../App.css";

function Header({ movieName, setMovieName, fetchMovies }) {
  const handleSearch = () => {
    fetchMovies();
  };

  return (
    <div className="header">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Your Movies.."
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}

export default Header;
