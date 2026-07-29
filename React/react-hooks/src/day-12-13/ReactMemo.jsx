import React from "react";

export const ReactMemo = React.memo(({count}) => {
    
    console.log("Child Component.");

    return (
        <div>React Memo</div>
    )
})
