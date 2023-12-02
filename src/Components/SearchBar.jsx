import React, { useState } from 'react';
import { ImSearch } from "react-icons/im";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}><ImSearch /></button>
    </div>
  );
};

export default SearchBar;
