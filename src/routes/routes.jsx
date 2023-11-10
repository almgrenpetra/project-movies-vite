import { Routes, Route } from "react-router-dom";
import { Home } from "../components/Home";
import { MovieDetails } from "../components/MovieDetails";
import { PageNotFound } from "../components/PageNotFound";

export const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/movies/:movieId" element={<MovieDetails />} />
    <Route path="*" element={<PageNotFound />}></Route>
  </Routes>
);
