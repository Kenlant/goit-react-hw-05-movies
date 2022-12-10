import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getMovieReviews } from '../../../../api/api';

export default function MovieReviews({ id }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(id).then(setReviews);
  }, [id]);

  return (
    <div>
      <ul>
        {reviews.map(x => (
          <li key={x.id}>
            <p>
              Author: <span>{x.author}</span>
            </p>
            <p>{x.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

MovieReviews.propTypes = {
  id: PropTypes.string.isRequired,
};
