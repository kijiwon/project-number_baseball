import React, { useState, useRef, useContext } from 'react';
import styled from 'styled-components';
import { COLOR, SIZE } from '../style/theme';
import ScoreBoard from '../components/ScoreBoard';
import { GameOverContext, ResultContext, RandomNumberContext } from '../App';
import { BsArrowCounterclockwise } from 'react-icons/bs';

import {
  GameOverContextType,
  RandomNumberContextType,
  ResultContextType,
} from '../../types/type';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const InputWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: end;
  margin-top: 100px;
  .retry {
    font-size: 20px;
    font-weight: 700;
    border-radius: 25px;
    padding: 5px;
    margin-right: 10px;
    background-color: ${COLOR.main_yellow};
    color: ${COLOR.main_green};
    cursor: pointer;
    &:hover {
      background-color: ${COLOR.hover_yellow};
    }
  }
  @media screen and (min-width: ${SIZE.tablet}) {
    width: 70%;
    .retry {
      padding: 10px;
    }
  }
`;

const InputNumber = styled.input`
  width: 140px;
  height: 40px;
  font-size: 22px;
  font-weight: bold;
  font-family: 'Nanum Pen Script';
  padding-left: 10px;
  letter-spacing: 20px;

  background-color: inherit;
  border-bottom: 2px solid ${COLOR.main_yellow};
  text-align: center;
  @media screen and (min-width: ${SIZE.tablet}) {
    width: 220px;
    height: 60px;
    letter-spacing: 30px;
    padding-left: 20px;
    font-size: 40px;
  }
`;

const SubmitButton = styled.button`
  width: 60px;
  height: 38px;
  border-radius: 10px;
  border: none;
  background-color: ${COLOR.main_yellow};
  color: ${COLOR.main_green};

  font-family: 'Nanum Pen Script';
  &:hover {
    background-color: ${COLOR.hover_yellow};
    color: ${COLOR.hover_green};
  }
  @media screen and (min-width: ${SIZE.tablet}) {
    width: 100px;
    height: 50px;
    font-size: 24px;
    font-weight: 700;
    border-radius: 16px;
  }
`;

const Game = () => {
  const [answer, setAnswer] = useState<string>('');
  const resultContext = useContext<ResultContextType | null>(ResultContext);
  const gameOverContext = useContext<GameOverContextType | null>(
    GameOverContext,
  );
  const randomNumberContext = useContext<RandomNumberContextType | null>(
    RandomNumberContext,
  );

  if (!resultContext || !gameOverContext || !randomNumberContext) {
    throw new Error('Context must be used within a Provider');
  }

  const { result, setResult } = resultContext;
  const { gameOver, setGameOver } = gameOverContext;
  const { randomNum, setRandomNum, getRandomNumbers } = randomNumberContext;
  const user = JSON.parse(localStorage.getItem('user') as string);

  const navigate = useNavigate();

  console.log(randomNum);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    if (answer.length < 1) {
      inputRef.current?.focus();
      return;
    }
    if (answer === randomNum.join('')) {
      setResult([
        ...result,
        { answer: answer, result: '홈런!!', tries: result.length },
      ]);
      setAnswer('');
      setGameOver(!gameOver);
      return;
    } else {
      let ball = 0;
      let strike = 0;
      const answerArray = answer.split('').map((el) => parseInt(el));
      for (let i = 0; i < 4; i++) {
        if (answerArray[i] === randomNum[i]) {
          strike++;
        } else if (answerArray.includes(randomNum[i])) {
          ball++;
        }
      }
      setResult([
        ...result,
        {
          answer: answer,
          result: `${ball}Ball ${strike}Strike`,
          tries: result.length,
        },
      ]);
    }

    setAnswer('');
    if (result.length > 7) {
      setGameOver(!gameOver);
      return;
    }
  };

  const handleRetry = () => {
    setRandomNum(getRandomNumbers());
    setAnswer('');
    setResult([]);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  useEffect(() => {
    if (user === null) {
      navigate('/');
    }
  }, []);

  return (
    <>
      <InputWrapper>
        <BsArrowCounterclockwise className="retry" onClick={handleRetry} />
        <InputNumber
          ref={inputRef}
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          onKeyDown={(e) => handleKeyPress(e)}
        />
        <SubmitButton onClick={handleSubmit}>던지기</SubmitButton>
      </InputWrapper>
      <ScoreBoard />
    </>
  );
};

export default React.memo(Game);
