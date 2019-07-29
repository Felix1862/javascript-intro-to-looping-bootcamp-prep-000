function forLoop(array) {
  for (let i = 1; i < 25; i ++) {
    if (i === 1) {
      array.push(`I am 1 strange loop.`);
    } else {
      array.push(`I am ${i} strange ${i == 1 ? 'loop' : 'loops'}.`)
    }
  }
  return array
}
const array = [];
const out = forLoop(array)
console.log(out)
