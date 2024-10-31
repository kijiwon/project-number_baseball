/* eslint-disable react/react-in-jsx-scope */
import Modal from '../components/Modal';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import {
  BaseballIcon,
  ErrorMessage,
  FormContainer,
  HeaderContainer,
  Input,
  LabelText,
  SubmitButton,
  SuccessModal,
} from 'style/ModalCommon.styled';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorCode, setErrorCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successSignup, setSuccessSignup] = useState(false);

  const navigate = useNavigate();

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
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
    <Modal>
      <HeaderContainer onClick={() => navigate('/login')}>
        <IoArrowBack size={22} />
        <span>뒤로가기</span>
      </HeaderContainer>
      <FormContainer onSubmit={handleSignUp}>
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
      {successSignup && (
        <SuccessModal>
          회원가입이 완료되었습니다!
          <br />
          <span>로그인 페이지로 이동됩니다...</span>
        </SuccessModal>
      )}
    </Modal>
  );
};

export default SignUp;
