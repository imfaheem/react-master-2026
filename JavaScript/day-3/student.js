export class Student {
    constructor(name, marks, age) {
        this.name = name;
        this.marks = marks;
        this.age = age;
        this.address = {
            house_no: 18,
            street: 'Madina Town',
            city: 'Peshawar'
        }
        this.subjects = ["English", "Urdu", "Maths"];
    }

    result() {
        try {
            if(this.marks < 0 || this.marks > 100) {
                throw new Error("Marks cannot be less than 0 or greater than 100");
            }
            return this.marks >= 50 ? "Pass" : "Fail";
        } catch(err) {
            console.log(err);
        }
    }

    introduce() {
        console.log(`Hi. My name is ${this.name} and my age is ${this.age} and I live in ${this.address?.city}`);
    }
}
