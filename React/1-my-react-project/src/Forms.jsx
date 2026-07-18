import { useState } from "react"

export const Forms = () => {

    const placeHolder = "Enter text here...";
    const [value, setValue] = useState("This value will not change");
    const [inputValue, setInputValue] = useState("");
    const [textareaValue, setTextareaValue] = useState("");
    const [selectValue, setSelectValue] = useState("- Select Country -");
    const [radioValue, setRadioValue] = useState("");
    const [checked, setChecked] = useState(false);
    const [checked2, setChecked2] = useState(false);

    const handleSelectChange = ()=> {
        setSelectValue(event.target.value);
    }

    const handleRadioButton = ()=> {
        setRadioValue(event.target.value);
        setStd([
            students.map(std => std === 'ali' ? 'Ali Khan' : std)
        ])
    }

    const students = ["ali", 'faheem', 'khan'];
    const [isStd, setStd] = useState(students);
    console.log(isStd);

    return (
        <div>
            {/* Here the value in the input will not change by typing on keyboard because its value is comming from state which is not mutable right now. */}
            <input type="text" value={value} />
            <div className="m-block-10">
                <input type="text" value={inputValue} placeholder={placeHolder} onChange={()=> setInputValue(event.target.value)} />
                <span> Input Value: {inputValue}</span>
            </div>
            <div className="m-block-10">
                <textarea value={textareaValue} placeholder={placeHolder} onChange={()=> setTextareaValue(event.target.value)} />
                <span> Message: {textareaValue}</span>
            </div>
            <div className="m-block-10">
                <select 
                    value={selectValue}
                    onChange={handleSelectChange}
                >
                    <option>Pakistan</option>
                    <option>India</option>
                    <option>Bangladesh</option>
                </select>
                <span> Country: {selectValue}</span>
            </div>
            <div className="m-block-10">
                <label>
                    <input
                        type="radio"
                        value="Male"
                        checked={radioValue === "Male"}
                        onChange={handleRadioButton}
                    />
                    Male
                </label>
                <label>
                    <input
                        type="radio"
                        value="Female"
                        checked={radioValue === "Female"}
                        onChange={handleRadioButton}
                    />
                    Female
                </label>
                <span> Gender: {radioValue}</span>
            </div>
            <div className="m-block-10">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={(e)=> setChecked(e.target.checked)}
                /> Checkbox-1

                <input
                    type="checkbox"
                    checked={checked2}
                    onChange={(e)=> setChecked2(e.target.checked)}
                /> Checkbox-2
                <br />
                <span> Checked values: {checked && "Checkbox - 1"} {checked2 && "Checkbox - 2"}</span>
            </div>
        </div>
    )

}
