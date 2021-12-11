class uber {
    constructor(distance) {
        this._distance = distance;
    }

    get fare() {
        console.log(this._distance)
        const fare = this._distance *5;
        return `Fare is : ${fare }`;
    }
}

const uberObject = new uber(45);

console.log(uberObject.fare);

