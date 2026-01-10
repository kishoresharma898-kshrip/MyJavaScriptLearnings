// Task 1: Code a Person class
// WRITE YOUR CODE HERE - Define the Person class
// WRITE YOUR CODE HERE - Add a constructor with default parameters
// WRITE YOUR CODE HERE - Add the sleep() method
// WRITE YOUR CODE HERE - Add the doSomethingFun() method
class Person {
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }

    //sleep(): Increases the energy property by 10.
    sleep() {
        this.energy += 10;
    }

    //doSomethingFun(): Decreases the energy property by 10.
    doSomethingFun() {
        this.energy -= 10;
    }
}

// Task 2: Code a Worker class
// WRITE YOUR CODE HERE - Define the Worker class that extends Person
// WRITE YOUR CODE HERE - Add a constructor with additional parameters
// WRITE YOUR CODE HERE - Add the goToWork() method
class Worker extends Person {
    constructor(name, age, energy, xp = 0, hourlyWage = 10) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }

    //goToWork(): Increases the xp property by 10.
    goToWork() {
        this.xp += 10;
    }
}

// Task 3: Code an intern object, run methods
function intern() {
    // WRITE YOUR CODE HERE - Instantiate the Worker class with the intern properties
    // WRITE YOUR CODE HERE - Call the goToWork() method
    // WRITE YOUR CODE HERE - Return the intern object
    var intern = new Worker("Bob", 21, 110, 0, 10);
    intern.goToWork();
    return intern;
}

// Task 4: Code a manager object, methods
function manager() {
    // WRITE YOUR CODE HERE - Instantiate the Worker class with the manager properties
    // WRITE YOUR CODE HERE - Call the doSomethingFun() method
    // WRITE YOUR CODE HERE - Return the manager object
    var manager = new Worker("Alice", 30, 120, 100, 30);
    manager.doSomethingFun();
    return manager;
}

console.log(intern());
console.log(manager());

/*Output:
Worker { name: 'Bob', age: 21, energy: 110, xp: 10, hourlyWage: 10 }
Worker { name: 'Alice', age: 30, energy: 110, xp: 100, hourlyWage: 30 } */

/*Key takeaways:

Use the class keyword to define a blueprint for objects. Constructors initialize properties with default or custom 
values. 

Use the extends keyword to create a subclass, inheriting 
all properties and methods from a parent class. Subclasses can have their own unique properties and 
methods.

Instantiate classes to create specific objects with unique attributes. Use constructor arguments to customize the properties of each instance.

Methods define specific behaviours that operate on the object's properties, encapsulating functionality within 
the class.  

OOP makes code modular, reusable, and easier to 
understand.
 */