let user = {
    name: "John",
    surname: "Smith",

    get fullName() {
        return `${this.name} ${this.surname}`  // the getter makes the fullName property readable
    },

    set fullName(value) {
        [this.name, this.surname] = value.split(" ")  // the setter property makes the fullName property writable
    },
};

console.log(user.fullName)
console.log(user.name)


                                                                                                                                                                                                                                                                                                                                                                                                                                                                      