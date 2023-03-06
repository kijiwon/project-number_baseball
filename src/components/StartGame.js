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
                    <button onClick={onSumbit} className="btn-input"><GiSpikedBat className="bat"/></button>
                    {result==='홈런!!' || result.includes('아웃')? <div className="retry-page"><button className="retry" onClick={btnRetry}><MdReplay/></button></div>: <div></div>}
                </div>
                <table className="result-table">
                    <tr className="tr">
                        <th>1회</th>
                        <th>2회</th>
                        <th>3회</th>
                        <th>4회</th>
                        <th>5회</th>
                        <th>6회</th>
                        <th>7회</th>
                        <th>8회</th>
                        <th>9회</th>
                    </tr>
                    <ul>
                    {tries.length!==0 ? tries.map((el,i)=>{
                        return <li key={i}><p className="try-value">{el.try}</p> <p className="try-result">{el.result}</p></li>
                    }) : <td className="result-list"></td>}
                    </ul>
                </table>
            </div>
        </div>
    )
};

export default StartGame;