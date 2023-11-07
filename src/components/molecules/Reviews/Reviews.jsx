import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { Review, NoReviews } from 'components/atoms/Review/Review';

import { fetchDetailsMovie } from '../../API/fetchFromApi';

export const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function getReviews() {
      try {
        const respond = await fetchDetailsMovie(id, '/reviews');
        setReviews([...respond.results]);
      } catch (err) {
        console.log('Error: ', err.toString());
      }
    }
    getReviews();
  }, [id]);

  return (
    <ul>
      {reviews[0] ? (
        reviews.map(review => (
          <Review
            key={review.id}
            author={review.author}
            description={review.content}
          />
        ))
      ) : (
        <li>
          <NoReviews />
        </li>
      )}
    </ul>
  );
};
