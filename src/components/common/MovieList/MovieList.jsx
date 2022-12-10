import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function MovieList({ movies }) {
  return (
    <ul className="movie-list">
      {movies.map(({ id, original_title }) => (
        <li className="movie-list__item" key={id}>
          <Link to={`/movies/${id}`}>{original_title}</Link>
        </li>
      ))}
    </ul>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
