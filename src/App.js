import './App.css';
import StartGame from './components/StartGame';
import { useEffect, useState } from 'react';
function App() {
  // 랜덤한 4자리 숫자 뽑기
  function getNumbers() {
    const candidate = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for (let i = 0; i < 4; i += 1) {
      const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
      array.push(chosen);
    }
    return array;
  }
  let initialState = {
    result: '',
    value: '',
    answer: getNumbers(),
    tries: [],
  };
  const [state, setState]= useState(initialState);
  console.log(state.answer);
  //play 버튼 클릭시 화면 바꾸기
  const [className,setClassName]=useState('show-main');
  const [startGame, setStartGame] = useState(false);
  useEffect(() => {
    setClassName(`${startGame ? "show-game" : "show-main"}`);
  }, [startGame]);

  return (
    <div className="App">
      <div className={className}>
      <button className='btn' onClick={()=>{
        setStartGame(startGame=>!startGame);
        getNumbers();}
        }>Play</button>
      </div>
      <StartGame/>
    </div>
  );
}

export default App;
