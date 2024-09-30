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
    };
    getData();
    if (!movieId) return;
  }, [movieId]);

  if (!casts.length) {
    return <div className={c.noCast}>No cast data available</div>;
  }

  const defaultActorImg =
    "https://dummyimage.com/200x300/cdcdcd/000.jpg&text=No+Image";

  return (
    <div>
      <ul className={c.castList}>
        {casts.map((cast) => (
          <li key={cast.id} className={c.castItem}>
            <img
              className={c.profileImage}
              src={
                cast.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                  : defaultActorImg
              }
              alt={cast.name || "Actor"}
              width={150}
            />
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
