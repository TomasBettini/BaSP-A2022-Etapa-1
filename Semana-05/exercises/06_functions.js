console.log('--EXERCISE 6: FUNCTIONS');

// Exercise "A"

console.log('-Exercise 6.a:');
function suma(a, b) {
    return (a + b);
}
var result = suma(2, 3);
console.log(result);

// Exercise "B"

console.log('-Exercise 6.b:');
function suma2(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        alert('One of the values is not a number');
        return NaN; 
    }
    return (a + b);
}
console.log(suma2(2, '3'));

// Exercise "C"

console.log('-Exercise 6.c:');
function validateInteger(num) {
    return Number.isInteger(num);
}
console.log(validateInteger(3.5));
console.log(validateInteger(3));

// Exercise "D"

console.log('-Exercise 6.d:');
function suma3(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        alert('One of the values is not a number');
        return NaN; 
    }
    if (!validateInteger(a)) {
        alert(a + ' is not an integer');
        return Math.round(a);
    }
    if (!validateInteger(b)) {
        alert(b + ' is not an integer');
        return Math.round(b);
    }
    return (a + b);
}
console.log(suma3(0.6, 2));
console.log(suma3(1, 2.3));
console.log(suma3(1, '2'));

// Exercise "E"

console.log('-Exercise 6.e:');
function validate(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        alert('One of the values is not a number');
        return NaN; 
    }
    if (!validateInteger(a)) {
        alert(a + ' is not an integer');
        return false;
    }
    if (!validateInteger(b)) {
        alert(b + ' is not an integer');
        return false;
    }
    return true;
}

function suma4(a, b) {
    if (!validate(a, b)) {
        return 'There is an error!';
    }
    return (a + b);
}
console.log(suma4(1, 2));
console.log(suma4(1, 2.3));
console.log(suma4(1, '2'));