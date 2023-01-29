import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const Homework = () => {
  const [formMsg, setFormMsg] = useState('');

  const [userInfo, setUserInfo] = useState({
    username : '',
    email : '',
    password: ''
  })

  const {username, email, password} = userInfo

  const usernameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const onValid = () => {
    if(usernameRef.current) usernameRef.current.value = ''
    if(emailRef.current) emailRef.current.value = ''
    if(passwordRef.current) passwordRef.current.value = ''
    alert('유효한 사용자입니다.')
    console.log(userInfo)
  }

  const onInvalid = () => {
    if(username.length < 3) {
      setFormMsg('username 길이가 너무 짧습니다')
      if(usernameRef.current) usernameRef.current.focus()
    }
    if(username.length > 10) {
      setFormMsg('username 길이가 너무 깁니다')
      if(usernameRef.current) usernameRef.current.focus()
    }
    if(email.includes('gmail.com')) {
      setFormMsg('gmail.com 은 불가능합니다.')
      if(emailRef.current) emailRef.current.focus()
    }
    if(password.length < 8) {
      setFormMsg('password 길이가 너무 짧습니다')
      if(passwordRef.current) passwordRef.current.focus()
    }
    if(password.length > 15) {
      setFormMsg('password 길이가 너무 깁니다')
      if(passwordRef.current) passwordRef.current.focus()
    }
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    if((username.length >= 3) &&
      (username.length <= 10) &&
      (!email.includes('gmail.com')) &&
      (password.length >= 8) &&
      (password.length) <= 15 
      ) {
        onValid()
      } else {
        onInvalid()
      }
  }

  const handleChange = (event:any) => {
    const {name, value} = event.target
    setUserInfo({...userInfo, [name] : value})
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          name="username"
          type="text"
          placeholder="username"
          onChange={handleChange}
          ref={usernameRef}
        />
        <Input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          ref={emailRef}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          ref={passwordRef}
        />
        <Msg>{formMsg}</Msg>
        <Button>Submit</Button>
      </Form>
    </>
  );
};

export default Homework;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`
const Input = styled.input`
  border-radius: 20px;
  padding: 10px;
  border: 1px solid #271f27;
`

const Button = styled.button`
  border-radius: 20px;
  padding: 10px;
  color: #fff;
  border: transparent;
  background-color: #4450b4;
`
const Msg = styled.span`
  color: red;
  font-weight: 700;
`;