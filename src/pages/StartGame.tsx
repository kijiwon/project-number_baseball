/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';
import { COLOR, SIZE } from '../style/theme';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
  }
  @media screen and (min-width: ${SIZE.tablet}) {
    padding-top: 80px;
    img {
      width: 80%;
    }
  }
`;

const StartButton = styled.button`
  width: 200px;
  height: 80px;

  border: none;
  border-radius: 15px;
  margin-top: -30px;
  cursor: pointer;

  background-color: ${COLOR.main_yellow};
  font-family: 'Nanum Pen Script';
  font-size: 24px;

  box-shadow:
    0px 1px 1px 1px rgba(0, 0, 0, 0.1),
    1px 0px 1px 1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    background-color: ${COLOR.hover_yellow};
    box-shadow:
      0 5px 5px rgba(0, 0, 0, 0.2),
      0 5px 5px rgba(0, 0, 0, 0.2);
  }
  @media screen and (min-width: ${SIZE.tablet}) {
    margin-top: -80px;
  }
`;

const StartGame = () => {
  const nav = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') as string);

  const handleStart = () => {
    if (user === null) {
      nav('login');
    } else {
      nav('/game');
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(uid);
      }
    });
  }, []);

  return (
    <LogoWrapper>
      <img src={process.env.PUBLIC_URL + '/assets/1.png'} alt="초록 로고" />
      <StartButton onClick={handleStart}>Start</StartButton>
    </LogoWrapper>
  );
};

export default StartGame;
