/* eslint-disable import/no-named-as-default */
import StartGame from './pages/StartGame';
import Game from './pages/Game';
import styled from 'styled-components';
import { SIZE, COLOR } from '../src/style/theme';
import React, { useState, useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import GameOver from './components/GameOver';
const AppWrapper = styled.div`
  background-color: ${COLOR.main_green};
  min-width: ${SIZE.mobileMin};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Rule = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const RuleWrapper = styled.section`
  background-color: #ececec;
  padding: 20px;
  border: none;
  border-radius: 20px;
  box-shadow: 0px 3px 2px 1px rgba(0, 0, 0, 0.4);
  font-family: 'Nanum Pen Script';
  font-size: 18px;
  margin: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  line-height: 2;
  h1 {
    text-align: center;
    font-size: 28px;
    font-weight: bold;
  }
  @media (min-width: ${SIZE.tablet}) {
    font-size: 20px;
    margin: 0;
  }
`;

const RuleList = styled.ul`
  list-style: square;
  padding-left: 30px;
  p {
    font-size: 14px;
  }
  @media (min-width: ${SIZE.tablet}) {
    p {
      font-size: 20px;
      margin-bottom: 10px;
    }
  }
`;

const CloseButton = styled.button`
  width: 80px;
  height: 30px;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  background-color: ${COLOR.main_green};
  color: ${COLOR.main_yellow};
  font-size: 20px;
  font-family: 'Nanum Pen Script';
  &:hover {
    background-color: ${COLOR.hover_green};
  }
`;

export const ResultContext = React.createContext();
export const GameOverContext = React.createContext();
export const RandomNumberContext = React.createContext();

const GameRule = ({ handleGameRule }) => {
  return (
    <Rule>
      <RuleWrapper>
        <h1>4자리 숫자와 위치가 모두 맞아야 성공!</h1>
        <p>
          숫자는 1~9까지 구성되어 있으며, 각 숫자는 한번씩만 사용 가능합니다
        </p>
        <RuleList>
          <li>숫자와 자리의 위치가 맞으면 스트라이크(S)</li>
          <li>숫자만 맞으면 볼(B) </li>
          <li>숫자가 하나도 맞지 않을 경우 아웃(OUT) </li>
        </RuleList>
        <CloseButton onClick={handleGameRule}>닫기</CloseButton>
      </RuleWrapper>
    </Rule>
  );
};

const getRandomNumbers = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const numberArray = [];

  for (let i = 0; i < 4; i++) {
    const chosenNum = numbers.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    numberArray.push(chosenNum);
  }
  return numberArray;
};

function App() {
  const [openRule, setOpenRule] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [randomNum, setRandomNum] = useState(getRandomNumbers());

  const [result, setResult] = useState([]);

  const handleGameRule = useCallback(() => setOpenRule(!openRule), [openRule]);

  return (
    <RandomNumberContext.Provider
      value={{ randomNum, setRandomNum, getRandomNumbers }}
    >
      <GameOverContext.Provider value={{ gameOver, setGameOver }}>
        <ResultContext.Provider value={{ result, setResult }}>
          <BrowserRouter>
            <AppWrapper>
              <Header handleGameRule={handleGameRule} />
              {openRule && <GameRule handleGameRule={handleGameRule} />}
              {gameOver && (
                <GameOver
                  gameOver={gameOver}
                  setGameOver={setGameOver}
                  result={result}
                />
              )}
              <Routes>
                <Route path="/" element={<StartGame />} />
                <Route
                  path="/game"
                  element={<Game result={result} setResult={setResult} />}
                />
              </Routes>
            </AppWrapper>
          </BrowserRouter>
        </ResultContext.Provider>
      </GameOverContext.Provider>
    </RandomNumberContext.Provider>
  );
}

export default App;
