import { useState, useRef, useContext } from 'react';
import styled from 'styled-components';
import { COLOR } from '../style/theme';
import ScoreBoard from '../components/ScoreBoard';
import { GameOverContext, ResultContext, RandomNumberContext } from '../App';
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
    cursor: pointer;
    padding: 10px;

    background-color: ${COLOR.main_yellow};
    color: ${COLOR.main_green};
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

const Game = () => {
  const [answer, setAnswer] = useState('');
  const { result, setResult } = useContext(ResultContext);
  const { gameOver, setGameOver } = useContext(GameOverContext);
  const { randomNum, setRandomNum, getRandomNumbers } =
    useContext(RandomNumberContext);
  const inputRef = useRef();

  const handleSubmit = () => {
    if (answer.length < 1) {
      inputRef.current.focus();
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

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
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
          onKeyDown={(e) => handleKeyPress(e)}
        />
        <SubmitButton onClick={handleSubmit}>던지기</SubmitButton>
      </InputWrapper>
      <ScoreBoard />
    </>
  );
};

export default Game;
