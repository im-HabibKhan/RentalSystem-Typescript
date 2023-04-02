abstract class Vehicle {

    /**
     * Rental System Super/Base Class
     */
    constructor(
        private _make: string,
        private _model: string,
        private _year: number,
        private _price: number,
        private _rentedStatus: boolean
    ) { }
    
    // getters/accessor below
    get make(){
        return this._make;
    }
    get model(){
        return this._model;
    }
    get year(){
        return this._year;
    }
    get price(){
        return this._price;
    }
    get rentedStatus(){
        return this._rentedStatus;
    }

    // setter/mutator below
    set rentedStatus(newRentedStatus: boolean) {
        if(!newRentedStatus){
            throw new Error("Rented Status cannot be empty");   
        }
        this._rentedStatus = newRentedStatus;
    }

    //abstract method below
    abstract rentalRate(): number;

    //two other methods
    public rent(){
        if (this._rentedStatus == true){
            console.log("The vehicle is already rented");
        }
        else if (this._rentedStatus == false){
            this._rentedStatus = true;
        }
    }
    public returnStatus(){
        if (this._rentedStatus == true){
            console.log("The vehicle has been rented");
            this._rentedStatus = false;
        }
    }
}

class Car extends Vehicle{

    /**
     *subclass of vehicle
     */
    constructor(
        make: string,
        model: string,
        year: number,
        price: number,
        rentedStatus: boolean,
        private _engineCapacity: string
    ) {
        super(make, model, year, price, rentedStatus);
        
    }
    rentalRate() {
        return this.price * 0.25;
    }
}

class Truck extends Vehicle{

    /**
     *subclass of vehicle
     */
    constructor(
        make: string,
        model: string,
        year: number,
        price: number,
        rentedStatus: boolean,
        private _engineCapacity: string
    ) {
        super(make, model, year, price, rentedStatus);
        
    }
    rentalRate() {
        return this.price * 0.15;
    }
}

class Motorcycle extends Vehicle{

    /**
     *subclass of vehicle
     */
    constructor(
        make: string,
        model: string,
        year: number,
        price: number,
        rentedStatus: boolean,
        private _engineCapacity: string
    ) {
        super(make, model, year, price, rentedStatus);
        
    }
    rentalRate() {
        return this.price * 0.1;
    }
}
const c1 = new Car("suzuki","alto",2019,2200000,true,"660cc");
c1.rent();
c1.returnStatus();
c1.rent();
let c1_rate = c1.rentalRate();
console.log(`Rental rate of ${c1.make} ${c1.model} ${c1.year} is ${c1_rate}`)
