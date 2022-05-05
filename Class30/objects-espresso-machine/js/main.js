//Create an espresso machine class that makes machines with 4 properties and 3 methods

class EspressoMachine{
    constructor(brand, model, type, psi){
        this.brand = brand
        this.model = model
        this.type = type
        this.psi = psi
    }
    start(){
        alert('starting')
    }
    stop(){
        alert('stoppig')
    }
    selectType(){
        alert('choose coffee type')
    }
}

let gaggia = new EspressoMachine('gaggia', 'Classic Pro', 'espresso-type', 80)
