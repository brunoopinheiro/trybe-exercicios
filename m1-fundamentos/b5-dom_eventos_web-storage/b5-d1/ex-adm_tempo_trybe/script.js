let headerBar = document.querySelector("header");
headerBar.style.backgroundColor = "green";

let emTasksContainer = document.querySelector(".emergency-tasks");
emTasksContainer.style.backgroundColor = "orange";

let emTasks = document.querySelectorAll(".emergency-tasks h3");
for (let i = 0; i < emTasks.length; i += 1) {
    emTasks[i].style.backgroundColor = "purple";
}

let noEmTasksContainer = document.querySelector(".no-emergency-tasks");
noEmTasksContainer.style.backgroundColor = "yellow";

let noEmTasks = document.querySelectorAll(".no-emergency-tasks h3");
for (let i = 0; i < noEmTasks.length; i += 1) {
    noEmTasks[i].style.backgroundColor = "black";
}

let footerTrybe = document.querySelector("footer");
footerTrybe.style.backgroundColor = "green";