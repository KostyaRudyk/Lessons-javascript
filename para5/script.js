// let i = 1;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }

// console.log(Number("hello"))

// let age = +prompt('Enter your age');
// while(Number.isNaN(age)|| age <0 || age >= 120 ) {
//     alert("Please enter a valid age");
//     age = prompt('Enter your age');
// }
// console.log(age);

// const  correctPin = 1111;
//
// //let pin =  +prompt("Enter a valid pin");
// let tries = 1;

// while(pin !== correctPin && tries<=3){
//     pin = +prompt("Enter a valid pin");
//     tries ++;
// }
// if (pin === correctPin){
//     alert("Доступ дозволено");
// }
// else{
//     console.log("Картку заблоковано");
// }
// while(tries<=3){
//     let pin = +prompt('Enter a valid pin');
//     if (pin===correctPin){
//         console.log("THX");
//         break;

//     }
//     tries++;
//     console.log("wrong pin");
// }

// let menuChoice;
// do{
//     menuChoice = +prompt("Choose an action:\n" +
//         "1- open profile\n" +
//         "2 - settings profile\n" +
//         "0- exit")
//     if (menuChoice === 1){
//         console.log("profile is opening");
//     }
//     else if (menuChoice === 2){
//         console.log(" profile is closing");
//     }
//     else if (menuChoice === 3) {
//         console.log("exit");
//     }
//     else {
//         console.log(" ?????");
//         }
// }while(menuChoice !== 0)

// let menuChoice;
// do {
//     menuChoice = +prompt("Choose an action:\n" +
//         "1- open profile\n" +
//         "2 - settings profile\n" +
//         "0- exit\n" +
//         "3 - Send message\n" +
//         "4 - delete account\n" +
//         "5 -    view info\n" );
// }

// let grade;
// let count = 0;
// let sum = 0;
// while(count< 5 ) {
//     let num;
//     num = +prompt('Enter the grade')
//     if (Number.isNaN(num)|| num<=0 || num>12) {
//         alert("invalid grade")
//         continue;
//     }
//     sum += num;
//     count++
// }
// alert (`average grade is ${sum/5}`)
//________________________________________________

let menuChoice;
let tries = 1;
const correctPin= 4321
let age = +prompt("Введіть скільки вам років:");
while (age <12 || age >90 || Number.isNaN(age)) {
    alert("Я вам не вірю")
    age = +prompt("Введіть скільки вам років:");
}
let pin = +prompt("Введіть пінкод");
while(pin !== correctPin && tries<3){
    pin = +prompt("Введіть правильний пін");
    tries ++;
}
if (pin === correctPin){
        do{menuChoice = +prompt("1 - Особистий кабінет\n" +
                "2 - Повідомлення\n" +
                "3 - Налаштування\n" +
                "0 - Вихід");
            if (menuChoice === 1){
                alert("Ви відкрили власний кабінет");
                }
            else if (menuChoice === 2){
                alert("Ви відкрили свої повідомлення");
            }
            else if (menuChoice === 3) {
                alert("Ви зайшли в налаштування");
            }
            else if (menuChoice === 0){
                    alert("Вихід");
                    break;
            }
            else{
                alert("Такого пункту немає")
            }
            }while(menuChoice !== 0)
    }
else{
    console.log("Картку заблоковано");
}




