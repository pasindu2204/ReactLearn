//for the arry

const arry1 = [1,2,3,4,5];

const [first, second, ...all_last] = arry1;

console.log(first);
console.log(all_last);

//for the object

const obj1 = {one:10, two:20, three:30, four:40};

const {one, ...last_objs} = obj1;

console.log(one);
console.log(last_objs);