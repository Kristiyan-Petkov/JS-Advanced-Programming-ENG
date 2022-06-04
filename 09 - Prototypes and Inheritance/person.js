function createPerson (firstName, lastName) {
    const result = {
        firstName,
        lastName,
        fullName:``
    }

    Object.defineProperty(result, 'fullName', {
        enumerable: true,
        configurable: true,
        get() {
            return `${this.firstName} ${this.lastName}`
        },
        set(value) {
            let [first, last] = value.split(' ');
            if (first != undefined && last != undefined){
                this.firstName = first;
                this.lastName = last;
            }
        }
    })
    return result
}

let person = createPerson("Peter", "Smith");
console.log(Object.getOwnPropertyDescriptors(person));
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla