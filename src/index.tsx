import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GlobalStyle } from './style/GlobalStyle';
import { auth } from './firebase';

console.log(auth);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <>
    <GlobalStyle />
    <App />
  </>,
);
