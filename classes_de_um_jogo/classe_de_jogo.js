class hero{
    constructor(name, age, type) {
        this.name = name
        this.age = age
        this.type = type
    }

    attack() {
        if (this.type === "warrior") {
            console.log(`The ${this.type} attack using sword`)
        } else if (this.type === "mage") {
            console.log(`The ${this.type} attack using magic`)
        } else if (this.type === "monge") {
            console.log(`The ${this.type} attack using martial arts`)
        } else if (this.type === "ninja") {
            console.log(`The ${this.type} attack using shuriken`)
        }
    }
}

let person = new hero("John", 18, "mage")

person.attack()