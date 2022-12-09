// A singleton class is structured in a way where only a single instance of that class can be made
class Settings {
    constructor() {
        if (Settings.instance instanceof Settings) { // The first time an instance of Settings is created, this if statement will not be True. If it's the second time or more this constructor has been called, it will be True.
            return Settings.instance;
        }

        this.settingsObject = {
            'background': 'red',
            'version': Math.floor(Math.random() * 4000)
        };

        Object.freeze(this.settingsObject); // this code prevents people from changing the values inside the settingsObject
        Object.freeze(this); // This code prevents people from modifying the instance of the class that we created
        Settings.instance = this; // This code refers to the Settings class and not the created instance. Preventing the adding or changing of properties on the class
    }

    get(key) {
        return this.settingsObject[key];
    }
}

const s = new Settings(); // "s" and "a" are both equal to the same and ONLY instance of Setting
const a = new Settings();

console.log(s);
console.log(s);