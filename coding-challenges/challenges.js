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
};

Exercises.armstrongNumber()