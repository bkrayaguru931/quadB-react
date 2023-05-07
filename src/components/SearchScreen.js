import React, { useState, useEffect } from "react";
import axios from "axios";
import "./searchScreen.css";

function SearchScreen({ onSelect }) {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      const response = await axios.get(
        `https://api.tvmaze.com/search/shows?q=all`
      );
      setShows(response.data);
    };
    fetchShows();
  }, []);

  return (
    <div className="search-screen">
      <h1>TV Shows</h1>

      <ul>
        {shows.map((show) => (
          <li key={show.show.id}>
            <div>
              <h3>{show.show.name}</h3>
              <p>
                {show.show.type} in {show.show.language}
              </p>
              <p>Show was premiered on {show.show.premiered}</p>
              <p>
                <img src={show.show.image} alt="Image cann't be fetched" />
              </p>
              <button onClick={() => onSelect(show.show)}>Details</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchScreen;
