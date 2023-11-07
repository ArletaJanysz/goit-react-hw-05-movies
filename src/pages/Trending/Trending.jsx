import { useEffect, useRef, useState } from 'react';

import MovieList from 'components/molecules/MovieList/MovieList';

import { fetchTrendingMovies } from 'components/API/fetchFromApi';

const Trending = () => {
  const moviesArray = useRef([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    async function getMovies() {
      try {
        const movies = await fetchTrendingMovies(1);
        moviesArray.current = [...movies.results];
      } catch (err) {
        console.log('Error: ', err.toString());
      } finally {
        setLoad(l => !l);
      }
    }
    getMovies();
  }, []);
  useEffect(() => {}, [load]);
  return (
    <>
      <h2>Trending today</h2>
      {moviesArray.current && <MovieList movies={moviesArray.current} />}
    </>
  );
};

export default Trending;
