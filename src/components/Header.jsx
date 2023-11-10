import { Link, NavLink } from "react-router-dom";
import "./header.css";

export const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1>Popular Movies</h1>
      </Link>
    </header>
  );
};
