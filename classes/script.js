// ES5

var Person5 = function(name, yearofBirth, job) {
    this.name = name;
    this.yearofBirth = yearofBirth;
    this.job = job;

}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearofBirth;
    return age
}

Person5.prototype.showDisplay = function() {
    console.log(`${this.name} is ${this.job} and ${this.calculateAge()} years old`)
}



var Athlet5 = function(name, yearofBirth, job, olymicGames, medals) {
    Person5.call(this, name, yearofBirth, job);
    this.olymicGames = olymicGames;
    this.medals = medals;
    
}

Athlet5.prototype = Object.create(Person5.prototype);



// es6 

class Person6 {
    constructor(name, yearofBirth, job) {
        this.name = name;
        this.yearofBirth = yearofBirth;
        this.job = job;
    }

    calculateAge () {
        var age = new Date().getFullYear() - this.yearofBirth;
        return age
    }

    showDisplay () {
        console.log(`${this.name} is ${this.job} and ${this.calculateAge()} years old`)
    }
}

class Athlet6 extends Person6 {
    constructor(name, yearofBirth, job, olymicGames, models) {
        super(name, yearofBirth, job);
        this.olymicGames = olymicGames;
        this.models = models;
    }
}

var tar = new  Athlet6("ta", 1995, "Programmer", "SF", "Lnw");
tar.showDisplay();