import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

interface ILoginForm {
  username: string;
  password: string;
  email: string;
}
const Homework = () => {

  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
    resetField
  } = useForm<ILoginForm>();

  const onValid = (data:ILoginForm) => {
    console.log(data)
    resetField('username')
    resetField('password')
    resetField('email')
  }

  const onError = () => {
    if(errors.username) {
      setFocus('username')
    }
    if(errors.email) {
      setFocus('email')
    }
    if(errors.password) {
      setFocus('password')
    }
  }

  return (
    <form onSubmit={handleSubmit(onValid, onError)} style={{display: 'flex', flexDirection: 'column', gap: 10}}>
      <input { ...register('username', {
        required: 'username이 비어있습니다',
        minLength: {
          value: 3,
          message: 'username 길이가 너무 짧습니다'
        },
        maxLength: {
          value: 10,
          message: 'username 길이가 너무 깁니다'
        }
      })} 
        type='text'
        placeholder='Username'
      />
      <input {...register('email', {
        required: true,
        // pattern: {
        //   value:/^([a-z0-9_\.-]+)@gmail.com$/,
        //   message:"gmail.com 은 불가능합니다."
        // }
        validate: 
          (email) => 
            email.includes('@gmail.com') 
            ?  'gmail.com은 불가능합니다.' : true  
      })} 
        type='email' 
        placeholder='Email' />
      <input {...register('password', {
        required: true,
        minLength: {
          value: 8,
          message: 'password 길이가 너무 짧습니다'
        },
        maxLength: {
          value: 15,
          message: 'password 길이가 너무 깁니다'
        }
      })} type='password' placeholder='Password' />
      <input type='submit' value='Submit' />
      <Msg>{errors.username?.message}</Msg>
      <Msg>{errors.email?.message}</Msg>
      <Msg>{errors.password?.message}</Msg>
    </form>
  );
};

export default Homework;

const Msg = styled.span`
  color: red;
  font-weight: 700;
`;