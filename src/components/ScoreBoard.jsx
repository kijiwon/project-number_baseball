import styled from 'styled-components';
import React, { useContext } from 'react';
import { COLOR } from '../style/theme';
import { ResultContext } from '../App';

const ScoreWrapper = styled.div`
  width: 70%;
  margin-top: 50px;
`;

const ScoreTable = styled.div`
  border: 3px solid ${COLOR.gray_green};
  border-radius: 10px;
`;

const ScoreCount = styled.div`
  display: grid;
  text-align: center;
  grid-template-columns: repeat(9, 1fr);

  border-bottom: 2px solid ${COLOR.gray_green};

  p {
    padding-top: 10px;
    padding-bottom: 5px;
    font-size: 26px;
    font-family: 'East Sea Dokdo';
    border-right: 2px solid ${COLOR.gray_green};
    color: ${COLOR.main_yellow};
  }
`;

const Score = styled.div`
  height: 160px;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  text-align: center;

  padding-top: 30px;

  p:first-child {
    font-size: 28px;
    font-weight: 600;
    font-family: 'Nanum Pen Script';
    color: black;
    margin-bottom: 38px;
  }
  p {
    font-family: 'East Sea Dokdo';
    font-size: 22px;
    color: ${COLOR.main_yellow};
  }
`;

const ScoreBoard = () => {
  const cnt = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const { result } = useContext(ResultContext);
  console.log(result);
  return (
    <ScoreWrapper>
      <ScoreTable>
        <ScoreCount>
          {cnt.map((it, idx) => (
            <p key={idx}>{it}회</p>
          ))}
        </ScoreCount>
        <Score>
          {result.length >= 1 ? (
            result.map((it, idx) => (
              <div key={idx}>
                <p>{it.answer}</p>
                <p>{it.result.slice(0, 6)}</p>
                <p>{it.result.slice(6)}</p>
              </div>
            ))
          ) : (
            <Score />
          )}
        </Score>
      </ScoreTable>
    </ScoreWrapper>
  );
};

export default React.memo(ScoreBoard);
