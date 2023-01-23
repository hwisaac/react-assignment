import React from "react";
import styled from "styled-components";
import { IMovie } from "./index";

const MovieCard = ({ movie }: { movie: IMovie }) => {
  return (
    <>
      {movie.poster_path && (
        <Wrap>
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
          />
          <span>{movie.title}</span>
        </Wrap>
      )}
    </>
  );
};

export default MovieCard;

const Wrap = styled.div`
  position: relative;
  width: 200px;
  span {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    color: white;
    background-color: orange;
    text-align: center;
    font-weight: 700;
  }
`;
