class Vehicle{
    protected name : string;
    protected speed : number;
    protected id : string;

    constructor(name: string, speed: number, id: string){
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    
    slowDown(temp : number){
        this.speed - temp;
    }
    speedup(temp : number){
        this.speed + temp;
    }
    showSpeed(){
        console.log(`speed : ${this.speed}`);
    }
}

class Bicycle extends Vehicle{
    private gear : number;
    constructor(name : string, speed: number, id : string, gear : number){
        super(name, speed, id);
        this.gear = gear;
    }

    showInfo(){
        console.log(`name : ${this.name}, speed : ${this.speed}, id : ${this.id}, gear : ${this.gear}`);
    }
}

let bicycle1 = new Bicycle("Bicycle1", 10, "Bicycle1", 1);
let bicycle2 = new Bicycle("Bicycle2", 20, "Bicycle1", 1);
let bicycle3 = new Bicycle("Bicycle3", 92, "Bicycle1", 1);
bicycle1.showInfo();
bicycle2.showInfo();
bicycle3.showInfo();