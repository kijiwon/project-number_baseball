import React from "react";
import './GamePage.css'
function StartGame ({state, setInputValue, onSumbit, btnRetry}){
    return(
        <div className="game-page">
            <div className="game-box">
                <div className="show-result">
                    {state.result !==''? <h2>{state.result}</h2> : null}
                </div>
                <div className="input-value">
                    <input type='text' onChange={setInputValue} />
                    <button onClick={onSumbit}>입력</button>
                    <button onClick={btnRetry}>재시도</button>
                </div>
            </div>
        </div>
    )
};

export default StartGame;