class Animals {
    constructor(){
        console.log("An animal is created");
    }
    sound(){
        console.log("Animals had different sounds ");
    }
}

class dog extends Animals {

    constructor(){
super();
        console.log("dog is created");
    }

    sound(){
        console.log("dogs are bark");
    }

}
const ani = new Animals;

const tommy = new dog;
tommy.sound();