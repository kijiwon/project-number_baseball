import React from "react";
import './GamePage.css'
import {MdReplay} from 'react-icons/md';
import {GiSpikedBat} from 'react-icons/gi'
function StartGame ({result, tries, inputValue, onChange, onSumbit, btnRetry}){
    return(
        <div className="game-page">
            <div className="game-box">
                <div className="show-result">
                    {result !==''? <p className="game-result">{result}</p> : <div className="none"></div>}
                </div>
                <div className="input-value">
                    <input type='text' onChange={onChange} value={inputValue}/>
                    <button onClick={onSumbit}><GiSpikedBat/></button>
                    {result==='홈런!!' || tries.length===10? <button onClick={btnRetry}><MdReplay/></button>: <div></div>}
                </div>
                <ul>
                    {tries.length!==0 ? tries.map((el,i)=>{
                        return <li key={i}>{i+1}번째 시도 {el.try} : {el.result}</li>
                    }) : <div></div>}
                </ul>
            </div>
        </div>
    )
};

export default StartGame;