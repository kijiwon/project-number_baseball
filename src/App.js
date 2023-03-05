import './App.css';
import StartGame from './components/StartGame';
import { useEffect, useState } from 'react';
function App() {
  // 랜덤한 4자리 숫자 뽑기
  function getNumbers() {
    const numbers = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for (let i = 0; i < 4; i += 1) {
      const chosen = numbers.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
      array.push(chosen);
    }
    return array;
  }
  // 게임에서 사용할 상태
  const [result,setResult] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [value, setValue] = useState('');
  const [answer,setAnswer] = useState(getNumbers());
  const [tries, setTries] = useState([]);
  
  const onSumbit = (e)=>{
    if(answer.join('')===inputValue){
      setResult('홈런!!');
      setValue(inputValue);
    } else{
      if(tries.length>=10){
        setResult(`아웃!! 정답은 ${answer.join('')}입니다.`);
      } else {
        const answerArray = inputValue.split('').map((el)=>parseInt(el));
        let strike = 0;
        let ball = 0;
        for(let i=0; i<4; i++){
          if(answerArray[i]===answer[i]){
            strike++;
          } else if(answer.includes(answerArray[i])){
            ball++;
          }
        }
        setResult(`${strike}Strike ${ball}Ball`);
        setValue(inputValue);
        setTries([...tries,{try: inputValue, result: `${strike}Strike ${ball}Ball`}]
        );
      }
      setInputValue('')
    }
  }
  console.log(tries.length);
  console.log(answer);

  // retry버튼
  const btnRetry = ()=>{
    setResult('');
    setAnswer(new getNumbers());
    setValue('');
    setTries([]);
    setInputValue('');
    // console.log(state.answer)
  }
  // input창 초기화
  const onChange=(e)=>{
    setInputValue(e.target.value);
    console.log(inputValue);
}
  
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
      }}>Play</button>
      </div>
      <StartGame result={result} tries={tries} inputValue={inputValue} onChange={onChange} onSumbit={onSumbit} btnRetry={btnRetry}/>
    </div>
  );
}

export default App;
