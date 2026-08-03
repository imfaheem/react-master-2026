import { memo } from "react";

export const MemoExample = memo(({ dummyValue }) => {

    console.log("Dummy Value: ", dummyValue);

    return (
        <div>
            <h4>Memo Example</h4>
            <h3>Value: {dummyValue}</h3>
        </div>
    )
})
