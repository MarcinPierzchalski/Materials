//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function StreetFighter(character, weight, health, combo){
    this.character = character
    this.weight = weight
    this.health = health
    this.combo = combo

    this.fight = function(){
        console.log('start fightring')
    }
    this.useCombo = function(){
        console.log(`use ${this.combo} to finish`)
    }

}
let ryu = new StreetFighter('male', 80, 100, 'combo1')
