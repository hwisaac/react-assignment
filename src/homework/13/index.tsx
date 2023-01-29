import React, { useRef, useState } from 'react';
import styled from 'styled-components';

interface IUserInfo {
  username: string;
  email: string;
  password: string;
}

const Homework = () => {
  const [formMsg, setFormMsg] = useState('');
  const [userInfo, setUserInfo] = useState<IUserInfo>({
    username: '',
    email: '',
    password: '',
  });

  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const onValid = (userInfo: IUserInfo) => {
    if (
      userInfo.username.length >= 3 &&
      userInfo.username.length <= 15 &&
      !userInfo.email.includes('@gmail.com') &&
      userInfo.password.length >= 8 &&
      userInfo.password.length <= 15
    ) {
      return true;
    }
  };

  const onInvalid = (userInfo: IUserInfo) => {
    const userNameLength = userInfo.username.length;
    const email = userInfo.email;
    const passwordLength = userInfo.password.length;

    if (userNameLength === 0) {
      setFormMsg('username을 입력하세요.');
      if (usernameRef.current) usernameRef.current.focus();
      return;
    } else if (userNameLength < 3) {
      setFormMsg('username 길이가 너무 짧습니다');
      if (usernameRef.current) usernameRef.current.focus();
      return;
    } else if (userNameLength > 10) {
      setFormMsg('username 길이가 너무 깁니다.');
      if (usernameRef.current) usernameRef.current.focus();
      return;
    } else if (email.length === 0) {
      setFormMsg('email을 입력하세요.');
      if (emailRef.current) emailRef.current.focus();
      return;
    } else if (email.includes('@gmail.com')) {
      setFormMsg('@gmail.com 은 불가능합니다.');
      if (emailRef.current) emailRef.current.focus();
      return;
    } else if (passwordLength === 0) {
      setFormMsg('password를 입력하세요.');
      if (passwordRef.current) passwordRef.current.focus();
      return;
    } else if (passwordLength < 8) {
      setFormMsg('password 길이가 너무 짧습니다');
      if (passwordRef.current) passwordRef.current.focus();
      return;
    } else if (passwordLength > 15) {
      setFormMsg('password 길이가 너무 깁니다');
      if (passwordRef.current) passwordRef.current.focus();
      return;
    }
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(userInfo);
    if (onValid(userInfo)) {
      setFormMsg('');
      if (usernameRef.current) usernameRef.current.value = '';
      if (emailRef.current) emailRef.current.value = '';
      if (passwordRef.current) passwordRef.current.value = '';
      alert('유효합니다.');
    } else {
      onInvalid(userInfo);
    }
  };
  return (
    <>
      <Form onSubmit={onSubmit}>
        <input
          name="username"
          type="text"
          placeholder="username"
          onChange={onChange}
          ref={usernameRef}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={onChange}
          ref={emailRef}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={onChange}
          ref={passwordRef}
        />
        <Msg>{formMsg}</Msg>
        <input type="submit" value="Submit" />
      </Form>
    </>
  );
};

export default Homework;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 60vw;
`;

const Msg = styled.span`
  color: red;
  font-weight: 700;
`;
