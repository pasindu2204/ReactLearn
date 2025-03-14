this.name = 'pasindu';

const obj01 = {
    name : "chami",

    normalFunction : function(){
        console.log(this.name);

    },
    arrowFunction: () => {
        console.log(this.name);
    }

}
obj01.arrowFunction();
obj01.normalFunction();