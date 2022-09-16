console.log('--EXERCISE 4: IF ELSE');

// Exercise "A"

console.log('-Exercise 4.a:');
var numRandom = Math.random();
if (numRandom >= 0.5){
    alert('Exercise 4.a:' + ' ' + 'Greater than 0,5');
} else {
    alert('Exercise 4.a:' + ' ' + 'Lower than 0,5');
}
console.log(numRandom);

// Exercise "B"

console.log('-Exercise 4.b:');
var age = 24;
if (age<2){
    alert('Exercise 4.b:' + ' ' + 'Bebe');
} else if (age>=2 && age<=12){
    alert('Exercise 4.b:' + ' ' + 'Niño');
} else if (age >=13 && age<=19){
    alert ('Exercise 4.b:' + ' ' + 'Adolescente');
} else if (age >=20 && age<=30){
    alert ('Exercise 4.b:' + ' ' + 'Joven');
} else if (age>=31 && age<=60){
    alert ('Exercise 4.b:' + ' ' + 'Adulto');
} else if ( age >=61 && age<=75){
    alert ('Exercise 4.b:' + ' ' + 'Adulto mayor');
} else {
    alert ('Exercise 4.b:' + ' ' + 'Anciano');
} 
console.log(age);
