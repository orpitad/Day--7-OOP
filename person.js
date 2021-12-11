class person {
    constructor(firstName="", lastName="", age=0, gender="") {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
        this._gender = gender;
    }

    getName() {
        return `${this._firstName }  ${this._lastName }`;
    }
}

