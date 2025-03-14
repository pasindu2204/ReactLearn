const arry1 = [1,2,3];
const arry2 = [4,5,6];

const arry3 = [...arry1,...arry2];
console.log(arry3);

const obj1 = {One:1,two:2};
const obj2 = {three:3,Four:4};

const obj = {...obj1,...obj2};
console.log(obj);