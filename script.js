//Task 1
let arr = [
    {name: 'Cobalt', cost: 15000},
    {name: 'Jentra', cost: 16000},
    {name: 'Tico', cost: 4000},
    {name: 'Matiz', cost: 6000},
    {name: 'Nexia', cost: 12000},
    {name: 'Jiguli', cost: 150}
];
let cheapArr = arr.filter(arr => arr.cost <= 7000);

console.log(cheapArr);

//Task 2
let arr2 = [1, 2, 'hello', 24, 'world', undefined, null, 'error', 22]
let filteredArr2 = arr2.filter(arr2 => arr2 > 0);

console.log(filteredArr2);

//Task 3
let arr3 = [1, 2, 'hello', 24, 'world', undefined, null, 'error', 22]
let filteredArr3 = arr3.filter(arr3 => arr3 > 0);

if (filteredArr3 >= 5) {
    console.log('good');
} else {
    console.log('bad');
}

//Task 5
let arr5 = [1, 2, 'hello', 24, 'world', undefined, null, 'error', 22]
let filteredArr5 = arr5.filter(arr5 => arr5 > 0);

if (filteredArr5 > 5) {
    console.log('good');
} else {
    console.log('bad');
}








