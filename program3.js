// Faruslan Waming 6135512065
// โปรแกรมที่ 3 : หาค่าผลรวม และค่าเฉลี่ย ในสมาชิก array

let numbers = [30, 27, 84, 36, 24, 2, 74, 37, 8, 50];
let sum = 0;

// Finding summation หาค่ารวมกันของตัวเลขในชุด array
for (let i = 0; i < numbers.length; i++) {
    sum = sum+numbers[i];
}

console.log("Numbers : " + numbers.join(" "));
console.log("Sum : " + sum);
console.log("Average : " + (sum / numbers.length));