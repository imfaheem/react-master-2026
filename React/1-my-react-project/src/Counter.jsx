import { useState } from "react";

export const Counter = () => {

    let count = 0;
    let myName = "Faheem";

    const increment = ()=> {
        count++;
        console.log(count)
    }
    const changeName = ()=> {
        myName = "Muhammad Faheem Sikandar";
        console.log(myName);
    }

    //useState Hook
    const [isCount, setIsCount] = useState(0);
    const [isName, setIsName] = useState("Faheem");

    const handleCountIncrement = () => {
        setIsCount(prev => prev + 1);
        console.log(isCount);
        setIsCount(prev => prev + 1);
        console.log(isCount);
        setIsCount(prev => prev + 1);
        console.log(isCount);
    }
    const handleNameChanged = () => {
        setIsName("Muhammad Faheem Sikandar");
        console.log(isName);
    }
    
    // Another Example
    const [count1, setCount1] = useState(1);
    //console.log(count1);
    const handleClick = () => {
        console.log(count1);    // 1
        setCount1(prev => prev+1);
        console.log(count1);    // 1
    }

    // Likes Event Handler Function
    const [like, setLikes] = useState(0);
    const [hearts, setHearts] = useState([]);

    const handleLikes = ()=> {
        setLikes(prev => prev+1);
        setHearts(prev => ([...prev, prev.length]));
    }

    return (
        <>
            <h3>Counter : {count}</h3>
            <button onClick={increment}>Click to Count!</button>

            <h3>My Name: {myName}</h3>
            <button onClick={changeName}>ChangeName!</button>

            <h2 className="m-block-20">Now by using States</h2>

            <h3>Counter : {isCount}</h3>
            <button onClick={handleCountIncrement}>Handle Count Increment!</button>

            <h3>My Name: {isName}</h3>
            <button onClick={handleNameChanged}>Handle Name Change!</button>
            <br /><br />

            <button onClick={handleClick}>Click new Count</button>
            <br /><br />

            <button onClick={handleLikes}>
                {hearts.length === 0 ? <span>❤️</span> :
                    hearts.map(heart => (
                    <span key={heart}>❤️ {heart.length === "" && heart.length}</span>)
                    )
                }            
                <br />Likes: {like}
            </button>

        </>
    )
}
