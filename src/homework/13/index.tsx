import React, { useRef, useState } from "react";
import styled from "styled-components";

const Homework = () => {
  const [formMsg, setFormMsg] = useState("");
  return (
    <>
      <form>
        <input name='username' type='text' placeholder='username' />
        <input name='email' type='email' placeholder='Email' />
        <input name='password' type='password' placeholder='Password' />
        <input type='submit' value='Submit' />
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
