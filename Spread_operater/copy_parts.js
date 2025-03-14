const arry1 = [1,2,3];
const arry2 = [...arry1];

arry1[0] = 5;

console.log(arry1,arry2);

//For Objects

const obj1 = {one:10, two:20, three:30};
const obj2 = {...obj1};

obj1 ['one'] = 15;

console.log(obj1,obj2);

