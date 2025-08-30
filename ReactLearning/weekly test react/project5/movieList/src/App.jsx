import React from "react";
import MovieList from "./components/MovieList";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>🎥 Movie Recommendations</h1>
      <MovieList />
    </div>
  );
}

export default App;
