import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { DetailsContainer } from './MovieDetails.styled';
import { getMovieDetails } from '../../../../api/api';

export default function MovieDetails({ id }) {
  const [movie, setMovie] = useState({});
  const { vote_average, genres, title, overview, poster_path } = movie;
  const rating = Math.round(vote_average * 10);
  const movieGenres = genres?.map(x => x.name).join(' ');

  useEffect(() => {
    getMovieDetails(id).then(setMovie);
  }, [id]);

  return (
    <DetailsContainer className="movie-details">
      <img className="movie-details__img" src={poster_path} alt={title} />
      <div className="movie-details__info">
        <h2 className="movie-details__title">{title}</h2>
        <span className="movie-details__score">User Score: {rating}%</span>
        <h3 className="movie-details__overview-title">Overview</h3>
        <p className="movie-details__overview">{overview}</p>
        <h4 className="movie-details__genres-title">Genres</h4>
        <p className="movie-details__genres">{movieGenres}</p>
      </div>
    </DetailsContainer>
  );
}

MovieDetails.propTypes = {
  id: PropTypes.string.isRequired,
};
