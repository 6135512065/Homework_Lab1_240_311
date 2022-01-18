// Faruslan Waming 6135512065
// โปรแกรมที่ 2 : หาเกรดที่ได้จากคะแนนเต็ม 100

console.log("#######################################");
console.log('Inter your score : ')

let stdin = process.openStdin()
let Inter_your_score

stdin.addListener("data", (number) => {
    Inter_your_score = number

  if (Inter_your_score >= 80)
    console.log("Your grade is A");

    else if (Inter_your_score >= 75)
    console.log("Your grade is B+");

    else if(Inter_your_score >= 70)
    console.log("Your grade is B");
    
    else if(Inter_your_score >= 65)
    console.log("Your grade is C+");
    
    else if(Inter_your_score >= 60)
    console.log("Your grade is C");
    
    else if(Inter_your_score >= 55)
    console.log("Your grade is D+");
    
    else if(Inter_your_score >= 50)
    console.log("Your grade is D");
    
    else
    console.log("Your grade is E");

    console.log("#######################################");

    })