import React, { useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import { FieldErrors, SubmitErrorHandler, useForm } from "react-hook-form";
import { RouterProvider } from "react-router-dom";
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
    formState: { errors },
    setValue,
  } = useForm<ILoginForm>();

  const onValid = (data: ILoginForm) => {
    console.log(data);
    setValue("username", "");
    setValue("password", "");
    setValue("email", "");
    alert("입력한 정보가 유효합니다.");
  };

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input
        {...register("username", {
          required: "username이 비어있습니다",
          minLength: {
            value: 3,
            message: "username 길이가 너무 짧습니다",
          },
          maxLength: {
            value: 10,
            message: "username 길이가 너무 깁니다",
          },
        })}
        type="text"
        placeholder="Username"
      />
      <input
        {...register("email", {
          required: "email이 비어있습니다",
          validate: (value) =>
            value.includes("@gmail.com") ? "gmail.com 은 불가능합니다." : true,
        })}
        type="email"
        placeholder="Email"
      />
      <input
        {...register("password", {
          required: "password이 비어있습니다",
          minLength: {
            value: 8,
            message: "password 길이가 너무 짧습니다",
          },
          maxLength: {
            value: 15,
            message: "password 길이가 너무 깁니다",
          },
        })}
        type="password"
        placeholder="Password"
      />
      <input onSubmit={handleSubmit(onValid)} type="submit" value="Submit" />
      <Msg>
        {errors.email?.message ||
          errors.username?.message ||
          errors.password?.message}
      </Msg>
    </form>
  );
};

export default Homework;

const Msg = styled.span`
  color: red;
  font-weight: 700;
`;
