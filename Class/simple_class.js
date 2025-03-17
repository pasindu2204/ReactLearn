class rectangle {
    constructor (_width,_length,_colour){
        this.width = _width;
        this.length = _length;
        this.colour = _colour;
    }

    area (){
        return this.width * this.length ; 
    }

    aboutus () {
return `My name is Rectangle.
my width ${this.width} and length ${this.length}.
I have ${this.colour} background.`
    }
}
const rect1 = new rectangle (10,20,'Read');
console.log(rect1.area());
console.log(rect1.aboutus());