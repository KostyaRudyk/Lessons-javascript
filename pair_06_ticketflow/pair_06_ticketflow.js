//Консольник сервіс TicketFLow???????
let action;
let price;
let age;
let count = 0;
let free = 0;
let discount = 0;
let full = 0;
let total = 0;
let day;
do { action = +prompt("Куди ти хочеш сходитити?\n" +
    "1 — кіно\n" +
    " 2 — театр\n" +
    " 3 — концерт\n")
    switch (action) {
        case 1:
            price = 150
            console.log("Ви обрали кіно!!!")
            break;
        case 2:
            price = 220
            console.log("Ви обрали театр!!!")
            break;
        case 3:
            price = 350
            console.log("Ви обрали концерт!!!")
            break;
        default:
            console.log("Неправильний номер!!!")
            }
}while (action !== 1 && action !== 2 && action !== 3);
console.log(`Ціна за квиток: ${price}`);

while (day !== 1 && day !== 2) {
    day = +prompt(
        "Оберіть тип дня:\n" +
        "1 — будній\n" +
        "2 — вихідний");
}

if (day === 2) {
    price = price * 1.15;
}

console.log(`Ціна з урахуванням дня:${price} грн`);

let ticket = +prompt("Скільки квитків ви бажаєте купити");
while (Number.isNaN(ticket)|| ticket >6|| ticket <1) {
    ticket = +prompt("Неправильна кількість! Введіть число від 1-6:");
}
for (let i = 0; i < ticket; i++) {
    age = +prompt(`Введіть вік для квитка №${i + 1}:`);
    if (age === -1) {
        break;
    }
    while (Number.isNaN(age) || age < 0) {
        age = +prompt("Некоректний вік! Введіть вік ще раз:");
    }
    console.log(`Вік для квитка №${i + 1}: ${age}`);

    let ticketPrice = price;

    if (age >= 0 && age <= 5) {
        free++;
        count++;
        continue;
    } else if (age >= 6 && age <= 12) {
        ticketPrice = ticketPrice * 0.5;
    } else if (age >= 13 && age <= 17) {
        ticketPrice = ticketPrice * 0.8;
    } else if (age >= 60) {
        ticketPrice = ticketPrice * 0.75;
    }

    if (age >= 18 && age <= 25) {
        let kvitok = prompt("У вас є студентський квиток?");

        while (kvitok !== "так" && kvitok !== "ні") {
            kvitok = prompt("Потрібно написати так або ні");
        }

        if (kvitok === "так") {
            ticketPrice = ticketPrice * 0.9;
        }
    }

    count++;
    if (ticketPrice < price) {
        discount++;
    } else {
        full++;
    }
    total += ticketPrice;
    console.log(`Ціна цього квитка: ${ticketPrice} грн`);
    if (total > 1000) {
        total = total * 0.95;
    }
}
console.log(`Кількість оброблених квитків: ${count}`);
console.log(`Безкоштовних квитків: ${free}`);
console.log(`Квитків зі знижкою: ${discount}`);
console.log(`Квитків за повною ціною: ${full}`);
console.log(`Загальна сума: ${total} грн`);
