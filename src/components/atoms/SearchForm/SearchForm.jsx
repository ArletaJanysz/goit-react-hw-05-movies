import styles from './SearchForm.module.css';

export const SearchForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className={styles.Form}>
      <input
        name="querry"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search title..."
        className={styles.Input}
      />
      <button type="submit" className={styles.Button}>
        Search
      </button>
    </form>
  );
};
