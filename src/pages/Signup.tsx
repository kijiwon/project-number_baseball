/* eslint-disable react/react-in-jsx-scope */
import Modal from '../components/Modal';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const FormContainer = styled.form`
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 10px;
`;

const Input = styled.input`
  border: 1px solid black;
  margin-bottom: 14px;
`;

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const credentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      await updateProfile(credentials.user, {
        displayName: name,
      });
      console.log(credentials);
      navigate('/game');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal onClose={() => {}}>
      <div>
        Sign-up
        <FormContainer onSubmit={handleLogin}>
          <label htmlFor="username">user name</label>
          <Input
            id="username"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">email</label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">password</label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" value={'login'} />
        </FormContainer>
      </div>
    </Modal>
  );
};

export default SignUp;
