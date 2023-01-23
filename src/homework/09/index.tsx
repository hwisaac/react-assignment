import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import MovieCard from "./MovieCard";

export interface IMovie {
  //
}
interface ISearchResult {
  //
}

const getMovies = async (
  title: string,
  pageParam: number = 1
): Promise<ISearchResult> =>
  fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=10923b261ba94d897ac6b81148314a3f&query=${title}&page=${pageParam}`
  ).then((res) => res.json());

const Homework = () => {
  const [searchedMovies, setSearchedMovies] = useState<IMovie[]>([]);

  const { fetchNextPage, hasNextPage } = useInfiniteQuery({
    //
  });

  return (
    <>
      <h1>Frozen</h1>

      <Movies>
        {searchedMovies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </Movies>
      <MoreBtn onClick={() => fetchNextPage()}>
        {hasNextPage ? "추가" : "다음페이지가 없습니다"}
      </MoreBtn>
    </>
  );
};

export default Homework;

const Movies = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
`;

const MoreBtn = styled.div`
  cursor: pointer;
  width: 50%;
  height: 50px;
  background-color: #ddd;
  border: 1px solid black;
  border-radius: 10px;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
