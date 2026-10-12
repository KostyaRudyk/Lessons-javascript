// let languages = ["Python", "Javascript", "C++"];
// console.log(languages);
// console.log(languages[1]);
// console.log(languages.length);
//
// for(let i =0; i < languages.length; i++){
//     console.log(languages[i]);
// }
// function getsome(array){
//     let sum = 0;
//     for(let i =0; i<array.length; i++){
//         sum+=array[i];
//     }
//     return sum;
// }
//
// let numbers = [10, 15, 24, 26]
// console.log(getsome(numbers));
//
// let name = [];
// name.push("Ivan");
// name.push("Ivan2");
// name.pop();
// name.unshift("Ivan3","Ivan4");
// name.shift();
// console.log(name.slice(0,1));
//
// console.log(name)


// let color = ["red", "green", "blue", "yellow", "brown", "cyan", "white"];
// // color.splice(0, 1, "pink");
// let deleted = color.splice(4, 2)
// color.splice(1, 0, "pink")
// console.log(color);
// function registerNames(name){
//     if (name.trim() === ""){
//         alert("Please enter a name");
//         return;
//     }
//     let duplicateName = false;
//     for (i = 0; i < eventNames.length; i++) {
//         if (eventNames[i] === name){
//             duplicateName = true;
//         }
//     }
//     if (duplicateName){
//         alert('Учасник зареєстрований')
//     }else{
//         eventNames.push(name);
//         alert(`Koristuvach${name} зареєстрований`)
//     }
// }
// function removeNames(name){
//     let index = -1
//     for (i = 0; i < eventNames.length; i++){
//         if (eventNames[i] === name){
//             index = i;
//             break;
//         }
//     }
//     if (index === -1){
//         alert("Такого учасника немає")
//     }else {
//         eventNames.splice(index, 1);
//         alert(`Учасник ${name}Видаленимй`)
//     }
// }
// function printCount(){
//     alert(`Всього учасників ${eventNames.length}`)
// }
//

//
// registerNames("")
// removeNames("Ivan")

let eventNames = ["Ivan", "Olha", "Mariia", "Stepan", "Oleh"]
/*for(let i = 0; i < eventNames.length; i++){
    console.log(`${eventNames[i]}`)
}*/

// for(let name of eventNames){
//     console.log(`${name}`)
// }

eventNames.forEach(function (name, index){
    console.log(index)
    console.log(name)
})