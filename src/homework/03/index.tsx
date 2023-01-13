import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  padding: 50px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
`;

const List = styled.ul`
  list-style: none;
`;

const LogoImg = styled.img.attrs({ src: "/logo192.png", alt: "logo" })`
  width: 30px;
  height: 30px;
  margin-right: 5px;
`;

const SubTitle = styled.h3`
  display: inline;
`;

const Link = styled.a.attrs({ href: "#" })`
  text-decoration: none;
  color: #999;
  font-weight: 700;
  border: 1px solid #bbb;
  border-radius: 5px;
  padding: 0 5px;
  height: 20px;
  display: inline-flex;
  align-items: center;
  margin-left: 10px;
`;

const Btn = styled.button`
  width: 80px;
  background-color: white;
  border: 2px solid #666;
  border-radius: 10px;
  align-self: center;
  cursor: pointer;
`;

const Homework = () => {
  return (
    <>
      <Container>
        <Item>
          <List>
            <li>
              <LogoImg />
              <SubTitle>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </SubTitle>
            </li>
            <li>
              <span className="text">
                Ab adipisci, suscipit sint reprehenderit repellat autem cumque
                fugiat
                <Link>link</Link>
              </span>
            </li>
            <li>
              <span className="text">
                eos amet soluta placeat consequatur incidunt illo tempore
                ducimus, iste labore
              </span>
              <Link>link</Link>
            </li>
            <li>
              <span>minus distinctio</span>
              <Link>link</Link>
            </li>
          </List>
          <Btn>BUTTON</Btn>
        </Item>
        <Item>
          <List>
            <li>
              <LogoImg />
              <SubTitle>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </SubTitle>
            </li>
            <li>
              <span className="text">
                Ab adipisci, suscipit sint reprehenderit repellat autem cumque
                fugiat
                <Link>link</Link>
              </span>
            </li>
            <li>
              <span className="text">
                eos amet soluta placeat consequatur incidunt illo tempore
                ducimus, iste labore
              </span>
              <Link>link</Link>
            </li>
            <li>
              <span>minus distinctio</span>
              <Link>link</Link>
            </li>
          </List>
          <Btn>BUTTON</Btn>
        </Item>
        <Item>
          <List>
            <li>
              <LogoImg />
              <SubTitle>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </SubTitle>
            </li>
            <li>
              <span className="text">
                Ab adipisci, suscipit sint reprehenderit repellat autem cumque
                fugiat
                <Link>link</Link>
              </span>
            </li>
            <li>
              <span className="text">
                eos amet soluta placeat consequatur incidunt illo tempore
                ducimus, iste labore
              </span>
              <Link>link</Link>
            </li>
            <li>
              <span>minus distinctio</span>
              <Link>link</Link>
            </li>
          </List>
          <Btn>BUTTON</Btn>
        </Item>
      </Container>
    </>
  );
};

export default Homework;
