import { NavLink } from 'react-router-dom';

import styles from './MovieMoreInfo.module.css';

export const MovieMoreInfo = () => {
  return (
    <div className={styles.More}>
      <p className={styles.Title}>Additional info:</p>
      <ul className={styles.List}>
        <li className={styles.Item}>
          <NavLink to={`cast`}>Cast</NavLink>
        </li>
        <li className={styles.Item}>
          <NavLink to={`reviews`}>Reviews</NavLink>
        </li>
      </ul>
    </div>
  );
};
