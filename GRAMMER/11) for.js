const fruits = [
  "apple",
  "banana",
  "strawberry",
  "orange",
  "pear",
  "kiwi",
  "blueberry",
  "ShineMusket",
];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

fruits.forEach((f) => console.log(f));

for (const f of fruits) {
  console.log(f);
}
