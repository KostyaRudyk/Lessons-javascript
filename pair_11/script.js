let enrollBtn = document.querySelector('#enrollBtn');
let status = document.querySelector('#status');

enrollBtn.addEventListener('click', function(){
    status.textContent = "Ви успішно записані на курс!";
    enrollBtn.textContent = "Запис оформлено"
    status.classList.add('success');

})

let studentName = document.querySelector('#studentName');
let welcome = document.querySelector('#welcome');

studentName.addEventListener('input', function() {
    let name = studentName.value.trim(
        if(name===""){
            welcome.textContent="Вітаємо, гостю!"
        }
        else{
            welcome.textContent = "вітаємо"+ name +"!";
        }
    );
})
let format = document.querySelector('#format');
let cost = document.querySelector('#cost');
format.addEventListener('change', function(){
    let selectPrice = Number(format.value);
    cost.textContent = selectPrice + "$";
})

let detailedBtn = document.querySelector('#detailedBtn');
let details = document.querySelector('#details');
details.addEventListener('click', function(){
    details.classList.toggle('hidden');


    if(details.classList.contains('hidden')) {
        detailedBtn.textContent = "показати опис"
    }
    else{
        detailedBtn.textContent = "Приховати опис"
    }
})

let card = document.querySelector('#card');
let themeBtn = document.querySelector('#themeBtn');
themeBtn.addEventListener('click', function(){
    card.classList.toggle('dark');
    if(card.classList.contains('dark')) {
        themeBtn.textContent = "Світла тема"
    }
    else{
        themeBtn.textContent = "Темна тема"
    }
})