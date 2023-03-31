class Test {

    name = "Thomas"

    printName = () => {
        console.log(this.name)
    }
}

const test = new Test()
console.log(test.name)