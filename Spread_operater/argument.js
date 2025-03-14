function sum(a,b,c){
   return console.log(a+b+c);
}

const arry1 = [1,2,3];
const obj1 = {one:10, two:20, three:30 };

sum (...arry1);

// we can sum to object values

sum (...Object.values(obj1));