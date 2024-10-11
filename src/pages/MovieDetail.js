import React from "react";
import { useLocation } from "react-router-dom";
import { MovieState } from "../data";
import style from "../styles/MovieDetail.module.css";

const MovieDetail = () => {
  const { pathname } = useLocation();
  const movieDetails = MovieState();

  const currentMovie = movieDetails.filter(
    (movie) => pathname === movie.url
  )[0];

  return (
    <div className={style.movieDetail}>
      <div className={style.intro}>
        <h2>{currentMovie.title}</h2>
        <img src={currentMovie.mainImg} alt="" />
      </div>

      <div className={style.awards}>
        {currentMovie.awards.map((award) => (
          <Award award={award} key={award.title} />
        ))}
      </div>

      <div className={style.image}>
        <img src={currentMovie.secondaryImg} alt="" />
      </div>
    </div>
  );
};

const Award = ({ award }) => {
  return (
    <div className={style.award}>
      <h3>{award.title}</h3>
      <div className={style.line}></div>
      <p>{award.description}</p>
    </div>
  );
};

export default MovieDetail;
