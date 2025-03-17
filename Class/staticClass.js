class square {
    constructor (_length) {
        this.width = _length;
        this.height = _length;
    }

    Getarea () {
        return this.width * this.height;

    }

    static calarea (a,b) {
        return a*b;
        }

}

const squ1 = new square (15);

console.log(squ1.Getarea());

// static functions using class name can direct access

console.log(square.calarea(5,10));