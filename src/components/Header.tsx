import styled from 'styled-components';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import React from 'react';
import { SIZE } from '../style/theme';

const HeaderWrapper = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
  padding-top: 20px;
  .rule {
    font-size: 26px;
    cursor: pointer;
  }

  @media screen and (min-width: ${SIZE.tablet}) {
    padding-right: 100px;
    width: 80%;
  }
`;

const Header = ({ handleGameRule }: { handleGameRule: () => void }) => {
  return (
    <HeaderWrapper>
      <BsFillQuestionCircleFill className="rule" onClick={handleGameRule} />
    </HeaderWrapper>
  );
};

export default React.memo(Header);
