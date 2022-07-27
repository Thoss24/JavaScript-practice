function getComputerChoice() {
    let myArray = ["Rock", "Paper", "Scissors"];
    let myValue = myArray[Math.floor(Math.random() * myArray.length)];
    console.log(myValue)
}
getComputerChoice();