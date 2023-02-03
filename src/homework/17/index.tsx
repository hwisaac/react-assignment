import React, { useState } from 'react';
import Comment from './Comment';
import Header from './Header';
import PostCard from './PostCard';
import './tailwind.css';

export function cls(...classnames: string[]) {
  return classnames.join(' ');
}
export type TPost = {
  nickname: string;
  title: string;
  description: string;
};
export type TComment = {
  nickname: string;
  date: string;
  comment: string;
};

const Homework = () => {
  const post: TPost = {
    nickname: '닉네임',
    title: 'Article Title',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  };
  const Comments: TComment[] = [
    {
      nickname: 'Nick',
      date: '10 hr ago',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ',
    },
    {
      nickname: 'Nick',
      date: '10 hr ago',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ',
    },
    {
      nickname: 'Nick',
      date: '10 hr ago',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ',
    },
  ];

  return (
    <>
      <section>
        <Header></Header>
        <PostCard {...post}></PostCard>
        {Comments.map((comment) => (
          <Comment {...comment}></Comment>
        ))}
      </section>
    </>
  );
};

export default Homework;
