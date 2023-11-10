import { Link } from "react-router-dom";
import "./pageNotFound.css";
import notFoundImage from "../assets/popcorn.jpg";

export const PageNotFound = () => {
  return (
    <>
      <div
        className="not-found-page"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(${notFoundImage})`,
        }}
      >
        <div className="not-found-text">
          <p>
            I'm afraid this movie doesn't exist yet, perhaps in the future? In
            the meantime, try another movie.
          </p>
          <Link to="/">
            <button className="home-button">Have a go</button>
          </Link>
        </div>
      </div>
    </>
  );
};
