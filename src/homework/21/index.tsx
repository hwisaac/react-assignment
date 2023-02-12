import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { useForm } from 'react-hook-form';
import { RouterProvider } from 'react-router-dom';
import { search } from './api';
import Search from './Search';

interface IForm {
  keyword: string;
}

const Homework = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IForm>();
  const [keyword, setKeyword] = useState<string>('');
  const onValid = (data: IForm): void => {
    setKeyword(data.keyword);
    reset();
  };
  const { isLoading, data } = useQuery(
    ['search', keyword],
    () => search(keyword),
    {
      staleTime: 1000 * 60 * 60 * 24,
      cacheTime: Infinity,
    }
  );

  return (
    <>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          type="text"
          placeholder="유튜브 검색"
          {...register('keyword', {
            minLength: {
              value: 3,
              message: '최소 3글자를 입력하세요',
            },
          })}
        />
        <button>검색</button>
      </form>
      <span>{errors?.keyword?.message}</span>
      {isLoading ? 'Loading ...' : <Search keyword={keyword} movie={data} />}
    </>
  );
};

export default Homework;
