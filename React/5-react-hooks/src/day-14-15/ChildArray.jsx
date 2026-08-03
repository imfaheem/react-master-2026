import React from "react";

export const ChildArray = React.memo(({arrayList}) => {
    console.log("ChildArray Rendered");
    
    return (
        <div>
            <h4>ChildArray: [ {arrayList.join(", ")} ]</h4>
        </div>
    )
})
