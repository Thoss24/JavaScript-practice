class Exercises {

    static armstrongNumber(val) {
        val = 153
        let num = val.toString().split('').map(Number)
        let armNumber = num.map(a => {return a**3}).reduce((a, b) => a + b);

        if (armNumber == val) {
            console.log("True")
        }
        else console.log("false")
    }

    static replaceWithAlphabet(text) {
        text = "hello"
        let result = ""
        for (let i = 0; i < text.length; i++){
            let char = text.toUpperCase().charCodeAt(i) 
            // charCodeAt returns integer between 0 and 65535 representing UTF-16 at the given index
            if (char > 64 && char < 91) result += (char - 64) + " ";
        }

        console.log(result.slice(0, result.length - 1));
    }

    static convertBoolean(b) {
        b = 15
        console.log(typeof(b.toString()))
    }

    static trimString(str, size) {
        str = "Creating kata is fun";
        let dots = "..."
        size = 14
        if (str.length > size) {
            console.log(str.substr(0, size - 3) + dots)
        };
        if (str.length <= 3) {
            console.log(str.substr(0, size) + dots)
        };
        if (str.length <= size) {
            console.log(str)
        }
        console.log(str)
    }

    static toCamelCase(str) {
        str = "hellotherefriend"

        let regEx = /[-_]\w/ig;

        // console.log(regEx)

        // console.log(str.replace(regEx, (match) => {return match.charAt(1).toUpperCase()}))

        console.log(str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase()));

    }

    static harshadNumber(n) {
        n = 1458
        let sum = n.toString().split('').map(Number).reduce((a, b) => {return a + b});
        let sumReversed = sum.toString().split('').reverse().join('')

        if (n % sum === 0 && sum * sumReversed === n) {
            console.log("yes")
        } else console.log("no")
    }   

    static testReduce() {
        let num = [1,2,3,4,5]

        console.log(num.reduce((a, b) => a + b))

        // logs 15
    }

    static sumOfIntegersInString(str) {

        str = "The30quick20brown10fox1203jumps914ov3r1349the102l4zy dog"

        let regEx = /[0-9]+/g

        let numbers = str.match(regEx)

        let sum = numbers.map(Number).reduce((a, b) => {return a + b});

        console.log(Math.cbrt(8))
    }

    static getSumOfDigits(integer) {
        integer = 1337
        let sum = integer.toString().split('').map(Number).reduce((a, b) => {return a + b});

        console.log(sum)
    }

    static doCallBack(val) {
        console.log(val)
    }

    static callBackFunction() {
        let arr = ["one", "two", "three"]

        arr.forEach(Exercises.doCallBack)
    }

    static returnLargest(n, arr) {
        n = 3
        arr = [5, 2, 3, 1, 4, 6, 7, 9, 8]

        let sort = arr.sort((a, b) => {
            return a - b
        });

        console.log(sort.slice(arr.length - n))

        // If arrow function is not supplied, all non-undefined array elements are sorted by converting them to strings and comparing
        //  strings in UTF-16 code units order. For example, "banana" comes before "cherry". In a numeric sort, 9 comes before 80,
        //   but because numbers are converted to strings, "80" comes before "9" in the Unicode order.

    }

    static currying() {
        // a curry function which was created as a curry function
        let dragon = 
            name =>
                size =>
                    element =>
                        name + ' is a ' +
                        size + ' dragon that breathes ' +
                        element + '!'

        let fluffDragon = dragon('Fluff panda')
        let tinyFluff = fluffDragon('tiny')
        console.log(tinyFluff('fire'))

        // a method which converts a normal function to a curry function
        let dragonTwo = (name2, size2, element2) => {
            name2 + ' is a ' +
            size2 + ' dragon that breathes ' +
            element2 + '!'
        }

        // dragonTwo = curry(dragonTwo)

        // let fluffDragon2 = dragonTwo('Fluff panda')
        // let tinyFluff2 = fluffDragon2('tiny')
        // console.log(tinyFluff2('lightning'))
    }

     // a function which takes an array of integers as an argument. This function must return another function using its argument to multiply all elements in array
    static multiplyAll(arr) {
        arr = [1,2,3,4,5]
        let newMultiply = (int) => {
            int = 2
            arr.map(x => x * int)
        }
       return newMultiply
    }

    static digitalRoot() {
        let num = 439867

        let sum = num.toString().split('').map(Number).reduce((a, b) => {return a + b})

        console.log(sum)
    }

    static nearestSqrt() {
        let num = 111

        console.log(Math.round(Math.sqrt(num)))  // square root of num, rounded to nearest whole number

        console.log(Math.pow(Math.round(Math.sqrt(num)), 2))  // square root of num, rounded to nearest whole number to the power of 2 (num * num)

    }

    static recursivePow(x, n) {
        return (n == 1) ? x : x * this.recursivePow(x, n - 1)  
    }

    static sumAllNum(n) {
        // recursive
        if (n <= 1) {
            return n
        } else console.log(n + this.sumAllNum(n - 1)) 
        
        // arithmetic progression formula
        return n * (n + 1) / 2
        
    }

    static factorial(n) {
        return n <= 1 ? n : n * this.factorial(n - 1)
    }

    static fibonacci(n) {
        return n <= 1 ? n : this.fibonacci(n - 1) + this.fibonacci(n - 2)
    }

    static printList(lst) {


        // lst = {value: 1, next: {value: 2, next: {value: 3, next: {value:4, next:null}}}}

        // console.log(Object.values(lst.next).forEach((val) => console.log(val.next)))
        //console.log(lst.next.forEach((val) => console.log(val)))

        console.log(lst.value)

        if (lst.next) {
            this.printList(lst.next)
        }

        // console.log(lst.value)

        // if (lst.next) {
        //     this.printList(lst.next)
        // }
    }

    static recursiveCountdown(n) {
        if (n === 0) {
            console.log("Done")
            return
        } 
        console.log(n)
        this.recursiveCountdown(n - 1)
    }

    static sumRange(n, total = 0) {
        if (n <= 0) return total
        return this.sumRange(n - 1, total + n)
    }

    static printChildren(a) {
        if (a.children.length === 0) return
        a.children.forEach((child) => {
            console.log(child.name)
            this.printChildren(child)
        })
    }

    static collatz(n) {

        if (n === 1) 
            return;

        else if (n % 2 === 0) 
            return 1 + this.collatz(n / 2);

        else 
            return 1 + this.collatz(3 * n + 1)

    }

    static sum(n, total = 0) {
        if (n <= 0) return total
        return sum(n - 1, total + n)
    }
    
    static power(base, exp) {
        if (exp === 0) return 1
        return base * power(base, exp - 1)
    }
    
    static factorial(n) {
        if (n === 1) return 1
        return n * factorial(n - 1)
    }

    static all(arr, func) {
        
         
    }

    static productOf(arr) {
        if (arr.length <= 1) return arr
        return arr.shift() * this.productOf(arr)
    }

    static contains(obj, val) {
        for (let key in obj) {
          if (typeof obj[key] === "object") {
            return this.contains(obj[key], val) 
          }
          if (obj[key] === val) {
            return true
          }
          
        } 
        return false
    }

   static productOfArr(arr) {
    if (arr.length === 0) return arr

    let first = arr.shift()

    return first * this.productOf(arr)
   }
   // search for nested object
   static searchObj(list, item) {
    for (let key in list) {
        if (typeof list[key] === 'object') {
            return this.searchObj(list[key], item)
        } 
        return list[key]
    }
   }

   static totInt(arr) {
    if (arr.length === 0) return 0

    let total = 0
    let first = arr.shift()

    if (Array.isArray(first)) {
        total += this.totInt(first)
    } 
    if (Number.isInteger(first)) {
        total += 1
    }
    return total + this.totInt(arr)
   }

   static replication(a, b) {
    if (a <= 0) return []

    return [b].concat(this.replication(a - 1, b))
   }

   static mygcd(x, y) {
    if (!y) return x
    
    return this.mygcd(y, x % y)
   }

   static strCount(str, letter) {
        return str.split('').filter(x => x == letter)
   }

    
};

console.log(Exercises.strCount("hello", "l").length)

let arr = {
    name: "john", 
    children: [{
        name: "Jim",
        children: []
    },
    {
        name: "Zoe", 
        children: [
            {name: "kyle", children: []},
            {name: "sophia", children: []}
        ]
    }
]
}

let obj = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: "foo",
                    }
                }
            }
        }
    }
}

let multiArr = [[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]

console.log(Exercises.replication(3, 5))




