import React, { useState } from "react";
import SearchScreen from "./components/SearchScreen";
import DetailsScreen from "./components/DetailsScreen";

function App() {
  const [selectedShow, setSelectedShow] = useState(null);

  const handleShowSelect = (show) => {
    setSelectedShow(show);
  };

  return (
    <div>
      {selectedShow ? (
        <DetailsScreen show={selectedShow} />
      ) : (
        <SearchScreen onSelect={handleShowSelect} />
      )}
    </div>
  );
}

export default App;
