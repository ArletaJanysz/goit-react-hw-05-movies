import styles from './Review.module.css';

export const Review = ({ author, description }) => {
  return (
    <li className={styles.ReviewItem}>
      <p className={styles.ReviewAuthor}>Author: {author}</p>
      <p className={styles.ReviewDescription}>{description}</p>
    </li>
  );
};

export const Reviews = ({ reviews }) => {
  if (reviews.length === 0) {
    return (
      <div className={styles.NoReviews}>
        <span className={styles.Info}>Sorry. No reviews found.</span>
      </div>
    );
  }

  return (
    <ul>
      {reviews.map((review, index) => (
        <Review
          key={index}
          author={review.author}
          description={review.description}
        />
      ))}
    </ul>
  );
};
