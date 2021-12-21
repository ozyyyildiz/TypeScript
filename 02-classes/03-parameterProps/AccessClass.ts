//Accessor methods

class Customeraccsess {
    constructor(private _firstName: string, private _lastName: string){
    }

    get firstName(): string {
        return this._firstName;
    }
    set firstName(value: string) {
        this._firstName = value;
    }
    get lastName(): string {
        return this._lastName;
    }
    set lastName(value: string) {
        this._lastName = value;
    }

}

let myAccsessCustomer = new Customeraccsess("Kita", "Usagi");

myAccsessCustomer.firstName="Yuki";

console.log(myAccsessCustomer.firstName + " " + myAccsessCustomer.lastName);