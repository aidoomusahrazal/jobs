import React, { useState, useEffect } from 'react';
import './SearchBar.css'; // Import your CSS file
import { FaSearch } from 'react-icons/fa'

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [words] = useState([
    "apple",
    "banana",
    "chocolate",
    "dog",
    "elephant",
    "fireplace",
    "guitar",
    "happiness",
    "internet",
    "jazz",
  ]);

  useEffect(() => {
    if (isSearchTermInWords(searchTerm)) {
      // If the searchTerm is in the words, then perform the live search
      const results = performLiveSearch(searchTerm);
      setSearchResults(results);
    } else {
      // Clear the search results if the input doesn't match the criteria
      setSearchResults(["No result found"]);
    }
  }, [searchTerm]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const isSearchTermInWords = (term) => {
    if(words.includes(term.toLowerCase())) {
    }
    return words.includes(term.toLowerCase());
  };

  const performLiveSearch = (searchTerm) => {
    
    // Return an array of search results
    return [searchTerm];
  };

  return (
    <div className="search-container">
        <div className="search">
        <input
        className="search-input"
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button className="search-button">
        <FaSearch />
      </button>
        </div>
      
      {searchResults.length > 0 ? (
        <ul className="search-results">
          {searchResults.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
        
      )
      : ""
    }
    </div>
  );
}

export default SearchBar;
