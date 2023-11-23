import { useState, useRef } from 'react';
import styled from 'styled-components';
import { COLOR } from '../style/theme';
import ScoreBoard from '../components/ScoreBoard';
import { BsArrowCounterclockwise } from 'react-icons/bs';

const InputWrapper = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-around;
  align-items: end;
  margin-top: 100px;

  .retry {
    font-size: 20px;
    border-radius: 25px;
    padding: 10px;

    background-color: ${COLOR.main_yellow};
    color: ${COLOR.main_green};
    cursor: pointer;
    &:hover {
      background-color: ${COLOR.hover_yellow};
    }
  }
`;

const InputNumber = styled.input`
  width: 220px;
  height: 60px;

  background-color: inherit;
  border-bottom: 2px solid ${COLOR.main_yellow};
  text-align: center;
  letter-spacing: 30px;
  padding-left: 20px;
  font-size: 40px;
  font-weight: bold;
  font-family: 'Nanum Pen Script';
`;

const SubmitButton = styled.button`
  width: 100px;
  height: 50px;
  background-color: ${COLOR.main_yellow};
  color: ${COLOR.main_green};
  font-size: 24px;
  font-weight: 700;
  font-family: 'Nanum Pen Script';
  border: none;
  border-radius: 16px;
  &:hover {
    background-color: ${COLOR.hover_yellow};
    color: ${COLOR.hover_green};
  }
`;

const getRandomNumbers = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const numberArray = [];

  for (let i = 0; i < 4; i++) {
    const chosenNum = numbers.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    numberArray.push(chosenNum);
  }
  return numberArray;
};

const Game = () => {
  const [randomNum, setRandomNum] = useState(getRandomNumbers());
  const [answer, setAnswer] = useState('');
  const [result, setResult] = useState([]);

  const inputRef = useRef();

  console.log(randomNum);

  const handleSubmit = () => {
    console.log(answer);
    if (answer.length < 1) {
      inputRef.current.focus();
      return;
    }
    if (answer === randomNum.join('')) {
      setResult([
        ...result,
        { answer: answer, result: '홈런!!', tries: result.length },
      ]);
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
  };

  const handleRetry = () => {
    setRandomNum(getRandomNumbers());
    setAnswer('');
    setResult([]);
  };

  return (
    <>
      <InputWrapper>
        <BsArrowCounterclockwise className="retry" onClick={handleRetry} />
        <InputNumber
          ref={inputRef}
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <SubmitButton onClick={handleSubmit}>던지기</SubmitButton>
      </InputWrapper>
      <ScoreBoard result={result} />
    </>
  );
};

export default Game;
