const API_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWY5OGU1YjA5ZTk0OWEwZWNkNjFmZjVjZjQ4NzcwOCIsInN1YiI6IjY1NGEyMzg2NjdiNjEzMDBlNWRiZWU2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._IymMCQvVDtuF5JQ2rSGqYHKHWFjtr9CChelxaTcWxM';
const API_URL = 'https://api.themoviedb.org/';
const DEFAULT_PAGE = { page: 1 };

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
};

export async function fetchFromApi({
  requestPath = 'trending/all/day',
  requestParams = {},
}) {
  try {
    const params = new URLSearchParams({ ...DEFAULT_PAGE, ...requestParams });
    const response = await fetch(`${API_URL}${requestPath}?${params}`, options);
    if (!response.ok) {
      throw new Error(`Error status: ${response.status}`);
    }
    const films = await response.json();
    return films;
  } catch (err) {
    return err;
  }
}

export async function fetchTrendingMovies(page) {
  try {
    const requestParams = { page };
    const films = await fetchFromApi({
      requestPath: 'trending/movie/day',
      requestParams,
    });
    return films;
  } catch (err) {
    return err.toString();
  }
}

export async function fetchMoviesWithName(query, page, ...rest) {
  try {
    const requestPath = 'search/movie';
    const requestParams = { query, page, ...rest };
    const films = await fetchFromApi({ requestPath, requestParams });
    return films;
  } catch (err) {
    return err.toString();
  }
}

export async function fetchDetailsMovie(id, additionalPath = '') {
  try {
    const requestPath = `movie/${id}${additionalPath}`;
    const movie = await fetchFromApi({ requestPath });
    return movie;
  } catch (err) {
    return err.toString();
  }
}
