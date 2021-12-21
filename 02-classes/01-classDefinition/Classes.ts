//Classic Get/Set methods

class Customer {
    private firstName: string;
    private lastName: string;

    constructor(theFirst: string, theLast: string){
        this.firstName = theFirst;
        this.lastName = theLast;
    }

    public getFirstName(): string{
        return this.firstName;
    }
    public setFirstName(theFirst: string): void{
        this.firstName = theFirst;
    }
    public getLastName(): string {
        return this.lastName;
    }
    public setLastName(theLast: string): void{
        this.lastName = theLast;
    }
}

let myCustomer = new Customer("Ozan", "Yıldız");

console.log(myCustomer.getFirstName() + " " + myCustomer.getLastName());