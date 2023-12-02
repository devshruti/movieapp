import React, { useState, useEffect } from 'react';
import "../Styles/home.css";
import SearchBar from '../Components/SearchBar';
import { IoMdHeart } from "react-icons/io";

const Home = ({ favorites, setFavorites }) => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Replace the placeholder with your actual OMDB API URL
    const omdbApiUrl = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=action`; // Modify the 's' parameter according to your needs

    fetch("https://www.omdbapi.com/?apikey=4088b9e0&s=action")
      .then((response) => response.json())
      .then((data) => {setSearchResults(data.Search);
      console.log(data,data.Search)})
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleSearch = (query) => {
    // Use the search query to filter the searchResults
    const filteredResults = searchResults.filter(
      (movie) => movie.Title.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(filteredResults);
    console.log(filteredResults)
  };

  const handleAddToFavorites = (movie) => {
    // Implement logic to add the movie to the favorites
    if (!favorites.find((fav) => fav.imdbID === movie.imdbID)) {
      setFavorites((prevFavorites) => [...prevFavorites, movie]);
      alert("Movie added to favorites");
    } else {
      alert("Movie is already in favorites");
    }
  };

  return (
    <div>
      <h1>Home</h1>
      <div className="search-bar">
      <SearchBar onSearch={handleSearch} />
      </div>
      {/* {searchResults ? ( */}
        {/* <div> */}
          {/* <h2>{selectedMovie.Title}</h2>
          <p>Year: {selectedMovie.Year}</p>
          <button onClick={() => setSelectedMovie(null)}>Go back</button> */}
        {/* </div> */}
      
        <div>
          {/* <h2>Search Results</h2> */}
          <div className="movie-list">
            {searchResults?.map((movie) => (
              <div key={movie.imdbID} className="movie-card"  >
                <img src={movie.Poster} alt={movie.Title} />
                <h3>{movie.Title} ({movie.Year})</h3>
                <button className="favorite-button" onClick={() => handleAddToFavorites(movie)}>
                <IoMdHeart />
              </button>
              </div>
            ))}
          </div>
        </div>
      {/* )} */}
    </div>
  );
};

export default Home;
