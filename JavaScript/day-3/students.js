export default class Students {
    constructor(name, age, marks, address) {
        this.name = name;
        this.age = age;
        this.marks = marks;
        this.address = address;
    }

    getGrade() {
        // Return A, B, C, or Fail
        if(this.marks >= 90) {
            return "Grade A+"
        } else if(this.marks >= 80) {
            return "Grade A"
        } else if(this.marks >= 70) {
            return "Grade B"
        } else if(this.marks >= 60) {
            return "Grade C"
        } else if(this.marks >= 50) {
            return "Pass"
        } else {
            return "Fail"
        }
    }
}
