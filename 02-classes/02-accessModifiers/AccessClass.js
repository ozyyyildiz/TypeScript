//Accessor methods
var Customeraccsess = /** @class */ (function () {
    function Customeraccsess(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    Object.defineProperty(Customeraccsess.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customeraccsess.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customeraccsess;
}());
var myAccsessCustomer = new Customeraccsess("Kita", "Usagi");
console.log(myAccsessCustomer.firstName + " " + myAccsessCustomer.lastName);
