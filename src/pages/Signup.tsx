/* eslint-disable react/react-in-jsx-scope */
import Modal from '../components/Modal';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IoArrowBack } from 'react-icons/io5';
import { CiBaseball } from 'react-icons/ci';
import { COLOR } from 'style/theme';

const HeaderContainer = styled.div`
  width: fit-content;
  font-size: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const FormContainer = styled.form`
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 14px;
  margin-top: 28px;
`;

const LabelText = styled.label`
  font-size: 18px;
  display: flex;
  align-items: end;
  font-family: 'Jua';
  letter-spacing: 4px;
  margin-bottom: 8px;
`;

const Input = styled.input`
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

const SubmitButton = styled.input`
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

const BaseballIcon = styled(CiBaseball)`
  font-size: 22px;
  color: ${COLOR.main_green};
`;

const ErrorMessage = styled.p`
  font-size: 20px;
  color: red;
  text-align: center;
`;

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorCode, setErrorCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successSignup, setSuccessSignup] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name,
        });
        setSuccessSignup(true);
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        setErrorCode(errorCode);
      });
  };

  useEffect(() => {
    switch (errorCode) {
      case 'auth/invalid-email':
        setErrorMessage('잘못된 형식의 이메일입니다');
        break;
      case 'auth/weak-password':
        setErrorMessage('6자리 이상의 비밀번호를 입력하세요');
        break;
      case 'auth/email-already-in-use':
        setErrorMessage('이미 존재하는 회원입니다');
        break;
    }
  }, [errorCode]);

  return (
    <Modal onClose={() => {}}>
      <HeaderContainer>
        <IoArrowBack size={22} />
        <span>뒤로가기</span>
      </HeaderContainer>
      <FormContainer onSubmit={handleLogin}>
        <div>
          <LabelText>
            <BaseballIcon />
            닉네임
          </LabelText>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <LabelText>
            <BaseballIcon />
            이메일
          </LabelText>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <LabelText>
            <BaseballIcon />
            비밀번호
          </LabelText>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {errorCode && errorMessage && (
            <ErrorMessage>{errorMessage}</ErrorMessage>
          )}
        </div>
        <SubmitButton type="submit" value={'회원가입'} />
      </FormContainer>
      {successSignup && <div>회원가입이 완료되었습니다</div>}
    </Modal>
  );
};

export default SignUp;
