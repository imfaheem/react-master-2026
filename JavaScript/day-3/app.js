import Students from "./students.js";

console.log("// JS Day-3 Mini Project");

const student1 = new Students("Muhammad", 25, 70, {h_no: 10, city: "Karachi"});
const student2 = new Students("Faheem", 30, 80, {h_no: 101, city: "Lahore"});
const student3 = new Students("Muhammad", 35, 90, {h_no: 102, city: "Peshawar"});
const student4 = new Students("Muhammad", 10, 0, {h_no: 102});

const studentsArray = [student1, student2, student3, student4];

for(const students of studentsArray) {
    console.log(`Name: ${students.name}`);
    console.log(`Age: ${students.age}`);
    console.log(`City: ${students.address?.city ?? "NA"}`);
    console.log(`Marks: ${students.marks}`);
    console.log(`Marks: ${students.getGrade()}`);
    console.log(``);
    
}
