import { useInfiniteQuery } from '@tanstack/react-query';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { pathToFileURL } from 'url';
import MovieCard from './MovieCard';

export interface IMovie {
  adult: boolean;
  backdrop_path?: string;
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

const getMovies = async (
  // title: string = 'frozen',
  pageParam: number = 1
): Promise<ISearchResult> =>
  fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=10923b261ba94d897ac6b81148314a3f&query=frozen&page=${pageParam}`
  ).then((res) => res.json());

const Homework = () => {
  const [searchedMovies, setSearchedMovies] = useState<IMovie[]>([]);

  const { fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['movies'],
    queryFn: ({ pageParam }) => getMovies(pageParam),
    getNextPageParam: (lastData) => {
      console.log(lastData);
      if (lastData.page < lastData.total_pages) {
        return lastData.page + 1;
      }
    },
    onSuccess: (data) =>
      setSearchedMovies([
        ...searchedMovies,
        ...data.pages.slice(-1)[0].results,
      ]),
  });

  return (
    <>
      <h1>Frozen</h1>

      <Movies>
        {searchedMovies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </Movies>
      <MoreBtn
        onClick={() => fetchNextPage()}
        disabled={hasNextPage ? false : true}
      >
        {hasNextPage ? '추가' : '다음페이지가 없습니다'}
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

const MoreBtn = styled.button`
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
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
