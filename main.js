class Pokemon{
    //Initializing class
    constructor(name, attack, defense, health, type) {     
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.health = health;
        this.type = type; 
        this.initialHealth = health;
    }
    //Method to make the Pokemon take damage and lose health
    takeDamage(damage){                                  
        this.damage = damage;
        let health = this.health - damage; 
        //If statement to make sure that health doesn't go below 0
        if(health < 0){     
            health = 0;
        }
        this.health = health;
    }
    //Method to attack an opponent and make the opponent take damage
    attackOpponent(opponent){  
      this.opponent = opponent;
      let damage = this.attack - opponent.defense;
      opponent.health = opponent.takeDamage(damage);
      let attacking = this.name + " is attacking " + opponent.name;
      return attacking;
    }
    //Method to display Pokemon's health
    health() {
      return this.health;
    }
    //Method to display the Pokemon's name, type, health, and maximum health
    display() {
      let name = this.name.toUpperCase();
      let type = this.type.toUpperCase();
      let display = `${name} (${type}) ${this.health}/${this.initialHealth}`;
      return display;
    }
}