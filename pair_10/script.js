 let student = {
     name: 'Rudyk Kostiantyn',
     role:'Ліцеїст 11 класу',
     city: "Київ",
     portfolio: "https://github.com",
 }



let nameElement = document.querySelector("#profile-name");
let roleElement = document.querySelector("#profile-role");
let cityElement = document.querySelector("#profile-city");
let portfolioElement = document.querySelector("#profile-link");

nameElement.textContent = student.name;
// roleElement.textContent = student.role;
cityElement.textContent = student.city;
roleElement.innerHTML = '<strong>'+ student.role +'</strong>';

portfolioElement.setAttribute('href', student.portfolio);
let skillsElement = document.querySelectorAll(".skills");

let skillsArray = ['HTML', 'CSS', 'JavaScript'];
// skillsElement[0].textContent = 'HTML';
// skillsElement[1].textContent = 'CSS';
// skillsElement[2].textContent = 'JS';
 for (let i = 0; i < skillsArray.length; i++) {
     skillsElement[i].textContent = skillsArray[i];
 }
