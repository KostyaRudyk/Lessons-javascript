// //pryklad for
// for (let i = 10; i >= 1; i--){ // i +=1 i = i +1
//     console.log(`Число №${11 - i} - ${i}`);
// }

// sum = 0;
// for (let i = 1; i <= 100; i++) {
//     sum += i;
// }
// console.log(sum);

// for( let i= 1;i <= 100; i++) {
//     if(i >= 20 && i % 3 === 0 && i % 6 ===0){
//         console.log(i)
//         break
//     }
// }
//
// for( let i= 1;i <= 100; i++) {
//     if( i % 5 ===0 ){
//         continue;
//
//     }
//     console.log(i)
// }
//
let uchni = +prompt("Введіть кількість учнів")
if (uchni > 0 ) {
    let sum = 0,highLevel = 0, otherLevel =0;
    let minGrade = 12, maxGrade = 1;
    for(let i = 1; i<=uchni; i++) {
        let grade = +prompt(`введіть оцінку учня №${i} від 1 до 12`)
        if (!(grade >= 1 &&  grade <=12)) {
            alert("error")
            i--;
            continue;
        }
        sum += grade;
        if(grade>= 10) {
            highLevel ++;
        }else{
            otherLevel ++;
        }
        if (grade < minGrade){
            minGrade = grade
        }
        if (grade < maxGrade){
            maxGrade = grade
    }
    avg = sum / uchni;
}
    alert(`кількість учнів: ${uchni}\n Cuма оцінок: ${sum}\n
 середнє по оцінкам ${avg}\n
 mini ${minGrade}\n
 maxi ${maxGrade}\n
 higi ${highLevel}\n oh ${otherLevel}\n`)