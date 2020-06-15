// this lab is to practice using vanilla javascript. 
var name = 'Franco'; 
const state = 50;
let sum = 5 + 4; 

function sayHello(word) {
    alert(word)
}

sayHello("Hello World!"); 

function checkAge(name, age) {
    if(age >= 21) {
        console.log("Hi, " + name + " your old enough mate!")
    }
    else {
        console.log("Sorry " + name + ", you aren't old enough to view this page!");
    }
}

var Charles = {
    name: "Charles",
    age: 21
};
var Abby = {
    name: "abby",
    age: 27
};
var James = {
    name: "James",
    age: 18
};
var John = {
    name: "John",
    age: 17
};

checkAge(Charles.name, Charles.age); 
checkAge(Abby.name,Abby.age); 
checkAge(James.name, James.age); 
checkAge(John.name, John.age); 

let veggies = ['carrots', 'corns', 'onions', 'beans']

for (let i = 0; i < veggies.length; i++) {
    console.log(veggies[i]);
}
 var pets = [
     {
         name: "Yoshi",
         breed: "Yorkie"
     },
     {
         name: "Hershey",
         breed: "Yorkie"
     },
     {
         name: "Chanel",
         breed: "Yorkie"
     }
    ]

    console.log(pets.name, pets.breed);

    var people = [
        {
            name: 'Cole',
            age: 20
        },
        {
            name: 'Blake',
            age: 26
        },
        {
            name: 'Kayla',
            age: 19
        },
        {
            name: 'Mary',
            age: 18
        },
        {
            name: 'Josh',
            age: 21
        }
    ];

for (var i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age);
}

function getLength(letters) {
    console.log(letters.length); 
}

let words = getLength("Hello World")

function evenOdd() {
    if (words % 2 === 0) {
        console.log("The world is nice and even!");
    }
    else {
        console.log("The world is nice and odd!");
    }
}
evenOdd();