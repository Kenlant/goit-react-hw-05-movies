import { useState, useEffect } from 'react';
import MovieList from '../../common/MovieList/MovieList';
import { getTrending } from '../../../api/api';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrending().then(setMovies);
  }, []);

  return (
    <div className="home">
      <h1>Trending today</h1>
      <MovieList movies={movies} />
    </div>
  );
}
