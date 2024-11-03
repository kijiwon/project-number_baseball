/* eslint-disable react/react-in-jsx-scope */
import { getDatabase, onValue, ref } from 'firebase/database';
import { ScoreDataType } from '../../types/type';
import { IoArrowBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { LiaTrophySolid } from 'react-icons/lia';
import styled from 'styled-components';
import { FaCrown } from 'react-icons/fa6';
import { useState } from 'react';
import { useEffect } from 'react';

const RankingWrapper = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div:first-child {
    width: 70%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;

    > p {
      font-size: 18px;
      font-family: 'Jua';
      color: black;
    }
  }
`;

const RankingTable = styled.table`
  width: 50%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  text-align: center;

  > p {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: baseline;
    text-align: center;
    gap: 3px;
    margin-bottom: 20px;
    > span {
      font-size: 36px;
      font-family: 'Jua';
      color: white;
    }
  }

  > thead {
    margin-bottom: 20px;
    > tr {
      display: flex;
      justify-content: space-around;
    }
  }
  th {
    text-align: center;
    font-size: 22px;
    font-family: 'Nanum Pen Script';
  }

  > tbody {
    flex: 1;

    > tr {
      height: 50px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      background-color: #fff;
      border-radius: 20px;
      font-size: 22px;
      font-family: 'Jua';
      margin-bottom: 20px;
    }
  }
`;

const Ranking = () => {
  const [scoresArray, setScoresArray] = useState<ScoreDataType[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const database = getDatabase();
    const scoreRef = ref(database, 'score_board');
    onValue(scoreRef, (snapshot) => {
      const data = snapshot.val();
      const updatedScoresArray: ScoreDataType[] = [];

      if (data) {
        // 데이터를 배열로 변환
        Object.keys(data).forEach((key) => {
          const entry = data[key];
          updatedScoresArray.push({
            userId: entry.userId,
            userName: entry.userName,
            score: entry.score,
          });
        });

        // score를 기준으로 내림차순 정렬
        updatedScoresArray.sort((a, b) => b.score - a.score);
        setScoresArray(updatedScoresArray);
      }
    });
  }, []);

  return (
    <RankingWrapper>
      <div>
        <IoArrowBack onClick={() => navigate(-1)} size={20} />
        <p>뒤로가기</p>
      </div>
      <RankingTable>
        <p>
          <FaCrown color="gold" size={38} />
          <span>RANKING</span>
        </p>
        <thead>
          <tr>
            <th>순위</th>
            <th>닉네임</th>
            <th>점수</th>
          </tr>
        </thead>
        <tbody>
          {scoresArray.length ? (
            scoresArray.map((score, idx) => (
              <tr key={idx}>
                <td>
                  {idx == 0 ? <LiaTrophySolid color="gold" size={26} /> : ''}
                  {idx + 1}
                </td>
                <td>{score.userName}</td>
                <td>{score.score}</td>
              </tr>
            ))
          ) : (
            <div>로딩중...</div>
          )}
        </tbody>
      </RankingTable>
    </RankingWrapper>
  );
};

export default Ranking;
