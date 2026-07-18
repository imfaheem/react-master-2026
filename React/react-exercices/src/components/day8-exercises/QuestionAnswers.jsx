import { useState } from "react";
import { newStdList } from "./data";

export const QuestionAnswers = () => {

    const [numbers, setNumber] = useState([10, 20, 30, 40, 50]);
    //const [students, setStudents] = useState(["Usman","Ali","Hamza","Ahmed","Faheem"]);
    const [students, setStudents] = useState(newStdList);

    const handleQuestion1 = ()=> {
        setNumber(numbers.map((num, index) => index === 2 ? 35 : num));
    }
    
    const remove20 = ()=> {
        setNumber(numbers.filter(num => num!== 20));
    }
    
    const find40 = () => {
        setNumber(numbers.find(num => num === 40));
    }
    
    const multiple2 = () => {
        setNumber(numbers.map(num => num*2));
    }

    const numbersAbove30 = () => {
        setNumber(numbers.filter(num => num > 30))
    }

    const evenOddNum = () => {
        setNumber(numbers.map(num => num%2 === 0 ? num+5 : num));
    }

    const greaterThan25 = () => {
        setNumber(numbers.find(num => num > 25))
    }

    const ascendingOrder = () => {
        setNumber(numbers.toSorted((a, b)=> a - b));
    }

    const descendingOrder = () => {
        setNumber(numbers.toSorted((a, b)=> b - a));
    }

    const handleChallenge = () => {
        setNumber(prev => prev.filter(items => items !== 20));
        setNumber(prev => prev.with(2, 45));
        setNumber(prev => [...prev, 100]);
    }
    console.log(numbers);

    const changeAliName = ()=> {
        setStudents(students.map(list => list === "Ali" ? "Ali Khan" : list));
    }

    const removeAhmed = ()=> {
        setStudents(students.filter(list => list !== "Ahmed"));
    }

    const findFaheem = ()=> {
        setStudents(students.find(name => name === "Faheem"));
    }

    const uppercaseNames = ()=> {
        setStudents(students.map(list => list.toUpperCase()));
    }

    const nameWithA = ()=> {
        setStudents(students.filter(list => list.startsWith("A")));
    }

    const nameLength5 = ()=> {
        setStudents(students.filter(list => list.length >=5));
    }

    const addMrWithNames = ()=> {
        setStudents(students.map(name => `Mr. ${name}`))
    }

    const ascendingOrder1 = ()=> {
        setStudents(students.toSorted((a, b)=> a.localeCompare(b)));
    }

    const descendingOrder1 = ()=> {
        setStudents(students.toSorted((a, b)=> b.localeCompare(a)));
    }

    const handleChallenge1 = ()=> {
        setStudents(students.filter(name => name !== "Ahmed"));
        setStudents(prev => prev.map(name => name === "Ali" ? "Ali Khan" : name));
        setStudents(prev => [...prev, "Zain"]);
    }

    //map() Practice
    const changeAliAge = () => {
        setStudents(students.map(students => students.name === "Ali" ? {...students, age: 25 } : students));
    }

    const changeAhmedCity = () => {
        setStudents(students.map(students => students.name === "Ahmed" ? {...students, city: "Hyderabad"} : students));
    }

    const changeFaheemCourse = () => {
        setStudents(students.map(students => students.name === "Faheem" ? {...students, course: "Next.js"} :  students));
    }

    const usmanIsActive = () => {
        setStudents(students.map(students => students.name === "Usman" ? {...students, isActive: !students.isActive } : students));
    }

    const changeId2 = () => {
        setStudents(students.map(students => students.id === 2 ? {...students, name: "Ahmed Khan"} : students));
    }

    //filter() Practice
    const removeAhmed1 = () => {
        setStudents(students.filter(students => students.name !== "Ahmed"));
    }

    const showReactStudents = () => {
        setStudents(students.filter(students => students.course === "React"));
    }

    const showActiveStudents = () => {
        setStudents(students.filter(students => students.isActive === true));
    }

    const ageGreater22students = () => {
        setStudents(students.filter(students => students.age > 22));
    }

    const allExceptKarachi = () => {
        setStudents(students.filter(students => students.city !== "Karachi"));
    }

    //find() Practice
    const findId3 = () => {
        setStudents(students.find(students => students.id === 3));
    }

    const findFaheem1 = () => {
        setStudents(students.find(students => students.name === "Faheem"));
    }

    const findInActive = () => {
        setStudents(students.find(students => students.isActive === false));
    }

    const findReact = () => {
        setStudents(students.find(students => students.course === "React"));
    }

    const findAgeAbove30 = () => {
        setStudents(students.find(students => students.age > 30));
    }
    //}

    //sort() Practice
    const sortAgeAscending = () => {
        setStudents(students.toSorted((a, b) => a.age - b.age));
    }

    const sortAgeDescending = () => {
        setStudents(students.toSorted((a, b) => b.age - a.age));
    }

    const sortNamesAscending = () => {
        setStudents(students.toSorted((a, b) => a.name.localeCompare(b.name)));
    }

    const sortNamesDescending = () => {
        setStudents(students.toSorted((a, b) => b.name.localeCompare(a.name)));
    }

    const sortCityAlphabetically = () => {
        setStudents(students.toSorted((a, b) => a.city.localeCompare(b.city)));
    }
    console.log(students);

    return (
        <>
            <div>55 Question Answer List</div>
            <h2>Phase 1 — Arrays (Questions 1 - 10)</h2>
            <button onClick={handleQuestion1}>Change 30 to 35</button>
            <button onClick={remove20}>Remove 20</button>
            <button onClick={find40}>Find 40</button>
            <button onClick={multiple2}>Numbers x 2</button>
            <button onClick={numbersAbove30}>Numbers Above 30</button>
            <button onClick={evenOddNum}>Even+Odd Numbers</button>
            <button onClick={greaterThan25}>GreatThan25</button>
            <button onClick={ascendingOrder}>Ascending Order</button>
            <button onClick={descendingOrder}>Descending Order</button>
            <button onClick={handleChallenge}>Challenge</button>
            <br />
            <h2>Phase 2: Array of Strings (Questions 11 - 20)</h2>
            <button onClick={changeAliName}>Change Ali to Ali Khan</button>
            <button onClick={removeAhmed}>Remove Ahmed</button>
            <button onClick={findFaheem}>Find Faheem</button>
            <button onClick={uppercaseNames}>Names to Uppercase</button>
            <button onClick={nameWithA}>Names start with A</button>
            <button onClick={nameLength5}>Name Length 5 or above</button>
            <button onClick={addMrWithNames}>Add Mr.</button>
            <button onClick={ascendingOrder1}>Ascending Order</button>
            <button onClick={descendingOrder1}>Descending Order</button>
            <button onClick={handleChallenge1}>Challenge</button>
            <br />
            <h2>Phase 3: Array of Objects (Questions 21 - 40)</h2>
            <button onClick={changeAliAge}>Change Ali Age to 25</button>
            <button onClick={changeAhmedCity}>Change Ahmed City</button>
            <button onClick={changeFaheemCourse}>Change Course to NextJS</button>
            <button onClick={usmanIsActive}>Change Usman isActice</button>
            <button onClick={changeId2}>Change to Ahmad Khan</button>
            <button onClick={removeAhmed1}>remove Ahmed</button>
            <button onClick={showReactStudents}>showReactStudents</button>
            <button onClick={showActiveStudents}>showActiveStudents</button>
            <button onClick={ageGreater22students}>Age Greater then 22</button>
            <button onClick={allExceptKarachi}>allExceptKarachi</button>
            
            <button onClick={findId3}>findId3</button>
            <button onClick={findFaheem1}>findFaheem 1</button>
            <button onClick={findInActive}>findInActive</button>
            <button onClick={findReact}>findReact</button>
            <button onClick={findAgeAbove30}>findAgeAbove30</button>
            
            <button onClick={sortAgeAscending}>sortAgeAscending</button>
            <button onClick={sortAgeDescending}>sortAgeDescending</button>
            <button onClick={sortNamesAscending}>sortNamesAscending</button>
            <button onClick={sortNamesDescending}>sortNamesDescending</button>
            <button onClick={sortCityAlphabetically}>Sort City alphabetically</button>


        </>
    )
}
