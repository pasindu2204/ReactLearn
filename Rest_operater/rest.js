const arry1 = [5,5,5,5,50];

function sum (...args){
  
    let sum = 0;
    for(const arg of args) {
        sum += arg;
    }
    console.log(sum);
}
sum(...arry1);