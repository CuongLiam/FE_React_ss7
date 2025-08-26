class Employee{
    public name : string;
    protected company: string;
    private phone : number;

    constructor(name : string, company : string, phone : number){
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo(){
        console.log(`Name: ${this.name}, Company: ${this.company}, Phone: ${this.phone}`);
    }

    getPhone(){
        return this.phone;
    }
    
}

class Manager extends Employee{
    teamSize : number;
    constructor(name : string, company : string, phone : number, teamSize : number){
        super(name, company, phone);
        this.teamSize = teamSize;
    }

    //override
    printInfo(){
        console.log(`Name: ${this.name}, Company: ${this.company}, Phone: ${this.getPhone()}, Team Size: ${this.teamSize}`);
    }
}

let employee1 = new Employee("Nguyen Van A", "PTIT", 123456789);
employee1.printInfo();

let manager = new Manager("ManagerAC", "PTIT", 123456789, 10);
manager.printInfo();