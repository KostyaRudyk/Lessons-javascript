let saveBtn = document.querySelector('#saveBtn');
let status = document.querySelector('#status');
saveBtn.addEventListener('click', function() {
    let name = studentName.value.trim();
    if(name === "") {
        status.textContent = "Введіть своє ім'я!";
        status.classList.remove('success');
        status.classList.add('error');
    }
    else {
        status.textContent = "Зміни успішно підтверджені!";
        status.classList.remove('error');
        status.classList.add('success');
    }
});

let studentName = document.querySelector('#studentName');
let welcome = document.querySelector('#welcome');
studentName.addEventListener('input', function() {
    let name = studentName.value.trim();
    if(name === "") {
        welcome.textContent = "Вітаємо, гостю!";
    }
    else {
        welcome.textContent = "Вітаємо, " + name + "!";
    }
});
let theme = document.querySelector('#theme');
let card = document.querySelector('#card');

theme.addEventListener('change', function() {
    card.classList.remove('dark', 'blue');

    if(theme.value === "dark") {
        card.classList.add('dark');
    }
    else if(theme.value === "blue") {
        card.classList.add('blue');
    }
});
let detailedBtn = document.querySelector('#detailedBtn');
let details = document.querySelector('#details');
detailedBtn.addEventListener('click', function() {
    details.classList.toggle('hidden');
    if(details.classList.contains('hidden')) {
        detailedBtn.textContent = "Показати інформацію";
    }
    else {
        detailedBtn.textContent = "Приховати інформацію";
    }
});