// Use `.map()` to iterate over the following array:

// const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here
// const multipliedNums = nums.map((num) => {
// return num * 2
// })

// console.log(multipliedNums)

// Exercise 2

// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

// const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// // Your code here

// const [firstTopping, secondTopping] = pizzaToppings

// console.log(firstTopping)
// console.log(secondTopping)


//Exercise 3

// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

// const car = {
//     make: 'Audi',
//     model: 'q5',
//   };
  
//   // Your code here

//   const {make, model} = car

//   console.log(make)
//   console.log(model)


//Exercise 4

// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

// const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// // Your code here

// controversialPizzaToppings = [...pizzaToppings]
//  console.log(controversialPizzaToppings)


//Exercise 5

// Duplicate the following object and spread its values into a new variable `myCar`.

// const car = {
//     make: 'Audi',
//     model: 'q5',
//   };
  
//   // Change the `model` property of `myCar` to 'q7'. Log both objects.
  
//   // Your code here

// const mycar = {...car}
// mycar.model = "q7"

// console.log(car)
// console.log(mycar)
  

// Exercise 6


// const fruitInventory = {
//     apples: 2,
//     oranges: 4,
//   };
  
//   const selectedFruit = 'apples'; // Variable as a dynamic key
//   const selectedFruitCount = fruitInventory[selectedFruit];
  
//   console.log(selectedFruitCount); // 2
  


// Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

// Your code here

// const userProfile = {}
// const propertyName = "username"
// userProfile[propertyName] = "Skyler"
// console.log(userProfile)

/*I don't get this one still */



//Exercise 7 - 8 Skipped


//Exercise 9

// Convert the following `if...else` statement in to a ternary:

// let pizza = 'tasty';

// if (pizza === 'tasty') {
//   console.log('yum');
// } else {
//   console.log('yuck');
// }

// Your code here
// let pizza = 'ok';

// console.log(pizza === 'tasty' ? 'yum' : 'yuck');



//Exercise 10

// const localLangConfig = "es";  

// const LANG = localLangConfig || 'en';

// console.log('Language setting:', LANG);

// Don't understand exercise 10
