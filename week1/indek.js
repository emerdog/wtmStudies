Vehicle = class{
    constructor(make, model, year, km, price, cost){
        this.make = make
        this.model = model
        this.year = year
        this.km = km
        this.price = price
        this.cost = cost
        this.boughtby = []
        this.soldby = []
    }
}

Customer = class{
    constructor(name, customertype){
        this.name = name
        this.customertype = customertype
        this.bought = []
        this.sold = []
    }
    buy(vehicle){
        this.bought.push(vehicle)
        vehicle.boughtby.push(this)
    }
    sell(vehicle){
        this.sold.push(vehicle)
        this.bought.pop(vehicle)
        vehicle.soldby.push(this)
    }
    printboughtcars(){
        this.bought.forEach(printinfo)
    }
}


printinfo = vehicle => console.log(vehicle.make, vehicle.model)


vehicle1 = new Vehicle('Mercedes', 'a180', 2012, 30000, 8000, 5000)
vehicle2 = new Vehicle('Mercedes', 'c200', 2014, 33000, 11500, 8900)
vehicle3 = new Vehicle('BMW', '320i', 2013, 44000, 8300, 8000)
vehicle4 = new Vehicle('BMW', '530d', 2018, 14000, 18900, 15000)
vehicle5 = new Vehicle('Audi', 'A4', 2014, 38000, 8300, 7700)

armagan = new Customer('Armagan', 'buyer')
emre = new Customer('Emre', 'buyer')
gulsen = new Customer('Gulsen', 'buyer')
mert = new Customer('Mert', 'seller')

emre.buy(vehicle1)
mert.buy(vehicle2)
emre.sell(vehicle1)
armagan.buy(vehicle1)
emre.buy(vehicle3)
emre.buy(vehicle4)
emre.buy(vehicle5)

emre.printboughtcars()
