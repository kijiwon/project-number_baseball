/* eslint-disable import/no-named-as-default */
import { useContext } from 'react';
import styled from 'styled-components';
import { GameOverContext, RandomNumberContext, ResultContext } from '../App';
import { FaArrowDown } from 'react-icons/fa';
import { COLOR } from '../style/theme';
import {
  GameOverContextType,
  RandomNumberContextType,
  ResultContextType,
} from '../../types/type';

const GameOverScreen = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const GameOverWrapper = styled.div`
  width: 300px;
  height: 400px;
  background-color: ${COLOR.main_yellow};
  border: 5px solid ${COLOR.gray_green};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-top: 80px;

  h1 {
    font-size: 50px;
    font-family: 'East Sea Dokdo';
    margin-bottom: 30px;
  }
`;

const GameScoreWrapper = styled.div`
  width: 150px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  border: 2px solid ${COLOR.main_green};
  border-radius: 10px;
  text-align: center;

  font-size: 24px;
  font-family: 'Nanum Pen Script';
  p {
    border-right: 2px solid ${COLOR.main_green};
    padding-top: 5px;
    padding-right: 10px;
  }
  span {
    padding-top: 5px;
    padding-right: 10px;
  }
`;

const RightAnswer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: 'Nanum Pen Script';
  font-size: 24px;
  span {
    font-family: 'East Sea Dokdo';
    font-size: 30px;
    margin-top: 10px;
  }
`;

const RetryButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: 'Nanum Pen Script';
  font-size: 22px;
  font-weight: 600;
`;

const ResetButton = styled.button`
  width: 80px;
  height: 30px;

  border: none;
  border-radius: 10px;

  font-size: 18px;
  font-family: 'Nanum Pen Script';
  font-weight: 700;
  color: ${COLOR.hover_yellow};
  background-color: ${COLOR.hover_green};
  &:hover {
    background-color: ${COLOR.gray_green};
  }
`;

const GameOver = () => {
  const resultContext = useContext<ResultContextType | null>(ResultContext);
  const gameOverContext = useContext<GameOverContextType | null>(
    GameOverContext,
  );
  const randomNumberContext = useContext<RandomNumberContextType | null>(
    RandomNumberContext,
  );
  const { result, setResult } = resultContext as ResultContextType;
  const { gameOver, setGameOver } = gameOverContext as GameOverContextType;
  const { randomNum, setRandomNum, getRandomNumbers } =
    randomNumberContext as RandomNumberContextType;

  const handleRetryGame = () => {
    setGameOver(!gameOver);
    setResult([]);
    setRandomNum(getRandomNumbers());
  };

  const title =
    result[result.length - 1].result === '홈런!!' ? 'HOMERUN!!' : 'Game Over';
  console.log(result);

  return (
    <GameOverScreen>
      <GameOverWrapper>
        <h1>{title}</h1>
        {title === 'HOMERUN!!' ? (
          <GameScoreWrapper>
            <p>점수</p> <span>{100 - (result.length - 1) * 10}</span>
          </GameScoreWrapper>
        ) : (
          <RightAnswer>
            <p>정답은</p>
            <span>{randomNum}</span>
          </RightAnswer>
        )}
        <RetryButtonWrapper>
          <p>다시 시도하고 싶다면</p>
          <div>
            <FaArrowDown />
          </div>
          <ResetButton onClick={handleRetryGame}>재도전</ResetButton>
        </RetryButtonWrapper>
      </GameOverWrapper>
    </GameOverScreen>
  );
};

export default GameOver;
