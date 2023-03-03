import React from "react";

function Tries({count,tryNum}) {
    return (
        <li>
            <div>{count}번째 시도</div>
            <div>{tryNum}</div>
        </li>
    )
}

export default Tries;