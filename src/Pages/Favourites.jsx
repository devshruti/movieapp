import React from 'react';
import "../Styles/fav.css"

const Favorites = ({ favorites }) => {
  return (
    <div>
      <h1>Favorites PAGE</h1>
      <div className="favorite-list">
        {favorites.map((favorite) => (
          <div key={favorite.imdbID} className="favorite-card">
            <img src={favorite.Poster} alt={favorite.Title} />
            <h3>{favorite.Title} ({favorite.Year})</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
