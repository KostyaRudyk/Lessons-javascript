function askNumber(message, min, max) {
    while (true) {
        let input = prompt(message);

        if (input === null) return null;

        let number = Number(input);

        if (input.trim() !== "" && Number.isInteger(number) &&
            number >= min && number <= max) {
            return number;
        }
        alert("Введіть правильне число!");
    }
}

function showTopics() {
    let message = "КАТАЛОГ ВЕБІНАРІВ:\n\n";
    for (let i = 0; i < topics.length; i++) {
        message += (i + 1) + ". " + topics[i] + " — " +
            seats[i] + " місць (" +
            (seats[i] > 0 ? "Набір відкрито" : "Місць немає") + ")\n";
    }
    alert(message);
}

function findTopic(name) {
    for (let i = 0; i < topics.length; i++) {
        if (topics[i].toLowerCase() === name.trim().toLowerCase()) {
            return i;
        }
    }
    return -1;
}

function showParticipants() {
    let message = "СПИСОК УЧАСНИКІВ:\n\n";

    for (let i = 0; i < participants.length; i++) {
        message += (i + 1) + ". " + participants[i] + "\n";
    }
    return message;
}

function getVisitStats(values) {
    let sum = 0;
    let max = values[0];
    let min = values[0];
    for (let value of values) {
        sum += value;
        if (value > max) max = value;
        if (value < min) min = value;
    }
    return [sum, sum / values.length, max, min];
}

function distributeRequests(scores) {
    let high = [];
    let medium = [];
    let low = [];
    for (let score of scores) {
        if (score >= 85) {
            high.push(score);
        } else if (score >= 50) {
            medium.push(score);
        } else {
            low.push(score);
        }
    }
    return [high, medium, low];
}

function getAverage(group) {
    if (group.length === 0) return 0;
    let sum = 0;
    for (let score of group) {
        sum += score;
    }
    return sum / group.length;
}

function getGroupName(score) {
    if (score >= 85) return "HIGH";
    if (score >= 50) return "MEDIUM";
    return "LOW";
}

let topics = ["JavaScript", "HTML", "CSS", "Git", "WebStorm", "Vue"];
let seats = [12, 8, 15, 0, 6, 10];
let userName = "";
let birthDay;
let birthMonth;
let personalNumber;
let participants = [];
let visits = [24, 18, 32, 0, 15, 27, 9, 21];
let bonus;
let personalVisits = [];
let requestScores = [72, 95, 41, 86, 60, 100, 53, 88, 29];
let personalScore;

while (userName === "") {
    let input = prompt("Введіть своє ім'я:");
    if (input !== null) {
        userName = input.trim();
    }
    if (userName === "") {
        alert("Ім'я не може бути порожнім!");
    }
}
birthDay = +prompt("Введіть день народження (1–31):");
while (!Number.isInteger(birthDay) || birthDay < 1 || birthDay > 31) {
    alert("Введіть день від 1 до 31!");
    birthDay = +prompt("Введіть день народження (1–31):");
}

birthMonth = +prompt("Введіть місяць народження (1–12):");

while (!Number.isInteger(birthMonth) || birthMonth < 1 || birthMonth > 12) {
    alert("Введіть місяць від 1 до 12!");
    birthMonth = +prompt("Введіть місяць народження (1–12):");
}
personalNumber = (userName.length + birthDay + birthMonth) % (topics.length - 1);

alert("Рекомендований вебінар: " + topics[personalNumber]);
showTopics();
let minSeats = askNumber("Введіть мінімальну кількість вільних місць:", 0, 100000);
if (minSeats === null) {
    alert("Пошук скасовано.");
} else {
    let message = "";
    let found = false;

    for (let i = 0; i < topics.length; i++) {
        if (seats[i] >= minSeats) {
            message += topics[i] + " — " + seats[i] + " місць\n";
            found = true;
        }
    }

    alert(found ? message : "Вебінарів не знайдено.");
}

let search = prompt("Введіть назву вебінару:");
if (search === null) {
    alert("Пошук скасовано.");
} else {
    let index = findTopic(search);

    if (index === -1) {
        alert("Вебінар не знайдено.");
    } else if (seats[index] === 0) {
        alert("Вільних місць немає.");
    } else if (confirm("Записатися на " + topics[index] + "?")) {
        seats[index]--;
        alert("Вас записано! Залишилося місць: " + seats[index]);
    } else {
        alert("Запис скасовано.");
    }
}
participants.push(userName);
while (participants.length < 5) {
    let participant = prompt("Введіть ім'я учасника:");
    if (participant === null) {
        alert("Введення учасників завершено.");
        break;
    }
    if (participant.trim() === "") {
        alert("Ім'я не може бути порожнім!");
    } else {
        participants.push(participant.trim());
    }
}

alert(showParticipants());
let longerNames = 0;
for (let participant of participants) {
    if (participant.length > userName.length) {
        longerNames++;
    }
}

alert("Імен, довших за ваше: " + longerNames +
    "\nПерсональний поріг: " + userName.length);

if (confirm("Бажаєте змінити ім'я учасника?")) {
    let number = askNumber("Введіть номер учасника:", 1, participants.length);

    if (number !== null) {
        let newName = prompt("Введіть нове ім'я:");

        while (newName !== null && newName.trim() === "") {
            alert("Ім'я не може бути порожнім!");
            newName = prompt("Введіть нове ім'я:");
        }

        if (newName !== null) {
            participants[number - 1] = newName.trim();
            alert(showParticipants());
        }
    }
}

bonus = (birthDay + birthMonth) % 7;
for (let visit of visits) {
    personalVisits.push(visit + bonus);
}
let stats = getVisitStats(personalVisits);
let threshold = null;
while (threshold === null) {
    let input = +prompt("Введіть поріг відвідуваності:");

    if (input === null) break;

    if (input.trim() !== "" && Number.isFinite(Number(input)) &&
        Number(input) >= 0) {
        threshold = Number(input);
    } else {
        alert("Введіть правильне число!");
    }
}

let reached = 0;
if (threshold !== null) {
    for (let visit of personalVisits) {
        if (visit >= threshold) reached++;
    }
}
alert(
    "Бонус: " + bonus +
    "\nВідвідування: " + personalVisits.join(", ") +
    "\nСума: " + stats[0] +
    "\nСереднє: " + stats[1].toFixed(2) +
    "\nМаксимум: " + stats[2] +
    "\nМінімум: " + stats[3] +
    (threshold === null ? "" :
        "\nКількість значень, що досягли порогу: " + reached)
);

if (threshold !== null &&
    confirm("Показати номери вебінарів, які досягли порогу?")) {
    let numbers = "";

    for (let i = 0; i < personalVisits.length; i++) {
        if (personalVisits[i] >= threshold) {
            numbers += (i + 1) + " ";
        }
    }

    alert(numbers === "" ? "Таких вебінарів немає." : "Номери: " + numbers);
}
personalScore = (birthDay + birthMonth + userName.length) % 101;
requestScores.push(personalScore);

while (true) {
    let input = +prompt("Введіть новий бал від 0 до 100:");
    if (input === null) break;
    let score = Number(input);
    if (input.trim() === "" || !Number.isInteger(score) ||
        score < 0 || score > 100) {
        alert("Некоректний бал!");
        continue;
    }
    requestScores.push(score);

    if (!confirm("Додати ще один бал?")) break;
}
let groups = distributeRequests(requestScores);
let groupNames = ["HIGH", "MEDIUM", "LOW"];
let biggest = groups[0].length;
let biggestGroups = [];
let result = "";
for (let i = 1; i < groups.length; i++) {
    if (groups[i].length > biggest) {
        biggest = groups[i].length;
    }
}
for (let i = 0; i < groups.length; i++) {
    result += groupNames[i] + ": " + groups[i].join(", ") +
        "\nКількість: " + groups[i].length +
        "\nСередній бал: " + getAverage(groups[i]).toFixed(2) + "\n\n";

    if (groups[i].length === biggest) {
        biggestGroups.push(groupNames[i]);
    }
}
result += "Найбільша група: " + biggestGroups.join(", ") +
    "\nПерсональний бал: " + personalScore +
    "\nВаша група: " + getGroupName(personalScore);

alert(result);