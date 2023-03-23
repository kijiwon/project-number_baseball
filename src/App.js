import './App.css';
import StartGame from './components/StartGame';
import Lank from './components/Lank';
import { useEffect, useState } from 'react';
import {IoGameController} from 'react-icons/io5'
import {IoBaseballOutline} from 'react-icons/io5'
function App() {
  const gameResult = JSON.parse(localStorage.getItem('gameResult'));
  // const [resultList,setResultList] = useState(gameResult);
  // useEffect(()=>{
  //   localStorage.setItem('gameResult',JSON.stringify(gameResult));
  // },[gameResult,resultList])
  const [resultList, setResultList] = useState(gameResult || []);

useEffect(() => {
  localStorage.setItem('gameResult', JSON.stringify(resultList));
}, [resultList]);
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
  //play 버튼 클릭시 화면 바꾸기
  const [className,setClassName]=useState('show-main');
  const [startGame, setStartGame] = useState(false);
  useEffect(() => {
    setClassName(`${startGame ? "show-game" : "show-main"}`);
  }, [startGame]);
  const [userName, setUserName] = useState('');
  const [result,setResult] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [value, setValue] = useState('');
  const [answer,setAnswer] = useState(getNumbers());
  const [tries, setTries] = useState([]);
  
  // 유저네임 입력
  const inputUser = (e)=>{
    setUserName(e.target.value);
  }
  const onSumbit = (e)=>{
    if(answer.join('')===inputValue){
      setResult('홈런!!');
      setValue(inputValue);
      setResultList({
        userName: userName,
        try : tries.length+1
      });
    } else{
      if(tries.length===8){
        setResult(
          `아웃!!
          정답은 ${answer.join('')}입니다.`
          );
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
        setTries([...tries,{try: inputValue, result: 
          `${strike}Strike 
          ${ball}Ball`
        }]
        );
      }
      setInputValue('')
    }
  }
  console.log(tries.length);
  console.log(answer);
  console.log(resultList);
  console.log(localStorage.gameResult)
  // retry버튼
  const btnRetry = ()=>{
    setResult('');
    setAnswer(new getNumbers());
    setValue('');
    setTries([]);
    setInputValue('');
    setStartGame(false);
    setUserName('');
    // console.log(state.answer)
  }
  // input창 초기화
  const onChange=(e)=>{
    setInputValue(e.target.value);
    console.log(inputValue);
}
  

  return (
    <div className="App">
      <header>
        <IoGameController className='game-icon'/>
        <h1>wiz land</h1>
      </header>
      <div className='game-page'>
        <aside>
          <p className='lank'>랭킹</p>
          <Lank resultList={resultList}/>
        </aside>
        <main>
          <h2> <IoBaseballOutline className='title-icon'/>숫자 야구</h2>
          <div className='game'>
            <div className={className}>
              <input value={userName} onChange={inputUser} placeholder='이름을 입력해 주세요.'/>
              <button className='btn' onClick={()=>{
                setStartGame(startGame=>!startGame);
              }}>Play</button>
            </div>
            <StartGame result={result} tries={tries} inputValue={inputValue} onChange={onChange} onSumbit={onSumbit} btnRetry={btnRetry}/>            
          </div>
        </main>        
      </div>

    </div>
  );
}

export default App;
{/* <a href="https://kr.freepik.com/free-photo/baseball-players-at-professional-baseball-stadium-in-evening-during-a-game_29155877.htm#query=%EC%95%BC%EA%B5%AC%EC%9E%A5&position=4&from_view=search&track=robertav1">작가 viarprodesign</a> 출처 Freepik */}
// 사진: <a href="https://unsplash.com/ko/%EC%82%AC%EC%A7%84/oZHceo-i8LQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>의<a href="https://unsplash.com/@larrymjackii?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Larry Jack</a>
  