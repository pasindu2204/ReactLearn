function open(callback) {
    setTimeout(() => {
        console.log("Programe is open");
        callback();
    
    }, 3000);
   
}

function addsomething () {
    console.log('add somthing for the code');
}

function remove() {
    console.log("remove the data in programe");
}

open(addsomething);