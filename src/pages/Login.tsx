/* eslint-disable react/react-in-jsx-scope */
import Modal from 'components/Modal';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userName, setUserName] = useState('지원');
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
        }, 3000);
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

  return (
    <Modal onClose={() => {}}>
      Login
      <form onSubmit={handleLogin}>
        <label>email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>password</label>
        <input
          type="password"
          minLength={6}
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value={'로그인'} />
      </form>
      <button onClick={() => navigate('/signup')}>회원가입</button>
      {isLoggedIn && <div>{userName}님</div>}
    </Modal>
  );
};

export default Login;
