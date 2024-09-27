import c from "./MovieCast.module.css";

import { useEffect, useState } from "react";
import { fetchCredits } from "../../servers/api";
import { useParams } from "react-router-dom";

const MovieCast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchCredits(movieId);
      setCasts(data.cast);
      console.log(data.cast);
    };
    getData();
  }, [movieId]);

  if (!casts.length) {
    return <div>No cast data available</div>;
  }
  return (
    <div>
      <ul className={c.castList}>
        {casts.map((cast) => (
          <li key={cast.id} className={c.castItem}>
            {cast.profile_path && (
              <img
                className={c.profileImage}
                src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                alt={cast.name}
              />
            )}
            <div className={c.castInfo}>
              <h4 className={c.castName}>{cast.name}</h4>
              <p className={c.castCharacter}>Character: {cast.character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
