import styled from 'styled-components';
import { BsFillQuestionCircleFill } from 'react-icons/bs';

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

const Header = ({ state, setState }) => {
  return (
    <HeaderWrapper>
      <BsFillQuestionCircleFill
        className="rule"
        onClick={() => setState(!state)}
      />
    </HeaderWrapper>
  );
};

export default Header;
