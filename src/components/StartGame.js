import React from "react";
import './GamePage.css'
import Tries from "./Tries";
function StartGame ({state, setInputValue, onSumbit, btnRetry}){
    return(
        <div className="game-page">
            <div className="game-box">
                <div className="show-result">
                    {state.result !==''? <p className="game-result">{state.result}</p> : <div className="none"></div>}
                </div>
                <div className="input-value">
                    <input type='text' onChange={setInputValue} />
                    <button onClick={onSumbit}>입력</button>
                    {state.result==='홈런'? <button onClick={btnRetry}>재시도</button>: <div></div>}
                </div>
                <ul>
                    {state.tries.map((el,i)=>{
                        return <Tries key={`${i+1}`} tryNum={el}/>
                    })}
                </ul>
            </div>
        </div>
    )
};

export default StartGame;