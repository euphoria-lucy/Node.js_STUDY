const numbers = [1, 2, 3, 4, 5];

// 콜백이 참인 조건을 만족하는 가장 첫번째 요소만 반환
const evenNumbers = numbers.find((num) => num % 2 == 0);

console.log(evenNumbers);

const users = [
  { name: "김정민", age: 20 },
  { name: "박지성", age: 23 },
  { name: "박지환", age: 19 },
];

const adults = users.filter((user) => user.age < 20);

console.log(adults);
