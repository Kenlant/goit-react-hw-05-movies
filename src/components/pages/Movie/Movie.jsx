import { lazy } from 'react';
import { useParams, Route, Routes, Link } from 'react-router-dom';
import MovieDetails from './MovieDetails/MovieDetails';
import GoBackBtn from 'components/common/GoBackBtn/GoBackBtn';

const MovieCast = lazy(() => import(`./MovieCast/MovieCast`));
const MovieReviews = lazy(() => import(`./MovieReviews/MovieReviews`));

export default function Movie() {
  const { id } = useParams();

  return (
    <>
      <GoBackBtn />
      <section className="movie">
        <h1 hidden>Movie</h1>
        <MovieDetails id={id} />
        <div className="movie__additional-info">
          <h2>Additional Information</h2>
          <ul className="movie__additional-info-list">
            <li className="movie__additional-info-list-item">
              <Link to="cast">Cast</Link>
            </li>
            <li className="movie__additional-info-list-item">
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="cast" element={<MovieCast id={id} />} />
          <Route path="reviews" element={<MovieReviews id={id} />} />
        </Routes>
      </section>
    </>
  );
}
