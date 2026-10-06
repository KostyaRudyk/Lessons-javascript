// function showMessage() {
//     console.log("hello world!");
// }
//
// showMessage();
//
// function showProduct(name, price = "немає у наявності") {
//     console.log(`Товар ${name}: ${price}грн`);
// }
//
// showProduct("laptop")
//
// function calculate(price, count){
//
//     return price * count;
// }
// let total = calculate(1000,4);
// console.log(total);

// function discount(total) {
//     if (total >= 5000) {
//         return 10
//     }
//     else{
//         return 0;
//     }
// }
// let discount1 = +prompt("Enter number");
//
// console.log(discount(discount1))
//
// function getProductTotal(price, count) {
//     return price*count;
// }
//
// function getDiscount(total) {
//     if (total >= 10000) {
//         return 0.15;
//     }
//     else if(total >= 5000) {
//         return 0.1;
//     }
//     else if(total>= 2000){
//         return 0.05;
//     }
//     else{
//         return 0;
//     }
// }
// function getDiscountValue(total, percent) {
//     return total*percent;
// }
// function getFinalPrice(total, discount) {
//     return total-discount;
// }
//
// let productName = prompt('Please enter the product name');
// let productPrice = +prompt('Please enter the product price');
// let productCount = +prompt('Please enter the product count');
//
// let productTotal = getProductTotal(productPrice, productCount);
// let discount = getDiscount(productTotal);
// let Value = getDiscountValue(productTotal, discount);
// let finalPrice = getFinalPrice(productTotal, Value);
//
// console.log(`Товаp ${productName}`);
// console.log(`Ціна ${productPrice}грн `);
// console.log(`Кількість ${productCount} `);
// console.log(`сума ${productTotal}грн `);
// console.log(`знижка${discount} `);
// console.log(`сума знижки ${Value}грн `);
// console.log(`до сплати ${finalPrice}грн `);

// _______________________________------___--__--_-----____-----

// function getCostPerKm(consumption, price) {
//     return (consumption / 100) * price;
// }
//
// function getTotalCost(distance, costPerKm) {
//     return distance * costPerKm;
// }
//
// let startCity = prompt('Введіть місто старту:');
// let finishCity = prompt('Введіть місто фінішу:');
// let distance = +prompt('Введіть відстань в км:');
// let fuelConsumption = +prompt('Введіть розхід пального (л/100км):');
// let pricePerLiter = +prompt('Введіть вартість за 1л (грн):');
//
// let costPerKm = getCostPerKm(fuelConsumption, pricePerLiter);
// let totalCost = getTotalCost(distance, pricePerLiter);
//
// console.log(`Ваша поїздка з ${startCity} до ${finishCity} буде коштувати ${totalCost} грн`);

__________________________________________________________


let registeredLogin = "";
let registeredPassword = "";
let isRegistered = false;
function registerUser() {
    let login = prompt("Введіть логін:");
    let password = prompt("Введіть пароль:");
    return {
        login: login,
        password: password
    };
}

function loginUser(login, password) {
    let attempts = 3;
    while (attempts > 0) {
        let enteredLogin = prompt("Введіть логін:");
        let enteredPassword = prompt("Введіть пароль:");
        if (enteredLogin === login && enteredPassword === password) {
            console.log("Вхід дозволено!");
            return true;
        }

        if (enteredLogin !== login) {
            console.log("Неправильний логін!");
        } else {
            console.log("Неправильний пароль!");
        }
        attempts--;

        if (attempts > 0) {
            console.log("Залишилось спроб: " + attempts);
        }
    }

    console.log("Вхід заблоковано після трьох невдалих спроб.");
    return false;
}

function mainMenu() {
    let choice;
    do {
        choice = prompt(
            "Меню:\n" +
            "1 — Зареєструватися\n" +
            "2 — Увійти в акаунт\n" +
            "0 — Вийти\n\n" +
            "Оберіть пункт:"
        );
        if (choice === "1") {
            let user = registerUser();
            registeredLogin = user.login;
            registeredPassword = user.password;
            isRegistered = true;
            console.log("Реєстрація успішна!");
        } else if (choice === "2") {
            if (!isRegistered) {
                console.log("Спочатку зареєструйся!");
            } else {
                loginUser(registeredLogin, registeredPassword);
            }
        } else if (choice === "0") {
            console.log("Програму завершено.");

        } else {
            console.log("Такого пункту меню не існує!");
        }
    } while (choice !== "0");
}
mainMenu();
