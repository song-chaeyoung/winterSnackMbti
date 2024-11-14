import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { ResultData } from "../assets/questiondata";
import KaKaoShareBtn from "../components/KaKaoShareBtn";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 780px) {
  }
`;

const Header = styled.div`
  font-size: 40px;
  font-family: "Ownglyph_ryuttung-Rg";
`;

const Contents = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  @media screen and (max-width: 780px) {
    gap: 4px;
  }
`;

const Title = styled.div`
  font-size: 30px;
  margin: 10px 0;
  @media screen and (max-width: 780px) {
    font-size: 20px;
  }
`;

const LogoImg = styled.div`
  & > img {
    width: 350px;
    height: 350px;
    border: 6px solid #0d6efd;
    object-fit: cover;
  }
  @media screen and (max-width: 780px) {
    & > img {
      width: 250px;
      height: 250px;
    }
  }
`;

const Desc = styled.div`
  text-align: center;
  font-size: 16px;
  line-height: 150%;
  width: 340px;
  /* width: 95%; */
  &:nth-child(3) {
    font-size: 30px;
    font-family: "Ownglyph_ryuttung-Rg";
  }
  @media screen and (max-width: 780px) {
    font-size: 15px;
    &:nth-child(3) {
      /* font-size: 28px; */
      font-family: "Ownglyph_ryuttung-Rg";
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Result = () => {
  const [data, setData] = useState({});
  const [searchParms] = useSearchParams();
  const mbti = searchParms.get("mbti");

  const nevigate = useNavigate();
  const handleClickButton = () => {
    nevigate("/");
  };

  useEffect(() => {
    const result = ResultData.find((item) => item.mbti === mbti);
    setData(result);
  }, [mbti]);

  return (
    <Wrapper>
      <Header>나와 어울리는 겨울 간식은?</Header>
      <Contents>
        {/* <Title>결과보기</Title> */}
        <Title></Title>
        <LogoImg>
          <img className="rounded-circle" src={data.img} />
        </LogoImg>
        <Desc>
          나와 어울리는 겨울간식은? <br /> 🥄 {data.mbti}형 {data.snack}
          🥢
        </Desc>
        <Desc>{data.desc}</Desc>
        <ButtonGroup>
          <Button onClick={handleClickButton}>테스트 다시 시작하기</Button>
          <KaKaoShareBtn data={data} />
        </ButtonGroup>
      </Contents>
    </Wrapper>
  );
};

export default Result;
