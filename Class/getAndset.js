class square {

    constructor (_length){
        this.width = _length;
        this.height = _length;
    }

    Getarea () {
        return this.width * this.height;

    }
get area () {
    return this.width * this.height;
}

set area (newarea){

    this.width = Math.sqrt(newarea);
    this.height = Math.sqrt(newarea);
    console.log(this.height,this.width);
}

}

const squ1 = new square (10);

//function call

console.log(squ1.Getarea());

squ1.area = 49;

//get keyword call for values

console.log(squ1.area);



