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
  const [formMsg, setFormMsg] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ILoginForm>();

  return (
    <form>
      <input type='text' placeholder='Username' />
      <input type='email' placeholder='Email' />
      <input type='password' placeholder='Password' />
      <input type='submit' value='Submit' />
      <Msg>{formMsg}</Msg>
    </form>
  );
};

export default Homework;

const Msg = styled.span`
  color: red;
  font-weight: 700;
`;
