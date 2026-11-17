let participantInput = document.querySelector("#participantInput");
let eventInput = document.querySelector("#eventInput");
let addButton = document.querySelector("#addButton");

let totalCounter = document.querySelector("#totalCounter");
let confirmedCounter = document.querySelector("#confirmedCounter");

let requestList = document.querySelector("#requestList");
let emptyMessage = document.querySelector("#emptyMessage");
let errorMessage = document.querySelector("#errorMessage");
let clearAllButton = document.querySelector("#clearAllButton");


function updateStats() {
    let total = requestList.querySelectorAll("li").length;
    let confirmed = requestList.querySelectorAll(".confirmed").length;

    totalCounter.textContent = total;
    confirmedCounter.textContent = confirmed;

    if (total === 0) {
        emptyMessage.style.display = "block";
    } else {
        emptyMessage.style.display = "none";
    }
}


function addRequest() {
    let participant = participantInput.value.trim();
    let eventName = eventInput.value.trim();

    if (participant === "" || eventName === "") {
        errorMessage.textContent = "Заповніть обидва поля!";
        return;
    }

    errorMessage.textContent = "";

    let li = document.createElement("li");
    li.classList.add("request");

    let name = document.createElement("h3");
    name.textContent = participant;

    let eventText = document.createElement("p");
    eventText.textContent = "Подія: " + eventName;

    let status = document.createElement("span");
    status.textContent = "Очікує";
    status.classList.add("status");

    let confirmButton = document.createElement("button");
    confirmButton.textContent = "Підтвердити";
    confirmButton.classList.add("confirm-btn");

    confirmButton.addEventListener("click", function () {
        let confirmed = li.classList.toggle("confirmed");

        if (confirmed) {
            status.textContent = "Підтверджено";
            confirmButton.textContent = "Скасувати";
        } else {
            status.textContent = "Очікує";
            confirmButton.textContent = "Підтвердити";
        }

        status.classList.toggle("done", confirmed);

        updateStats();
    });


    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Видалити";
    deleteButton.classList.add("delete-btn");

    deleteButton.addEventListener("click", function () {
        li.remove();
        updateStats();
    });


    li.append(name, eventText, status, confirmButton, deleteButton);

    requestList.append(li);

    participantInput.value = "";
    eventInput.value = "";

    updateStats();
}


function clearAllRequests() {
    let answer = confirm("Ви справді хочете видалити всі заявки?");

    if (answer) {
        requestList.innerHTML = "";
        updateStats();
    }
}


addButton.addEventListener("click", addRequest);
clearAllButton.addEventListener("click", clearAllRequests);

updateStats();
