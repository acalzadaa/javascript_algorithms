function ExampleClass() {
    this.name = "JavaScript";
    this.sayName = function () {
        console.log(this.name);
    }
}

//new object
let example1 = new ExampleClass();
example1.sayName();

function AnotherExampleClass(){
    this.name = "Something";
    this.array = [1,2,3,4];
}

let example2 = new AnotherExampleClass();

AnotherExampleClass.prototype.sayName = function(){
    console.log(this.name);
}

example2.sayName();