import { CiBaseball } from 'react-icons/ci';
import { COLOR } from 'style/theme';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: fit-content;
  font-size: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const FormContainer = styled.form`
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 14px;
  margin-top: 28px;
`;

export const LabelText = styled.label`
  font-size: 18px;
  display: flex;
  align-items: end;
  font-family: 'Jua';
  letter-spacing: 4px;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  font-size: 20px;
  letter-spacing: 2px;
  border-radius: 12px;
  padding-left: 14px;
  margin-bottom: 14px;

  &:focus {
    outline: none;
  }
`;

export const SubmitButton = styled.input`
  height: 60px;
  border-radius: 12px;
  background-color: ${COLOR.hover_green};
  color: white;
  font-size: 22px;
  cursor: pointer;

  &:hover {
    background-color: ${COLOR.main_green};
  }
`;

export const BaseballIcon = styled(CiBaseball)`
  font-size: 22px;
  color: ${COLOR.main_green};
`;

export const ErrorMessage = styled.p`
  font-size: 20px;
  color: red;
  text-align: center;
`;

export const SuccessModal = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 120px;
  border-radius: 10px;
  top: 300px;
  margin-left: 48px;
  font-size: 22px;
  background-color: ${COLOR.hover_yellow};
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);

  > span {
    font-size: 16px;
    margin-top: 5px;
    color: gray;
  }
`;
