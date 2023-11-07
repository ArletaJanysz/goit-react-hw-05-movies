import styles from './NoReview.module.css';

export const NoReview = () => {
  return (
    <div className={styles.NoReview}>
      <span className={styles.Info}>Sorry. No reviews found.</span>
    </div>
  );
};
