import styles from './MovieData.module.css';

export const MovieData = ({ movie }) => {
  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtNlCvCIk-K3ZPzfPDDaLDK9GUr8aEOitcbQ&usqp=CAU';
  return (
    <div className={styles.Container}>
      <div className={styles.Image}>
        <img src={image} width="100%" alt={movie.title} />
      </div>
      <div className={styles.Info}>
        <div className={styles.Div}>
          <h2 className={styles.Title}>{movie.title}</h2>
          <span className={styles.Average}>{movie.vote_average}</span>
        </div>
        <div className={styles.Div}>
          <p className={styles.Key}>Overview</p>
          <span className={styles.Value}>{movie.overview}</span>
        </div>
        <div className={styles.Div}>
          <p className={styles.Key}>Genres</p>
          <span className={styles.Value}>
            {movie.genres && movie.genres.map(obj => obj.name).join(', ')}
          </span>
        </div>
      </div>
    </div>
  );
};
