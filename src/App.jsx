import "./App.css";
import { useState } from "react";

import Spinner from "./components/Spinner";
// import MovieList from "./components/MovieList";
import ImprovedMovieList from "./components/ImprovedMovieList";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  if (isLoading) {
    return <Spinner />;
  } else {
    return (
      <div className="App">
        <ImprovedMovieList />
      </div>
    );
  }
}

export default App;
