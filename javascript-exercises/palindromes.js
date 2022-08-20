const palindromes = function (str) {

    let myString = str.toLowerCase().replace(/[^A-Za-z]/g, ""); 

    // Sets str to lowercase & replaces anything that is no A-Z a-z with "". In other words anything that is not a letter between a-z is deleted.
    // g flag ensures it will match all occurrences

   
    let processed = (
        myString
        .split("")
        .reverse()
        .join("")
    );

    // split, reverse and join methods are used to create two versions of str, the reversed version and the original version.

   return myString == processed

   // These two variables representing the reversed string and normal string are then compared to each other to return a boolean of true if they are equal and false if not.
   
};