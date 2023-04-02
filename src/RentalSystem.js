"use strict";
class Vehicle {
    /**
     * Rental System Super/Base Class
     */
    constructor(_make, _model, _year, _price, _rentedStatus) {
        this._make = _make;
        this._model = _model;
        this._year = _year;
        this._price = _price;
        this._rentedStatus = _rentedStatus;
    }
    // getters/accessor below
    get make() {
        return this._make;
    }
    get model() {
        return this._model;
    }
    get year() {
        return this._year;
    }
    get price() {
        return this._price;
    }
    get rentedStatus() {
        return this._rentedStatus;
    }
    // setter/mutator below
    set rentedStatus(newRentedStatus) {
        if (!newRentedStatus) {
            throw new Error("Rented Status cannot be empty");
        }
        this._rentedStatus = newRentedStatus;
    }
    //two other methods
    rent() {
        if (this._rentedStatus == true) {
            console.log("The vehicle is already rented");
        }
        else if (this._rentedStatus == false) {
            this._rentedStatus = true;
        }
    }
    returnStatus() {
        if (this._rentedStatus == true) {
            console.log("The vehicle has been rented");
            this._rentedStatus = false;
        }
    }
}
class Car extends Vehicle {
    /**
     *subclass of vehicle
     */
    constructor(make, model, year, price, rentedStatus, _engineCapacity) {
        super(make, model, year, price, rentedStatus);
        this._engineCapacity = _engineCapacity;
    }
    rentalRate() {
        return this.price * 0.25;
    }
}
class Truck extends Vehicle {
    /**
     *subclass of vehicle
     */
    constructor(make, model, year, price, rentedStatus, _engineCapacity) {
        super(make, model, year, price, rentedStatus);
        this._engineCapacity = _engineCapacity;
    }
    rentalRate() {
        return this.price * 0.15;
    }
}
class Motorcycle extends Vehicle {
    /**
     *subclass of vehicle
     */
    constructor(make, model, year, price, rentedStatus, _engineCapacity) {
        super(make, model, year, price, rentedStatus);
        this._engineCapacity = _engineCapacity;
    }
    rentalRate() {
        return this.price * 0.1;
    }
}
const c1 = new Car("suzuki", "alto", 2019, 2200000, true, "660cc");
c1.rent();
c1.returnStatus();
c1.rent();
let c1_rate = c1.rentalRate();
console.log(`Rental rate of ${c1.make} ${c1.model} ${c1.year} is ${c1_rate}`);
//# sourceMappingURL=RentalSystem.js.map