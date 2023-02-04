
// A promise is an object which represents an action that hasn't finished yet, but will at some point


// Example 1
const myData = getData()

myData.then((data) => {  // then() tells it to wait until the promise is resolved
    const pieceOfData = data["whatever"]  //and THEN run the function inside
});


let p = new Promise((resolve, reject) => {  // Promise takes a single function as its argument. THis function will also be called with two arguments (resolve, reject) both of which are also functions.
    if (/*good result*/) {
        resolve('Success')
    }
    else {
        reject('Failure')
    }
});

p.then((result) => {
    /*do something with the result*/
}).catch(() => {
    /*error*/
}).finally(() => {
    /*executes regardless of success or failure*/
})


//  Example 2
function loadImg(url) {
    return new Promise((resolve, reject) => {
        let image = new Image()  // creates new img element

        image.onload = () => {
            resolve(image)
        }

        image.onerror = () => {
            let message = 
            'Could not load image at ' + url
            reject(new Error(msg)) // creates a new error object
        }

        image.src = url
    });
}

let addImg = (src) => {
    let imgElement = document.createElement('img')
    imgElement.src = src
    document.body.appendChild(imgElement)
};

Promise.all([  // we have created an array of promises
    loadImg(/*img link here*/),
    loadImg(/*img link here*/),
    loadImg(/*img link here*/),
    loadImg(/*img link here*/),
]).then((images) => {
    images.forEach(img => img.addImg(img.src)) //  Promise all returns a new Promise which we call then() on, following this we call addImg() on each img in the Promise.all array which adds the image to the dom
}).catch((error) => {
    // if any errors occur in the Promise.all method they will bubble up to this error handler
});


// Example 3
function get(url) {  // url === the file we want to access
    return new Promise((resolve, reject) => {
        let xhttp = new XMLHttpRequest();
        xhttp.open('GET', url, true)
        xhttp.onload = () => {
            if (xhttp.status == 200) { // if successful execute this code
                resolve(JSON.parse(xhttp.response));
            } else {
                reject(xhttp.statusText) // if failure execute this code
            }
        };
        xhttp.onerror = () => {
            reject(xhttp.statusText) // if failure execute this code
        };
        xhttp.send()
    })
}

let promise = get("random file to access"); // the promise variable is equal to our get request which returns us a new Promise
promise.then(((data1) => {
    console.log(data1) // Once the promise has been met, we use then() to execute a function which does something, in this case logs the data
    // logs data from data 1
    return get('another random file to access'); // we then return another get request and Promise, which now makes our promise for this file and so on for each new get request we return
}).then((data2) => {
    console.log(data2)
    // logs data from data 2
    return get('a third random file')
}).then((data3) => {
    console.log(data3)
    // logs data from data 3
}).catch((error) => {
    console.log(error)
    // logs error that occurs
}))


function doubleAfter2Seconds(x) {
    return new Promise(resolve => {
    setTimeout(() => {
    resolve(x * 2);
    }, 2000);
    });
}
// The same logic but done using async function and await method
async function addAsync(x) {
    const a = await doubleAfter2Seconds(10);
    const b = await doubleAfter2Seconds(20);
    const c = await doubleAfter2Seconds(30);
    return x + a + b + c;
}

addAsync(10).then((sum) => {
console.log(sum);
});

// This is why Promises are so useful, in that they can essentially chain together asynchronous requests