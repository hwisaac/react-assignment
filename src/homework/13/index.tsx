import React, { useRef, useState } from "react";
import styled from "styled-components";

interface IInputValue {
  username: string;
  email: string;
  password: string;
}

const Homework = () => {
  const [formMsg, setFormMsg] = useState("");
  const [values, setValues] = useState<IInputValue>({
    username: "",
    email: "",
    password: "",
  });

  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  function onValid(values: IInputValue) {
    const regex = /^[A-Za-z0-9._%+-]+@gmail.com$/;

    if (
      values.username.length >= 3 &&
      values.username.length <= 10 &&
      !regex.test(values.email) &&
      values.password.length >= 8 &&
      values.password.length <= 15
    )
      return true;
  }
  function onInValid(values: IInputValue) {
    const regex = /^[A-Za-z0-9._%+-]+@gmail.com$/;

    if (values.username === "" && values.email === "" && values.password === "")
      return (
        setFormMsg("필수 입력값이 비어있습니다."), usernameRef.current?.focus()
      );
    else if (values.username.length <= 3) {
      return (
        setFormMsg("username 길이가 너무 짧습니다"),
        usernameRef.current?.focus()
      );
    } else if (values.username.length >= 10) {
      return (
        setFormMsg("username 길이가 너무 깁니다"), usernameRef.current?.focus()
      );
    } else if (regex.test(values.email)) {
      return (
        setFormMsg("gmail.com 은 불가능합니다."), emailRef.current?.focus()
      );
    } else if (values.password.length <= 8) {
      return (
        setFormMsg("password 길이가 너무 짧습니다"),
        passwordRef.current?.focus()
      );
    } else if (values.password.length >= 15) {
      return (
        setFormMsg("password 길이가 너무 깁니다"), passwordRef.current?.focus()
      );
    }
  }

  function validation(values: IInputValue) {
    const result = onValid(values);
    if (result) {
      setValues({
        username: "",
        email: "",
        password: "",
      });
      alert("유효한 정보입니다.");
    } else {
      return onInValid(values);
    }
  }

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(values);
    validation(values);
  };

  const handleInputSubmit = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    console.log(values);
    validation(values);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormMsg("");
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          ref={usernameRef}
          value={values.username}
          onChange={handleChange}
          name="username"
          type="text"
          placeholder="username"
        />
        <input
          ref={emailRef}
          value={values.email}
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="Email"
        />
        <input
          ref={passwordRef}
          value={values.password}
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="Password"
        />
        <input onSubmit={handleInputSubmit} type="submit" value="Submit" />
        <Msg>{formMsg}</Msg>
      </form>
    </>
  );
};

export default Homework;

const Msg = styled.span`
  color: red;
  font-weight: 700;
`;
