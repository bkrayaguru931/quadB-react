import React from "react";
import "./detailsScreen.css";

function DetailsScreen({ show }) {
  return (
    <div className="details-screen">
      <h1>{show.name}</h1>
      <p>{show.summary}</p>
    </div>
  );
}

export default DetailsScreen;
