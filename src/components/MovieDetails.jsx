import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./movieDetails.css";

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  const fetchMovieDetails = () => {
    const API_KEY = import.meta.env.VITE_OPENDB_KEY;
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        json.status_code === 34 ? navigate("/404") : setMovie(json);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      });
  };

  return (
    <section
      className="movie-details-page"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
      }}
    >
      <Link to="/" className="back-link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
          className="back-icon"
        >
          <path
            d="M27 14.5C27 7.596441 21.4035594 2 14.5 2S2 7.596441 2 14.5 7.5964406 27 14.5 27 27 21.403559 27 14.5zm-19.3388348-.353553l7.4852814-7.485282c.1952622-.195262.5118446-.195262.7071068 0l2.1213203 2.121321c.1952622.195262.1952622.511844 0 .707106L12.9644661 14.5l5.0104076 5.010408c.1952622.195262.1952622.511844 0 .707106l-2.1213203 2.121321c-.1952622.195262-.5118446.195262-.7071068 0l-7.4852814-7.485282c-.19799-.19799-.197989-.509117 0-.707106z"
            fill="#fff"
            fillRule="evenodd"
          ></path>
        </svg>
        Movies
      </Link>
      <div className="movie-details-container">
        <img
          src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
          alt={movie.title}
          className="movie-details-image"
        />
        <div className="details">
          <div className="title-rating-container">
            <h2 className="title">{movie.title}</h2>
            <p className="rating">{Number(movie.vote_average).toFixed(1)}</p>
          </div>
          {movie.original_language !== "en" &&
          movie.original_title !== movie.title ? (
            <p className="original-title">
              Original title: <strong>{movie.original_title}</strong>
            </p>
          ) : (
            <></>
          )}
          <p className="overview">{movie.overview}</p>
        </div>
      </div>
    </section>
  );
};
