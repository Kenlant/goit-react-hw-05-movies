import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getMovieCredits } from '../../../../api/api';

export default function MovieCast({ id }) {
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    getMovieCredits(id).then(setCredits);
  }, [id]);

  return (
    <div>
      <ul>
        {credits.map(x => (
          <li key={x.id}>
            <img src={x.profile_path} alt={x.name} />
            <p>{x.name}</p>
            <p>Character: {x.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

MovieCast.propTypes = {
  id: PropTypes.string.isRequired,
};
