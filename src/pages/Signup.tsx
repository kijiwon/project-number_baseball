import Modal from '../components/Modal';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Input = styled.input`
  border: 1px solid black;
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
        <form onSubmit={handleLogin}>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" value={'login'} />
        </form>
      </div>
    </Modal>
  );
};

export default SignUp;
