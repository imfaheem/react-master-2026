import { memo }  from "react";

export const UseCallback = memo(({
    dummyValue,
    handleButtonClick
}) => {

    console.log("Button Clicked & UseCallback Child component re-renders. ", dummyValue);

    return (
        <div>
            <h4>UseCallback Hook</h4>
            <button onClick={handleButtonClick}>Button Clicked!</button>
        </div>
    )
})
