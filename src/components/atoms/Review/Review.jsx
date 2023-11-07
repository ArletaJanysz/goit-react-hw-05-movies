import styles from './Review.module.css';

export const Review = ({ author, description }) => {
  return (
    <li className={styles.ReviewItem}>
      <p className={styles.ReviewAuthor}>Author: {author}</p>
      <p className={styles.ReviewDescription}>{description}</p>
    </li>
  );
};
