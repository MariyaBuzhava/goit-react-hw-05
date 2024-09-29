import c from "./MovieReviews.module.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviews } from "../../servers/api";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchReviews(movieId);
      setReviews(data.results);
      console.log(data.results);
    };
    getData();
    if (!movieId) return;
  }, [movieId]);

  if (!reviews.length) {
    return <div className={c.noReview}>No reviews</div>;
  }

  return (
    <div>
      <ul className={c.wrapper}>
        {reviews.map((review) => (
          <li key={review.id} className={c.reviewItem}>
            <div className={c.leftColumn}>
              <h4 className={c.author}>Author: {review.author}</h4>
              {review.author_details.avatar_path && (
                <img
                  className={c.avatar}
                  src={`https://image.tmdb.org/t/p/w500/${review.author_details.avatar_path}`}
                  alt={review.author}
                />
              )}
            </div>
            <div className={c.rightColumn}>
              <p className={c.content}>{review.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
