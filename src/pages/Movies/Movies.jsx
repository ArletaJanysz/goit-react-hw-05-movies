import { useRef, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { SearchForm } from 'components/atoms/SearchForm/SearchForm';
import MovieList from 'components/molecules/MovieList/MovieList';

import { fetchMoviesWithName } from 'components/API/fetchFromApi';

const Movies = () => {
  const moviesArray = useRef([]);
  const [searchParams, setSearchParams] = useSearchParams([]);
  const [querry, setQuerry] = useState('');
  const [reload, setReload] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    setSearchParams({ querry: form.querry.value });
    setQuerry(form.querry.value);
    form.reset();
  };

  useEffect(() => {
    const querryParam = searchParams.get('querry');
    querryParam && setQuerry(querryParam);
  }, [searchParams]);

  useEffect(() => {
    async function getMovies() {
      try {
        const movies = await fetchMoviesWithName(querry, 1);
        moviesArray.current = [...movies.results];
      } catch (err) {
        console.log('Error: ', err.toString());
      } finally {
        setReload(r => !r);
      }
    }
    getMovies();
  }, [querry]);

  useEffect(() => {}, [reload]);
  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      {moviesArray.current.length > 0 && (
        <MovieList movies={moviesArray.current} />
      )}
    </>
  );
};

export default Movies;
