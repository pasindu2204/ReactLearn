class person{
    constructor (_name, _age){

        this.name = _name;
        this.age = _age;

        console.log("New person was created");
    }

    call1 (){
        return `${this.name} and ${this.age}`;
    }
}

class programmer extends person {

    constructor (_name, _age, _language){

        super(_name, _age);
        this.name = _name;
        this.age = _age;
        this.language = _language;
    }

    code(){
        return `${this.name} is a Programmer 
        & knows ${this.language}`;
    }
}

const pasindu = new person('pasi',23);

console.log(pasindu.call1());

const chamikara = new programmer('chami',24);

console.log(chamikara.code());

