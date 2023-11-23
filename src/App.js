import StartGame from './pages/StartGame';
import Game from './pages/Game';
import styled from 'styled-components';
import { SIZE, COLOR } from '../src/style/theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const AppWrapper = styled.div`
  background-color: ${COLOR.main_green};
  min-width: ${SIZE.mobileMin};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <BrowserRouter>
      <AppWrapper>
        <Routes>
          <Route path="/" element={<StartGame />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </AppWrapper>
    </BrowserRouter>
  );
}

export default App;
