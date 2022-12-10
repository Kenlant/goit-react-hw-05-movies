import { useState } from 'react';
import SearchForm from '../../forms/SeachForm/SearchForm';
import MovieList from '../../common/MovieList/MovieList';
import { search } from '../../../api/api';

export default function Movies() {
  const [movies, setMovies] = useState([]);

  function onFormSubmit(value) {
    search(value).then(setMovies);
  }

  return (
    <>
      <SearchForm onSubmit={onFormSubmit} />
      <MovieList movies={movies} />
    </>
  );
}
