import React from "react";
import './GamePage.css'
function StartGame ({state, setInputValue, onSumbit}){
    return(
        <div className="game-page">
            <div className="show-result">
                {state.result !==''? <h2>{state.result}</h2> : null}
            </div>
            <div className="input-value">
                <input type='text' onChange={setInputValue} />
                <button onClick={onSumbit}>입력</button>
            </div>
        </div>
    )
};

export default StartGame;