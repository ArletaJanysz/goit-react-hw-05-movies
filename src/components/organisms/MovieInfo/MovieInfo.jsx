import { Cast } from 'components/molecules/Cast/Cast';
import { Reviews } from 'components/molecules/Reviews/Reviews';
import { BackButton } from 'components/atoms/BackButton/BackButton';
import { MovieData } from 'components/molecules/MovieData/MovieData';
import { MovieMoreInfo } from 'components/atoms/MovieMoreInfo/MovieMoreInfo';

import { fetchDetailsMovie } from 'services/fetchFromApi';

const MovieInfo = () => {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState({});
  const location = useRef(useLocation());
  const backTo = useRef(
    location.current.state?.from || location.current.pathname
  );

  useEffect(() => {
    async function getMovieInfo() {
      const info = await fetchDetailsMovie(id);
      setMovieInfo({ ...info });
    }
    getMovieInfo();
  }, [id]);

  return (
    <>
      <BackButton to={backTo.current} />
      <MovieData movie={movieInfo} />
      <MovieMoreInfo />
      <Routes>
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/cast" element={<Cast />} />
      </Routes>
    </>
  );
};

export default MovieInfo;
