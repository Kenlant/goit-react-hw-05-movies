import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import AppSuspense from './infrastracture/AppSuspense/AppSuspense';
import NotFound from './error-pages/NotFound/NotFound';
import SharedLayout from './layouts/SharedLayout/SharedLayout';

const Home = lazy(() => import(`./pages/Home/Home`));
const Movie = lazy(() => import(`./pages/Movie/Movie`));
const Movies = lazy(() => import(`./pages/Movies/Movies`));

export const App = () => {
  return (
    <AppSuspense>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id/*" element={<Movie />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AppSuspense>
  );
};
