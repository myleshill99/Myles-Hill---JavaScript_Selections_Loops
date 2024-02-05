console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let j = 1; j <= 100; j++) {
    if (j % 3 === 0 && j % 5 === 0) {
        console.log('FIZZBUZZ');
    } else if (j % 3 === 0) {
        console.log('FIZZ');
    } else if (j % 5 === 0) {
        console.log('BUZZ');
    }
}

// Exercise 3 Section
let k = 1;
while (k <= 100) {
    if (k % 2 !== 0) {
        console.log(k);
    }
    k++;
}

let l = 1;
do {
    if (l % 2 !== 0) {
        console.log(l);
    }
    l++;
} while (l <= 100)


let m = 1;
while (m <= 100) {
    if (m % 3 === 0 && m % 5 === 0) {
        console.log('FIZZBUZZ');
    } else if (m % 3 === 0) {
        console.log('FIZZ');
    } else if (m % 5 === 0) {
        console.log('BUZZ');
    }

    m++;
}

let n = 1;
do {
    if (n % 3 === 0 && n % 5 === 0) {
        console.log('FIZZBUZZ');
    } else if (n % 3 === 0) {
        console.log('FIZZ');
    } else if (n % 5 === 0) {
        console.log('BUZZ');
    }

    n++;
} while (n <= 100);

// Exercise 4 Section
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let o = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
for (let p = 0; p <= o; p++) {
    if (p === value) {
        console.log('Found value!');
    }
}
console.log('Did not find value');

// Exercise 5 Section
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
n = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (let idx = start; idx <= n; idx++) {
    if (idx % fizzDivisor === 0 && idx % buzzDivisor === 0) {
        console.log('FIZZBUZZ');
    } else if (idx % fizzDivisor === 0) {
        console.log('FIZZ');
    } else if (idx % buzzDivisor === 0) {
        console.log('BUZZ');
    }
}
