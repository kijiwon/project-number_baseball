/* eslint-disable react/react-in-jsx-scope */

import Modal from 'components/Modal';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <Modal onClose={() => {}}>
      Login
      <form>
        <label>email</label>
        <input type="email" required />
        <label>password</label>
        <input type="password" minLength={6} required />
        <input type="submit" value={'로그인'} />
      </form>
      <button onClick={() => navigate('/signup')}>회원가입</button>
    </Modal>
  );
};

export default Login;
