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
};

Exercises.replaceWithAlphabet()
