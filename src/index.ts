export {};

// EXAMPLE 1 - Replace all occurrences of a String in TypeScript

const str = 'apple banana apple';

const result = str.replaceAll('apple', 'kiwi');

console.log(result); // 👉️ "kiwi banana kiwi"

// ---------------------------------------------------

// // EXAMPLE 2 - Replace all occurrences of a String in a case-insensitive manner

// const str = 'APPLE banana apple';

// const result = str.replaceAll(/apple/gi, 'kiwi');

// console.log(result); // 👉️ "kiwi banana kiwi"

// ---------------------------------------------------

// // EXAMPLE 3 - Replace all occurrences of a String in TypeScript using replace()

// const str = 'APPLE banana apple';

// const result = str.replace(/apple/gi, 'kiwi');

// console.log(result); // 👉️ "kiwi banana kiwi"

// ---------------------------------------------------

// // EXAMPLE 4 - Replace all occurrences of a String using split() and join()

// const str = 'apple banana apple';

// const result = str.split('apple').join('kiwi');
// console.log(result); // 👉️ kiwi banana kiwi
