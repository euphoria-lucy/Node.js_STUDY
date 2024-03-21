const A = 0 || 65;
console.log(A); // 65

const B = 0 ?? 65;
console.log(B); // 0

const C = "" || "hi";
console.log(C); // hi

const D = "" ?? "hi";
console.log(D); // ""
