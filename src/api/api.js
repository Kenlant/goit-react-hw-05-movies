import axios from 'axios';

const API_KEY = '1bb8f29c02a9512893fb765ccd284a77';
const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w342';
const BASE_PROFILE_URL = 'https://image.tmdb.org/t/p/w185';
const apiClient = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  timeout: 1000,
  params: {
    api_key: API_KEY,
  },
});

export const getTrending = () =>
  apiClient
    .get(`/trending/movie/day`)
    .then(x => x.data.results)
    .then(x =>
      x.map(y => ({
        id: y.id,
        original_title: y.original_title,
      }))
    );

export const search = query =>
  apiClient
    .get(`/search/movie?query=${query}`)
    .then(x => x.data.results)
    .then(x =>
      x.map(y => ({
        id: y.id,
        original_title: y.original_title,
      }))
    );

export const getMovieDetails = id =>
  apiClient
    .get(`/movie/${id}`)
    .then(x => x.data)
    .then(x => ({
      vote_average: x.vote_average,
      genres: x.genres,
      title: x.title,
      overview: x.overview,
      poster_path: BASE_POSTER_URL + x.poster_path,
    }));

export const getMovieCredits = id =>
  apiClient
    .get(`/movie/${id}/credits`)
    .then(x => x.data.cast)
    .then(x =>
      x.map(y => ({
        id: y.id,
        name: y.name,
        character: y.character,
        profile_path: BASE_PROFILE_URL + y.profile_path,
      }))
    );

export const getMovieReviews = id =>
  apiClient
    .get(`/movie/${id}/reviews`)
    .then(x => x.data.results)
    .then(x =>
      x.map(y => ({
        id: y.id,
        author: y.author,
        content: y.content,
      }))
    );
