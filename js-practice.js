// How to get current time and date
function getTimeAndDate() {
    let today = new Date();
    console.log(today);
}
getTimeAndDate();

// How to print current window
window.print();

// How to get date dd/mm/yy format. Remember getMonth is 0 indexed so need + 1.
function getDateOnly() {
    let date = new Date();
    let newDate = date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear();
    console.log(newDate);
}
getDateOnly();