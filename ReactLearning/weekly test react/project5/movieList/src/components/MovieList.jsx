import React from "react";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const movies = [
    {
      id: 1,
      title: "Inception",
      rating: 5,
      isTrending: true,
      poster: "https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg",
    },
    {
      id: 2,
      title: "Interstellar",
      rating: 4,
      isTrending: false,
      poster: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SL1500_.jpg",
    },
    {
      id: 3,
      title: "The Dark Knight",
      rating: 5,
      isTrending: true,
      poster: "https://m.media-amazon.com/images/S/pv-target-images/e9a43e647b2ca70e75a3c0af046c4dfdcd712380889779cbdc2c57d94ab63902.jpg",
    },
    {
      id: 4,
      title: "Dunkirk",
      rating: 3,
      isTrending: false,
      poster: "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SL1500_.jpg",
    },
  ];

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          rating={movie.rating}
          isTrending={movie.isTrending}
          poster={movie.poster}
          footer={<button className="btn-watch">▶ Watch Now</button>} // JSX as prop
        />
      ))}
    </div>
  );
};

export default MovieList;
