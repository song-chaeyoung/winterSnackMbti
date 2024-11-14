import React, { useState } from "react";
import { Button, ProgressBar } from "react-bootstrap";
import styled from "styled-components";
import { QuestionData } from "../assets/questiondata";
import { createSearchParams, useNavigate } from "react-router-dom";

const Wrapper = styled.section`
  /* width: 100%;
  height: calc(100vh - 120px); */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 390px;
  gap: 30px;
  padding: 10px;
`;

const Title = styled.div`
  text-align: center;
  padding: 8px 16px;
  /* background: rgba(205, 92, 92, 0.9); */
  /* color: #fff; */
  border-radius: 8px;
  font-family: "Ownglyph_ryuttung-Rg";
  font-size: 34px;

  @media screen and (max-width: 780px) {
    width: 300px;
    font-size: 24px;
    padding: 6px 12px;
  }
  @media screen and (max-width: 360px) {
    width: 200px;
    font-size: 18px;
    padding: 6px 12px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  & > button {
    /* width: 400px; */
    width: 90%;
    min-width: 300px;
    height: 150px;
    background: dodgerblue;
    border: none;
    transition: all 0.3s;
    font-size: 18px;
    word-break: keep-all;
  }

  @media screen and (max-width: 780px) {
    flex-direction: column;
    & > button {
      width: 300px;
      height: 150px;
      background: dodgerblue;
      border: none;
      transition: all 0.3s;
      padding: 10px;
    }
  }
  @media screen and (max-width: 360px) {
    flex-direction: column;
    & > button {
      width: 200px;
      height: 150px;
      background: dodgerblue;
      border: none;
      transition: all 0.3s;
    }
  }
`;

const Question = () => {
  const [questionNum, setQuestionNum] = useState(0);
  const [totalScore, setTotalScore] = useState([
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "TF", score: 0 },
    { id: "JP", score: 0 },
  ]);
  const nevigate = useNavigate();

  const handleClickBtn = (num, type) => {
    const newScroe = totalScore.map((item) =>
      item.id === type ? { id: item.id, score: item.score + num } : item
    );
    setTotalScore(newScroe);
    if (QuestionData.length !== questionNum + 1) {
      setQuestionNum(questionNum + 1);
    } else {
      const mbti = totalScore.reduce(
        (acc, curr) =>
          acc +
          (curr.score >= 2 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)),
        ""
      );

      nevigate({
        pathname: "/result",
        search: `?${createSearchParams({
          mbti: mbti,
        })}`,
      });
    }
  };

  return (
    <>
      <ProgressBar
        striped
        variant="info"
        now={(questionNum / QuestionData.length) * 100}
        animated
      />
      <Wrapper>
        <Title>{QuestionData[questionNum]?.title}</Title>
        <ButtonGroup>
          <Button
            onClick={() => handleClickBtn(1, QuestionData[questionNum].type)}
          >
            {QuestionData[questionNum].answera}
          </Button>
          <Button
            onClick={() => handleClickBtn(0, QuestionData[questionNum].type)}
          >
            {QuestionData[questionNum].answerb}
          </Button>
        </ButtonGroup>
      </Wrapper>
    </>
  );
};

export default Question;
