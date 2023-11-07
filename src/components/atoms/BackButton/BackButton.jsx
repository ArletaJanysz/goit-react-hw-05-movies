import { Link } from 'react-router-dom';

import styles from './BackButton.module.css';

export const BackButton = ({ to }) => {
  return (
    <Link to={to}>
      <button className={styles.BackButton}>Go back</button>
    </Link>
  );
};
