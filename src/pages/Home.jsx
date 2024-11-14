import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  /* width: 100%; */
  width: fit-content;
  height: calc(100vh - 102px);
  background: #fff;
  margin: 0 auto;
  padding: 0 20px;
  /* color: #fff; */
`;

const Header = styled.div`
  font-size: 50px;
  line-height: 120%;
  font-family: "Ownglyph_ryuttung-Rg";
  word-break: keep-all;
  text-align: center;
`;

const Contents = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Title = styled.div`
  font-size: 30px;
  margin: 20px 0 10px;
`;

const LogoImg = styled.div`
  & > img {
    width: 350px;
    height: 350px;
    border: 6px solid #0d6efd;
    object-fit: cover;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  margin: 10px 0;
  word-break: keep-all;
  line-height: 130%;
  text-align: center;
`;

const Home = () => {
  const nevigate = useNavigate();

  const startTest = () => {
    nevigate("/question");
  };

  return (
    <Wrapper>
      <Header>나와 어울리는 겨울간식은?</Header>
      <Contents>
        {/* <Title>나에게 맞는 주인님은?</Title> */}
        <LogoImg>
          <img className="rounded-circle" src="/snack/mainphoto.jpg" />
        </LogoImg>
        <Desc>🥄 MBTI를 기반으로 하는 나와 어울리는 겨울 간식 찾기 🥄</Desc>
        <Button size="lg" onClick={startTest}>
          테스트 시작하기
        </Button>
      </Contents>
    </Wrapper>
  );
};

export default Home;
