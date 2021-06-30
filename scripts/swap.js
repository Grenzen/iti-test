console.log('before swap')
let a = "XXX";
console.log(`a = ${a}`);
let b = "YYY";
console.log(`b = ${b}`);
[a, b] = [b, a]
console.log('after swap')
console.log(`a = ${a}`);
console.log(`b = ${b}`);