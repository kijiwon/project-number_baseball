import styled from 'styled-components';
import React, { useContext } from 'react';
import { COLOR, SIZE } from '../style/theme';
import { ResultContext } from '../App';
import { ResultContextType } from '../../types/type';

const ScoreWrapper = styled.div`
  margin-top: 50px;
  width: 90%;
  height: 70vh;
  @media screen and (min-width: ${SIZE.tablet}) {
    width: 70%;
    height: 100vh;
  }
`;

const ScoreTable = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  @media screen and (min-width: ${SIZE.tablet}) {
    display: block;
    border: 3px solid ${COLOR.gray_green};
    border-radius: 10px;
  }
`;

const ScoreCount = styled.div`
  display: grid;
  text-align: center;
  margin-left: 70px;
  p {
    font-size: 18px;
    padding-top: 10px;
    padding-bottom: 5px;
    font-family: 'East Sea Dokdo';
    color: ${COLOR.main_yellow};
    border-bottom: 2px solid ${COLOR.gray_green};
  }
  @media screen and (min-width: ${SIZE.tablet}) {
    grid-template-columns: repeat(9, 1fr);
    border-bottom: 2px solid ${COLOR.gray_green};
    margin: 0;
    p {
      font-size: 26px;
      border-right: 2px solid ${COLOR.gray_green};
      border-bottom: none;
    }
    p:last-child {
      border: none;
    }
  }
`;

const Score = styled.div`
  height: fit-content;
  display: grid;
  grid-gap: 9px;
  text-align: center;
  padding-top: 9px;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    border-bottom: 2px solid ${COLOR.gray_green};
  }
  p:first-child {
    font-size: 24px;
    font-family: 'Nanum Pen Script';
    color: black;
    padding-left: 30px;
    padding-right: 30px;
  }
  p {
    font-family: 'East Sea Dokdo';
    font-size: 24px;
    color: ${COLOR.main_yellow};
    padding-right: 10px;
  }
  @media screen and (min-width: ${SIZE.tablet}) {
    height: 160px;
    grid-template-columns: repeat(9, 1fr);
    padding-top: 20px;
    div {
      display: block;
      border: none;
    }
    p:first-child {
      font-size: 28px;
      font-weight: 600;
      margin-bottom: 20px;
      margin-bottom: 38px;
      padding: 0;
    }
    p {
      font-size: 22px;
    }
  }
`;

const ScoreBoard = () => {
  const cnt = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const resultContext = useContext(ResultContext);
  const { result } = resultContext as ResultContextType;

  return (
    <ScoreWrapper>
      <ScoreTable>
        <ScoreCount>
          {cnt.map((it, idx) => (
            <p key={idx}>{it}회</p>
          ))}
        </ScoreCount>
        <Score>
          {result.length >= 1 &&
            result.map((it, idx) => (
              <div key={idx}>
                <p>{it.answer}</p>
                <p>{it.result.slice(0, 6)}</p>
                <p>{it.result.slice(6)}</p>
              </div>
            ))}
        </Score>
      </ScoreTable>
    </ScoreWrapper>
  );
};

export default React.memo(ScoreBoard);
