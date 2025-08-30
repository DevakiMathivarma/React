import React from "react";

const MovieCard = ({ title, rating, isTrending, poster, footer }) => {
  // ⭐ Convert rating into stars
  const stars = "⭐".repeat(rating);

  return (
    <div className="movie-card">
      <div className="poster-wrap">
        <img src={poster} alt={title} className="poster" />
        {isTrending && <span className="badge">🔥 Trending</span>}
      </div>

      <h3 className="movie-title">{title}</h3>
      <p className="movie-rating">{stars}</p>

      <div className="footer">{footer}</div>
    </div>
  );
};

export default MovieCard;
