let count = +script("Введіть кількість учнів:");
let sumGrades = 0;
let midGrade = 0;
let highGrade = 0;
let lowGrade = 0;
let maxGrade;
let minGrade;
let first = 0;
for (let i = 1; i <= count; i++) {
    let grade = +script(`Введіть бал учасника під номером ${i}:`);
    while (grade < 0 || grade > 100) {
        alert("Бал повинен бути від 0 до 100");
        grade = +script(`Введіть бал учасника під номером ${i}:`);
    }
    if (grade === 100 && first === 0) {
        first = i;
    }
    if (i === 1) {
        maxGrade = grade;
        minGrade = grade;
    }
    if (grade > maxGrade) {
        maxGrade = grade;
    }
    if (grade < minGrade) {
        minGrade = grade;
    }
    sumGrades += grade;
    if (grade >= 90 && grade <= 100) {
        highGrade += 1;
    }
    if (grade >= 60 && grade <= 89) {
        midGrade += 1;
    }
    if (grade < 60) {
        lowGrade += 1;
    }
}
let avgGrade = sumGrades / count;
console.log("Середній бал:", avgGrade);
console.log("Балів 90–100:", highGrade);
console.log("Балів 60–89:", midGrade);
console.log("Балів менше 60:", lowGrade);
console.log("Максимальний бал:", maxGrade);
console.log("Мінімальний бал:", minGrade);
console.log("Перший учасник зі 100 балами:", first);