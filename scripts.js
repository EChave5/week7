//1. 

let ages = [3, 9, 23, 64, 2, 8, 28, 93];

//a. subtract value of first element from value of last element
console.log('Question 1a:');
function agesArray (a,b) {
  return (b-a);
}
console.log(agesArray(ages.at(0), ages[ages.length-1])); 

//b. add a new age to array and repeat function 
console.log('Question 1b:')
ages.push(15);
console.log(ages);
console.log(agesArray(ages.at(0), ages[ages.length-1]))

// c. using a loop to iterate through array and calculate average
console.log('Question 1c:');
let sumOfAges = 0;
for (let i=0; i < ages.length; i++) {
  sumOfAges += ages[i];
  console.log('index:', i, 'sum of ages:', sumOfAges);
  }
console.log("average of sum of ages:", sumOfAges / ages.length);

//2.
//a. use a loop to calculate average number of letters per name
console.log('Question 2a:');
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(names);
let totalLetters = 0;

for (let i=0; i < names.length; i++) {
  totalLetters += names[i].length;
  console.log('name:', names[i],'/', 'total letters:', totalLetters);
}
console.log('total letters in names:', totalLetters);
let averageLetters = totalLetters / names.length;
console.log('average letters of names in array', averageLetters);

//b. use a loop to iterate through array and concatenate names together
console.log('Question 2b:');
let combinedNames = ""; 
for (let i=0; i < names.length; i++) {
  combinedNames = combinedNames.concat(names[i] + ' ');
  console.log(combinedNames);
}


//3. To access the last element of an array: Use array[array.length-1]
console.log('Question 3:');
console.log(names[names.length-1]);
//4. To access the first element of an array: Use array.at(0) or array[0]
console.log('Question 4:');
console.log(names.at(0));
console.log(names[0]);

//5. create a new array = nameLengths and write a loop to iterate over names array and add 
//the length of each name to the new array
console.log('Question 5:');
console.log(names);
let nameLength = []; 
for (let i=0; i < names.length; i++) {
  nameLength.push(names[i].length);
  console.log( 'length of names array:', nameLength);
}


//6.  write a loop to iterate over nameLengths array and calculate the sum of all the elements
console.log('Question 6:');
let sumOfNameLength = 0; 
for (let i=0; i < names.length; i++) {
  sumOfNameLength += nameLength[i];
  console.log('sum of letters:', sumOfNameLength);
}

//7. write a function that takes two parameters (word, n) and returns the word concatenated to itself n times
console.log('Question 7:');

function repeatWord (word, n) {
  console.log(word.repeat(n))
}
console.log(repeatWord("Hello", 3));

//8. write a function that takes two parameters and returns a full name
console.log('Question 8:')
let firstName = 'Sam';
let lastName = 'Jones';

function fullName(a,b) {
 return (a + ' ' + b);
}

console.log(fullName(firstName, lastName));

//9. a function that takes an array of numbers and returns true if the sum of all the numbers is greater than 100
console.log('Question 9:');
numbers1 = [42,9,56,2,73]; 
numbers2 = [4,10,5,35,9];

function numbersArray(array) {
  let sumOfNumbers=0; 
  for (i=0; i< array.length; i++) {
    sumOfNumbers += array[i];
  }
   if (sumOfNumbers > 100) {
    return true;
  } else {
    return false;
  }
}
console.log(numbersArray(numbers1));

//10. write a function that takes an array of numbers and returns the average of all the elements in the array
console.log('Question 10:')

array1 = [100, 200, 300, 400];

function arrayAverage (array) {
  let sumOfArray = 0;

  for (let i = 0; i < array.length; i++) {
  sumOfArray += array[i];
} console.log('Sum:', sumOfArray);
let average = sumOfArray / array.length;
console.log('Average of sum:', average);
return average;
}
arrayAverage(array1);

//11. write a function that takes two arrays of numbers and returns true if the average of the 
//elements in the first array is greater than the averages of the elements in the second
console.log('Question 11:');

array1 = [30,70,40];
array2 = [20,70,40];

function twoAverages(array1, array2) {
  let sum1 = 0;
  let sum2 = 0;
for (const number of array1) {
  sum1 += number;
} console.log('Sum of first array:', sum1);
for (const number of array2) {
  sum2 += number;
} console.log('Sum of second array:', sum2);
let average1 = sum1 / array1.length;
let average2 = sum2 / array2.length;
console.log('Average of first array:', average1, 'Average of second array:', average2);

if (average1 > average2) {
  console.log(true);
} else if (average1 < average2) {
  console.log(false);
}
}
twoAverages(array1,array2);


//12.  write a function called willBuyDrink that takes boolean isHotOutside and a number
//moneyInPocket and returns true if it is hot outside and moneyInPocket is greater than 10.50
console.log('Question 12:');

let isHotOutside = true;
let moneyInPocket = 5.50;

function willBuyDrink (a,b) {
  if (a === true && b > 10.50) {
    return true;
  } else {
    return false;
  }
}
console.log(willBuyDrink(isHotOutside, moneyInPocket));

