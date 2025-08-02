import React, { useState } from 'react';

const Movie = () => {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [country, setCountry] = useState("");
  const [movies, setMovies] = useState([]);
  const [updateID, setUpdateID] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (updateID) {
      const updatedMovies = movies.map((movie) =>
        movie.id === updateID
          ? { id: updateID, title, genre, year, country }
          : movie
      );
      setMovies(updatedMovies);
      setUpdateID(null);
    } else {
      const newMovie = {
        id: Date.now(),
        title,
        genre,
        year,
        country,
      };
      setMovies([...movies, newMovie]);
    }

    setTitle("");
    setGenre("");
    setYear("");
    setCountry("");
  };

  const handleDelete = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  const handleUpdate = (movie) => {
    setTitle(movie.title);
    setGenre(movie.genre);
    setYear(movie.year);
    setCountry(movie.country);
    setUpdateID(movie.id);
  };

  return (
    <>
      <div className="inp">
        <h2>Movies</h2>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Name"
            required
          />
          <input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            placeholder="Genre"
            required
          />
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Reating"
            required
          />
          <button type="submit">
            {updateID ? "Update" : "Add"}
          </button>
        </form>
      </div>

      <div className="container dflex">
        {movies.map((movie) => (
          <div className="card" key={movie.id}>
            <h1>{movie.title}</h1>
            <p>Genre: {movie.genre}</p>
            <p>Year: {movie.year}</p>
            <p>Country: {movie.country}</p>
            <div className="flex">
              <button onClick={() => handleDelete(movie.id)}>Delete</button>
              <button onClick={() => handleUpdate(movie)}>Update</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Movie;
