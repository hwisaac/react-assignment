import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  border: 1px solid black;
  padding: 10px;
`;

interface IProps {
  title: string;
  price: number;
}

const Fruit = ({ title, price }: IProps) => {
  return (
    <Wrap>
      과일이름: {title}, 과일가격: {price}
    </Wrap>
  );
};

export default Fruit;
