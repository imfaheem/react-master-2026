import { useState, useMemo } from 'react';
import { ChildArray } from './ChildArray';
import { ChildObject } from './ChildObject';
import { ChildWithUseMemo } from './ChildWithUseMemo';

export const UseMemo = () => {
    const [count, setCount] = useState(1);
    const [price, setPrice] = useState(100);
    const [quantity, setQuantity] = useState(5);
    const [theme, setTheme] = useState("light");

    const users = { id: 1, name: "John Doe", age: 30 };
    const arrayList = ["Item 1", "Item 2", "Item 3"];
    
    // Multiple Dependency Array
    const total = useMemo(()=> {
        console.log("Calculating Total")
        return price * quantity;
    }, [price, quantity]);

    // Single Dependency Array
    const singleDependency = useMemo(() => {
        console.log("Calculating Single Dependency");
        return count * 2;
    }, [count]);

    // Empty Dependency Array
    const randomNumber = useMemo(() => {
        console.log("Calculating Random Number")
        return Math.floor(Math.random() * 100);
    }, []);

    // No Dependency Array
    const noDependency = useMemo(() => {
        console.log("Calculating No Dependency");
        return count * 3;
    });

    // Extra Dependency Array
    const extraDependency = useMemo(() => {
        console.log("Extra Dependency Array");
        return price * quantity;
    }, [price, quantity, theme]);

    const themeStyles = {
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "10px 5px",
    }

    const expensiveCalculation = (num) => {
        console.log("Calculating Expensive Calculation");
        let total = 0;
        for (let i = 0; i < 1000000000; i++) {
            total += num + 1;
        }
        return total;
    };

    const totaExpensiveCalculation = useMemo(() => {
        return expensiveCalculation(count)
    }, [count]);

    const newArrayList = useMemo(() => {
        return ["Item 1", "Item 2", "Item 3"];
    }, []);

    const newUser = useMemo(() => {
        return {
            id: 1,
            name: "John Doe",
            age: 30
        };
    }, []);

    return (
        <div className='m-20' style={themeStyles}>
            <h3>UseMemo Hook Understanding</h3>
            
            <p>Total: {total}</p>

            <button onClick={() => setPrice(prev => prev + 100)}>
                Increase Price
            </button>
            <span>{` `}</span>
            <button onClick={() => setQuantity(prev => prev + 1)}>
                Increase Quantity
            </button>
            <span>{` `}</span>
            <button onClick={() => setTheme(prev => prev === "light" ? "dark" : "light")}>
                Change Theme {theme}
            </button>
            <span>{` `}</span>
            <button onClick={() => setCount(prev => prev + 1)}>
                Increase Count
            </button>

            <p>Random Number: {randomNumber}</p>
            <p>Single Dependency: {singleDependency}</p>
            <p>No Dependency: {noDependency}</p>
            <p>Extra Dependency: {extraDependency}</p>
            <br />
            <p>Expensive Calculation: {totaExpensiveCalculation}</p>
            
            <ChildArray arrayList={arrayList} />
            <ChildObject user={users} />

            <ChildWithUseMemo user={newUser} arrayList={newArrayList} />
        </div>
    )
}
