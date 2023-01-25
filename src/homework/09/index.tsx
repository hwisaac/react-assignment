import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import MovieCard from "./MovieCard";

export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
interface ISearchResult {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

const getMovies = async (pageParam: number = 1): Promise<ISearchResult> =>
  fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=10923b261ba94d897ac6b81148314a3f&query=frozen&page=${pageParam}`
  ).then((res) => res.json());

const Homework = () => {
  const [searchedMovies, setSearchedMovies] = useState<IMovie[]>([]);

  const { fetchNextPage, hasNextPage } = useInfiniteQuery(
    ["movieData"],
    ({ pageParam }) => getMovies(pageParam),
    {
      onSuccess: (result) => {
        setSearchedMovies((prev) => [
          ...prev,
          ...result.pages.slice(-1)[0].results,
        ]);
      },
      getNextPageParam: (lastPage) => {
        if (lastPage.page < lastPage.total_pages) return lastPage.page + 1;
      },
    }
  );

  // 정답
  // const { fetchNextPage, hasNextPage } = useInfiniteQuery({
  //   queryKey: ["frozen"],
  //   queryFn: ({ pageParam = 1 }) => getMovies("frozen", pageParam),
  //   getNextPageParam: (lastPage: ISearchResult, allPages: ISearchResult[]) => {
  //     if (lastPage.page === lastPage.total_pages) return;
  //     return lastPage.page + 1;
  //   },
  //   onSuccess: (data) => {
  //     let result: IMovie[] = [];
  //     for (let page of data.pages) {
  //       result = [...result, ...page.results];
  //     }
  //     setSearchedMovies(result);
  //   },
  // });

  return (
    <>
      <h1>Frozen</h1>

      <Movies>
        {searchedMovies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </Movies>
      <MoreBtn onClick={() => (hasNextPage ? fetchNextPage() : null)}>
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
