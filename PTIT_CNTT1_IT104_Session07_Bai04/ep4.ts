abstract class Person{
    name : string;
    constructor(name: string){
        this.name = name;
    }
    displayInfo(){
        console.log(`name : ${this.name}`);
    }
}

class Teacher extends Person{
    subject : string;
    constructor(name : string, subject : string){
        super(name);
        this.subject = subject;
    }

    // override
    displayInfo(){
        console.log(`name : ${this.name}, subject : ${this.subject}`);
    }
}

class Student extends Person{
    id : string;
    constructor(name : string, id : string){
        super(name);
        this.id = id;
    }

    // override
    displayInfo(){
        console.log(`name : ${this.name}, id : ${this.id}`);
    }
}

let teacher1 = new Teacher("Teacher1", "English");
teacher1.displayInfo();

let student1 = new Student("Student1", "123456789");
student1.displayInfo();