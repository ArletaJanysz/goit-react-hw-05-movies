import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';

export const Header = () => {
  return (
    <div className={styles.Header}>
      <nav className={styles.HeaderNav}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
    </div>
  );
};

export default Header;
