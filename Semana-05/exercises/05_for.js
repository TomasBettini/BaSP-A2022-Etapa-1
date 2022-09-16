console.log('--EXERCISE 5: FOR');

// Exercise "A"

console.log('-Exercise 5.a:');
var array = ['futbol', 'tenis', 'rugby', 'basquet', 'hockey'];
for (i of array){
    alert('Exercise 5.a:' + ' ' + i);
}

// Exercise "B"

console.log('-Exercise 5.b:');
for (i of array){
    alert('Exercise 5.b:' + ' ' + i[0].toUpperCase() + i.substring(1));
}

// Exercise "C"

console.log('-Exercise 5.c:');
var sentence = '';
for (i of array){
    sentence = sentence.concat(i,'-');
}
alert('Exercise 5.c:' + ' ' + sentence);

// Exercise "D"

console.log('-Exercise 5.d:');
var array2 = [];
for (var i = 0; i < 10; i++){
    array2.push(i);
}
console.log(array2);