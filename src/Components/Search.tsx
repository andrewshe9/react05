import { useState } from "react";
import MovieCard from "./MovieCard";

const Search = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [title, setTitle] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async () => {
    const response = await fetch(`${baseUrl}&s=${title}`);
    const data = await response.json();

    if (data.Search.length != 0) {
      setMovies(data.Search);
    } else {
      setMovies([]);
    }
  };

  const handleSubmit = (e) => {
    if (!title) return;
    e.preventDefault();
    searchMovies();
    console.log(movies);
    setTitle("");
  };

  return (
    <>
      {" "}
      <nav className="navbbody-tertiary">
        <div className="container-fluid">
          <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <label className="form-label" htmlFor="#">
              Movie Card
            </label>

            <input
              className="form-control me-2"
              type="search"
              placeholder="Search Movie"
              aria-label="Search"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      <div>
        {/* <img src={movies[0][Poster]} /> */}

        {movies.map((item) => (
          <div className="container container-fluid">
            <MovieCard movie={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Search;
