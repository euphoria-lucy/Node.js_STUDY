let foo;
console.log(foo); // undefined

const obj = {};
console.log(obj.object); // undefined

// console.log(bar); // 에러발생

let bar = null;
console.log(null); // null

// 주의할 것
console.log(null == undefined); // true
console.log(null === undefined); // false
