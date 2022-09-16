console.log('--EXERCISE 3: ARRAYS');

// Exercise "A"

console.log('-Exercise 3.a:');
var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre',
 'Noviembre', 'Diciembre'];
console.log(months[4] + " " + months[10]);

// Exercise "B"

console.log('-Exercise 3.b:');
months.sort();
console.log(months);

// Exercise "C"

console.log('-Exercise 3.c:');
months.unshift('First element');
months.push('Final element');
console.log(months);

// Exercise "D"

console.log('-Exercise 3.d:');
months.shift();
months.pop();
console.log(months);

// Exercise "E"

console.log('-Exercise 3.e:');
months.reverse();
console.log(months);

// Exercise "F"

console.log('-Exercise 3.f:');
console.log(months.join('-'));

// Exercise "G"

console.log('-Exercise 3.g:');
var months2 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre',
'Noviembre', 'Diciembre'];
console.log(months2.slice(4, 11));