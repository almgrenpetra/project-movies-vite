// Get API_KEY from separate file
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_KEY } from "../../api_key.js";
import "./home.css";

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

  const fetchMovies = () => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setMovies(json.results))
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <section className="movie-grid">
      {console.log(movies)}
      {movies.map((movie) => {
        return (
          <Link
            to={`/movies/${movie.id}`}
            key={movie.id}
            className="movie-card"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt=""
              className="poster-image"
            />
            <div className="movie-details">
              <h2>{movie.title}</h2>
              <p className="release-date">Relased {movie.release_date}</p>
            </div>
          </Link>
        );
      })}
    </section>
  );
};
