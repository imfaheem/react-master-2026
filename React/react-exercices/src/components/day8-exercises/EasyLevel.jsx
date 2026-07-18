import { QuestionAnswers } from "./QuestionAnswers";

export const EasyLevel = () => {
    // // Phase 1:
    // const numbers = [10, 20, 30, 40, 50];

    // const answer1 = numbers.map((num, index) => index === 1 ? 25 : num);
    // console.log(answer1);
    // //OR
    // console.log(numbers.with(1, 25));

    // const answer2 = numbers.filter(num => num != 30);
    // console.log(answer2);
    
    // const answer3 = numbers.find(num => num === 40);
    // console.log(answer3);

    // const answer4 = numbers.map(num => num*2);
    // console.log(answer4);

    // const answer5 = numbers.filter(num=> num>20);
    // console.log(answer5);

    // //Phase 2:
    // const students = ["Ali", "Ahmed", "Faheem", "Usman"];
    
    // //Answers:
    // console.log(students.map(std => std === "Ali" ? "Ali Khan" : std));
    // console.log(students.filter(std => std !== "Ahmed"));
    // console.log(students.find(name => name === "Faheem"));
    // console.log(students.map(students=> students.toUpperCase()));
    // console.log(students.filter(std => std.startsWith("F")));

    // //Phase 3:
    // const studentsList = [
    //     { id: 1, name: "Ali", age: 21 },
    //     { id: 2, name: "Ahmed", age: 20 },
    //     { id: 3, name: "Faheem", age: 35 },
    //     {id: 4, name: "Usman", age: 32 },
    // ];
    // console.log(studentsList);

    // const aliAgeUpdate = studentsList.map(list => list.name === "Ali" ? {...list, age: 30} : list);
    // console.log(aliAgeUpdate);

    // const removeAhmed = studentsList.filter(list => list.name !== "Ahmed");
    // console.log(removeAhmed);

    // const findFaheem = studentsList.find(list => list.name === "Faheem");
    // console.log(findFaheem);
    
    // const ageGreater21 = studentsList.filter(list => list.age > 21);
    // console.log(ageGreater21);

    // const uppercaseNames = studentsList.map(items => ({...items, name: items.name.toUpperCase()}))
    // console.log(uppercaseNames);

    // const ageAscendingOrder = studentsList.toSorted((a, b) => a.age - b.age);
    // console.log(ageAscendingOrder);

    // const ageDescendingOrder = studentsList.toSorted((a, b) => b.age - a.age);
    // console.log(ageDescendingOrder);    

    return (
        <div className="flex-1">
            <h2>EasyLevel Single Arrays & Objects</h2>
            <QuestionAnswers />
        </div>
    )
}
