// // let book = {
// //     title : "Кобзар",
// //     author: "Тарас Шевченко",
// //     price: 500,
// //     available: true
// // }
// // console.log(book);
// // console.log(book.price, book.author, book.price, book.available);
// // console.log(book['author']);
// // book.price = 550
// // console.log(book.price);
//
// // for(let key in book){
// //     console.log(`${key}, ${book[key]}`);
// // }
// let books = [
//     {id: 1, title : "Кобзар",   author: "Тарас Шевченко", price: 500, available: true },
//     {id: 2, title : "Лісова пісня",   author: "Леся Укрїнка", price: 600, available: false },
//     {id: 3, title : "Тигролови",   author: "Іван Багряний", price: 450, available: true },
//     {id: 4, title : "Енеїда",   author: "Іван Котляревський", price: 500, available: false }
// ]
//
// books.push({id: 5, title:'Захар Беркут', author: "Іван Франко", price:600, available: false});
// // // console.log(books);
// // // for (let book of books) {
// // //     console.log(` ${book.title} - ${book.author}`);
// // // }
// // // books.forEach(function(book){
// // //     console.log(`  ${book.title} - ${book.author}`);
// // // })
// // // let total = books.filter(function(book){
// // //     return book.available === true;
// // // });
// //
// // let total = books.filter(book => book.available === true);
// // console.log(total);
// //
// // let foundBooks = books.find(book => book.id === 3  )
// // console.log(foundBooks);
// //
// // let searchUserBook = prompt("Enter book title:");
// // let searchBook = books.find(book => book.title === searchUserBook);
// // if(searchBook !== undefined){
// //     alert(searchBook);
// // }else{
// //     alert("такої книги немає")
// // }
// // let titles = books.map(book => book.title);
// // console.log(titles);
// // let booksSales  = books.map(book => {
// //     return{
// //         id: book.id,
// //         title: book.title,
// //         author: book.author,
// //         price: Math.round(book.price* 0.9),
// //         available: book.available,
// //     }
// // });
// // console.log(booksSales);
// let sortedByPrice = books.slice().sort((b, a) => a.price - b.price)
// console.log(sortedByPrice)

let games = [
    {id: 1, title: "Counter-Strike 2", genre: "Шутер", price: 0, rating: 8, available: true},
    {id: 2, title: "Minecraft", genre: "Пісочниця", price: 900, rating: 9, available: true},
    {id: 3, title: "The Witcher 3", genre: "RPG", price: 500, rating: 10, available: true},
    {id: 4, title: "Forza Horizon 5", genre: "Перегони", price: 1100, rating: 9, available: false},
    {id: 5, title: "It Takes Two", genre: "Пригоди", price: 800, rating: 9, available: true},
    {id: 6, title: "Cyberpunk 2077", genre: "RPG", price: 1200, rating: 8, available: false}
];


for (let game of games) {
    console.log(`${game.id}. ${game.title} - ${game.genre}, ${game.price} грн, рейтинг: ${game.rating}, доступна: ${game.available}`);
}


console.log("Кількість ігор:", games.length);

let title = prompt("Введіть назву гри:");
let genre = prompt("Введіть жанр гри:");
let price = Number(prompt("Введіть ціну гри:"));
let rating = Number(prompt("Введіть рейтинг гри:"));

games.push({
    id: games.length + 1,
    title: title,
    genre: genre,
    price: price,
    rating: rating,
    available: confirm("Гра є в наявності? OK — так, Cancel — ні")
});

console.log("Каталог після додавання:", games);
if (confirm("Видалити останню гру з каталогу?")) {
    let deletedGame = games.pop();
    alert(`Видалено гру: ${deletedGame.title}`);
} else {
    alert("Видалення скасовано");
}

let searchTitle = prompt("Введіть назву гри для пошуку:");
let foundGame = games.find(game => game.title === searchTitle);

if (foundGame !== undefined) {
    alert(`Знайдено гру: ${foundGame.title}, ціна: ${foundGame.price} грн`);
} else {
    alert("Такої гри немає");
}

let maxPrice = Number(prompt("Введіть максимальну ціну гри:"));
let cheapGames = games.filter(game => game.price <= maxPrice);
console.log("Ігри за вказаною ціною:", cheapGames);
let goodGames = games.filter(game => game.rating >= 8);
console.log("Ігри з рейтингом від 8:", goodGames);
let titles = games.map(game => game.title);
console.log("Назви ігор:", titles);
let discountedGames = games.map(game => {
    return {
        id: game.id,
        title: game.title,
        genre: game.genre,
        price: Math.round(game.price * 0.85),
        rating: game.rating,
        available: game.available
    };
});

console.log("Ігри зі знижкою 15%:", discountedGames);

let sortedByPrice = games.slice().sort((a, b) => a.price - b.price);
console.log("Ігри за зростанням ціни:", sortedByPrice);

const name = prompt("Введіть своє ім'я:") || "";

let budget = name.length * 100;
console.log("Ім'я:", name);
console.log("Кількість символів:", name.length);
console.log("Бюджет:", budget, "грн");
let availableGames = games.filter(game => game.available === true);
let totalCost = 0;
console.log("Доступні для придбання ігри:");
for (let game of availableGames) {
    console.log(`${game.title} — ${game.price} грн`);
    totalCost += game.price;
}
console.log("Загальна вартість:", totalCost, "грн");
if (totalCost > budget) {
    alert(`Загальна вартість (${totalCost} грн) перевищує твій бюджет (${budget} грн).`);
} else {
    alert(`Твій бюджет: ${budget} грн. Загальна вартість: ${totalCost} грн. Залишок: ${budget - totalCost} грн.`);
}




