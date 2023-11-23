import StartGame from './pages/StartGame';
import Game from './pages/Game';
import styled from 'styled-components';
import { SIZE, COLOR } from '../src/style/theme';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
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

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 20px;
  line-height: 2;
  h1 {
    text-align: center;
    font-size: 28px;
    font-weight: bold;
  }
`;

const RuleList = styled.ul`
  list-style: square;
  padding-left: 30px;
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

const GameRule = ({ state, setState }) => {
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
        <CloseButton onClick={() => setState(!state)}>닫기</CloseButton>
      </RuleWrapper>
    </Rule>
  );
};

function App() {
  const [openRule, setOpenRule] = useState(false);

  return (
    <BrowserRouter>
      <AppWrapper>
        <Header state={openRule} setState={setOpenRule} />
        {openRule && <GameRule state={openRule} setState={setOpenRule} />}
        <Routes>
          <Route path="/" element={<StartGame />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </AppWrapper>
    </BrowserRouter>
  );
}

export default App;
