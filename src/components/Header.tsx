import styled from 'styled-components';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import React from 'react';
import { COLOR, SIZE } from '../style/theme';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { FaBaseballBatBall } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { FaRankingStar } from 'react-icons/fa6';

const HeaderWrapper = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  .rule {
    font-size: 26px;
    cursor: pointer;
  }

  @media screen and (min-width: ${SIZE.tablet}) {
    width: 80%;
    padding-top: 20px;
  }
`;

const ScoreBoard = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  gap: 3px;
  padding: 6px 12px 3px;
  background-color: inherit;
  border: 2px solid ${COLOR.hover_yellow};
  border-radius: 8px;
  color: ${COLOR.hover_yellow};
  font-family: 'Jua';
  font-size: 20px;

  cursor: pointer;

  &:hover {
    background-color: ${COLOR.hover_green};
  }
`;

const HeaderRightSide = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 6px;

  > button {
    background-color: inherit;
    border: none;
    border: 1.5px solid #373737;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 700;
    color: #373737;
    padding: 3px 6px;

    cursor: pointer;
    &:hover {
      background-color: ${COLOR.hover_green};
    }
  }
`;

const UserName = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  gap: 4px;
  font-size: 22px;
  color: black;
  font-family: 'Jua';
`;

const Header = ({ handleGameRule }: { handleGameRule: () => void }) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') as string);
  const userName = user?.displayName;

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('user');
      navigate('/');
    } catch (error) {
      console.error('로그아웃 실패:', error);
    }
  };

  return (
    <HeaderWrapper>
      <ScoreBoard>
        <FaRankingStar size={24} />
        랭킹 보드
      </ScoreBoard>
      <HeaderRightSide>
        {userName && (
          <UserWrapper>
            <UserName>
              <FaBaseballBatBall />
              {userName}
            </UserName>
            <button onClick={handleLogout}>로그아웃</button>
          </UserWrapper>
        )}
        <BsFillQuestionCircleFill className="rule" onClick={handleGameRule} />
      </HeaderRightSide>
    </HeaderWrapper>
  );
};

export default React.memo(Header);
