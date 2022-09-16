console.log('--EXERCISE 2: STRINGS');

// Exercise "A"

console.log('-Exercise 2.a:');

var firstString = 'Good morning Roger';

console.log(firstString.toUpperCase());

// Exercise "B"

console.log('-Exercise 2.b');

var secondString = 'Nadal is the best';
var result2 = secondString.substring(0,5)

console.log(result2);

// Exercise "C"

console.log('-Exercise 2.c:');

var thirdString = 'Alcaraz is the number one';
var result3 = thirdString.substring(22,25);

console.log(result3);

// Exercise "D"

console.log('-Exercise 2.d:');

var fourthString = 'good morning Nadal';
var result4 = fourthString[0].toUpperCase() + fourthString.substring(1).toLowerCase();

console.log(result4);

// Exercise "E"

console.log('-Exercise 2.e:');

var fifthString = 'Good morning';
var result5 = fifthString.indexOf(' ');

console.log(result5);

// Exercise "F"

console.log('-Exercise 2.f:');

var sixthString = 'responsive design';

console.log(sixthString[0].toUpperCase() + sixthString.substring(1, sixthString.indexOf(' ')) + ' ' 
+ sixthString[sixthString.indexOf('design')].toUpperCase() + sixthString.substring(sixthString.indexOf('esign')))