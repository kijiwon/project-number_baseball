/* eslint-disable react/react-in-jsx-scope */
import Modal from 'components/Modal';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import {
  BaseballIcon,
  FormContainer,
  HeaderContainer,
  Input,
  LabelText,
  SubmitButton,
  SuccessModal,
} from 'style/ModalCommon.styled';
import styled from 'styled-components';
import { COLOR } from 'style/theme';

const SignUpButtonWrapper = styled.div`
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  margin-top: 10px;
`;

const MoveToSignUpButton = styled.button`
  font-size: 20px;
  padding: 8px 50px 0px;
  font-family: 'Jua';
  background-color: inherit;
  border: none;
  border-bottom: 2px solid ${COLOR.gray_green};
  cursor: pointer;
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const userName = userCredential.user.displayName;
        setUserName(userName as string);
        setIsLoggedIn(true);
        setTimeout(() => {
          navigate('/game');
        }, 2000);
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

  return (
    <Modal>
      <HeaderContainer onClick={() => navigate('/')}>
        <IoArrowBack size={22} />
        <span>뒤로가기</span>
      </HeaderContainer>
      <FormContainer onSubmit={handleLogin}>
        <div>
          <LabelText>
            <BaseballIcon />
            email
          </LabelText>
          <Input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <LabelText>
            <BaseballIcon />
            password
          </LabelText>
          <Input
            type="password"
            minLength={6}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <SubmitButton type="submit" value={'로그인'} />
          <SignUpButtonWrapper>
            <p>아직 회원이 아니신가요? 👉👉👉</p>
            <MoveToSignUpButton onClick={() => navigate('/signup')}>
              회원가입하러 가기
            </MoveToSignUpButton>
          </SignUpButtonWrapper>
        </div>
      </FormContainer>
      {isLoggedIn && (
        <SuccessModal>
          {userName}님, 환영합니다!
          <br />
          <span>게임 페이지로 이동됩니다...</span>
        </SuccessModal>
      )}
    </Modal>
  );
};

export default Login;
