abstract class Animal{
    name : string;

    constructor(name : string){
        this.name = name;
    }

    abstract makeNoise(): void;
    printName(): void{
        console.log(`name : ${this.name}`);
    }
}

class Dog extends Animal{
    makeNoise(): void {
        console.log("wolf wolf wolf");
    }
}
class Cat extends Animal{
    makeNoise(): void {
        console.log("meow meow meow");
    }
}

let dogA = new Dog("DogA");
let catA = new Cat("CatA");

dogA.printName();
dogA.makeNoise();
catA.printName();
catA.makeNoise();