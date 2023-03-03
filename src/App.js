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
  let initialState = {
    result: '',
    value: '',
    answer: getNumbers(),
    tries: [],
  };
  const [state, setState]= useState(initialState);
  console.log(state.answer);
  // 입력된 값
  const [inputValue, setInputValue] = useState('');

  // 입력 버튼 클릭시 입력값과 정답 비교
  const onSumbit = (e)=>{
    e.preventDefault();
    if(inputValue.target.value===state.answer.join('')){
      setState({
        result: '홈런',
        value: inputValue.target.value,
        answer: state.answer,
        tries: [...state.tries, {try: inputValue.target.value, result: '홈런'}]
      })
      // console.log(state)
    } else {
      // strike와 ball 확인하기
      const answerArray = inputValue.target.value.split('').map((el)=>parseInt(el));
      let strike = 0;
      let ball = 0;
      for(let i=0; i<4; i++){
        if(answerArray[i]===state.answer[i]){
          strike +=1;
        } else if(state.answer.includes(answerArray[i])){
          ball +=1;
        }
      }
      setState({
        result: `${strike}Strike ${ball}Ball`,
        value: inputValue.target.value,
        answer: state.answer,
        tries: [...state.tries, {try: inputValue.target.value, result: `${strike}Strike ${ball}Ball`}]
      })
      // 기회를 다 썼을때
      if(state.tries.length>=10){
        setState({
          result: `아웃!! 정답은 ${state.answer.join('')}였습니다.`,
          value: inputValue.target.value,
          answer: state.answer,
          tries: [...state.tries, {try: inputValue.target.value, result: `아웃!! 정답은 ${state.answer.join('')}였습니다.`}]
        })
      } 
      // console.log(state.result)
    }
    console.log(state.tries, state.value)
  }
  // retry버튼
  const btnRetry = ()=>{
    setState({
      answer: new getNumbers(),
    });
    // console.log(state.answer)
  }
  // useEffect로 state 밀림현상 해결
  useEffect(()=>{
    if(state.value===undefined){
      setState({
        result: '',
        value: inputValue.target.value,
        answer: getNumbers(),
        tries: [],
      })
    }
  },[state])
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
      <StartGame state={state} setState = {setState} setInputValue={setInputValue} onSumbit={onSumbit} btnRetry={btnRetry}/>
    </div>
  );
}

export default App;
