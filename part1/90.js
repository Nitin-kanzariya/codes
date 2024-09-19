// getter and setters 
class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName(){ 
        return `${this.firstName} ${this.lastName}`
    }
    setName(firstName, lastName)
    {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}


const person1 = new Person("harshit", "sharma", 5);

// console.log(person1.fullName());//when get not write in Animal
console.log(person1.fullName);//function as property

// person1.setName('Mohit', 'vashistha');

// person1.fullName = "mohit vashistha";
console.log(person1);
