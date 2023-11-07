import { Routes, Route } from 'react-router';
import { lazy, Suspense } from 'react';

import { Loader } from 'components/atoms/Loader/Loader';
import Header from '../../components/organisms/Header/Header';

import styles from './App.module.css';

const Movies = lazy(() => delayForDemo(import('../Movies/Movies')));
const Trending = lazy(() => delayForDemo(import('../Trending/Trending')));
const PageNotFound = lazy(() => import('../PageNotFound/PageNotFound'));
const MovieInfo = lazy(() =>
  import('../../components/organisms/MovieInfo/MovieInfo')
);

export const App = () => {
  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.Pages}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Trending />} />
            <Route path="/movies/*" element={<Movies />} />
            <Route path="/movies/:id/*" element={<MovieInfo />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

async function delayForDemo(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}
