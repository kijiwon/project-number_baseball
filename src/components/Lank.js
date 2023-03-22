import React from "react";

function Lank ({resultList}){
    return (
        <ul>
            {resultList? <>
            <p>{resultList.userName}</p>
            <p>{resultList.try}</p>
            </>
            : null}
        </ul>
    )
}

export default Lank;