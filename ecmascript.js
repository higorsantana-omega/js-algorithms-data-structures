// interactos introduzed in es6
// for...of
const numbers = [0, 1, 2, 3]

for (const n of numbers) {

  console.log(n % 2 === 0 ? 'even' : 'odd')
}

// Using @@iterator
let iterator = numbers[Symbol.iterator]()
console.log(iterator.next().value) // 1
console.log(iterator.next().value) // 2

iterator = numbers[Symbol.iterator]()
for (const n of iterator) {
  console.log(n)
}
