function ExampleClass(nameParam, sizeParam) {
    let privateName = nameParam;
    let privateSize = sizeParam;

    this.getName = function () {
        return privateName;
    }

    this.setName = function (name) {
        privateName = name;
    }

    this.getSize = function () {
        return privateSize;
    }
    this.setSize = function (size) {
        privateSize = size;
    }
}

let example = new ExampleClass("Animal", 5);
console.log(example.getName());


