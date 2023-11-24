import styled from 'styled-components';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import React from 'react';

const HeaderWrapper = styled.header`
  width: 80%;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  padding-right: 100px;
  padding-top: 20px;
  .rule {
    font-size: 26px;
    cursor: pointer;
  }
`;

const Header = ({ handleGameRule }) => {
  return (
    <HeaderWrapper>
      <BsFillQuestionCircleFill className="rule" onClick={handleGameRule} />
    </HeaderWrapper>
  );
};

export default React.memo(Header);