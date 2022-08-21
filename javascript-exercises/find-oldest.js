// loop method to return oldest person
const findTheOldestA = function(val) {

    let oldestPerson = {};
    let oldestAge = 0;
    for (let i = 0; i < val.length; i++){
      let currentAge = val[i].yearOfDeath - val[i].yearOfBirth;
      if (currentAge > oldestAge) {
          oldestAge = currentAge;
          oldestPerson = val[i]
      } 
    }
      return oldestPerson
  }
// this method uses a loop to iterate through the array of objects and compares the ages of each object with a global counter.
// if the current age is greater than the previous age, the current object (or person) is then assigned to the empty object and that object then returned to provide the oldest person.


// reduce method to find oldest
const findTheOldestB = function(val) {

    return val.reduce((a, b) => {
        const ageA = (a.yearOfDeath ? a.yearOfDeath : new Date().getFullYear()) - a.yearOfBirth; // if yearOfDeath exists use (yearOfDeath - yearOfBirth). else create today's date (new Date().getFullYear() - yearOfBirth).
        
        const ageB = (b.yearOfDeath ? b.yearOfDeath : new Date().getFullYear()) - b.yearOfBirth; // same logic again for current value
        
        return ageA > ageB ? a : b;  // return previous value if true (a) or current value (b) if false
    })
    
};
