import React from "react";
import logo from "../assets/filmfetch.png";
import "../App.css";

function Header() {

  return (
    <div className="header">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Your Movies.."
          onChange={(e) => setSearchItem(e.target.value)}
        />
        <button onClick={fetchMovies}>Search</button>
      </div>
    </div>
  );
}

export default Header;
