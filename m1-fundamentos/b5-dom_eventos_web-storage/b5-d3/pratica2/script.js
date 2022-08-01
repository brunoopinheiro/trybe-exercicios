const myTasks = document.querySelector('.my-tasks');

let augustDaysList = [31];
for (let i = 1; i <= 31; i += 1) {
    augustDaysList.push(i);
}
let augustFridays = [5, 12, 19, 26];
let augustHolidays = [24, 25, 31];

function createDaysOfTheWeek() {
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

function createMonthDays(daysList, targetElementId, fridays, holidays) {
    const monthDaysList = document.getElementById(targetElementId);

    for (let i = 0; i < daysList.length; i += 1) {
        const day = daysList[i];
        const dayListItem = document.createElement('li');
        dayListItem.innerText = day;
        dayListItem.className = "day";

        if (holidays.includes(day)) {
            dayListItem.classList.add('holiday');
        };
        if (fridays.includes(day)) {
            dayListItem.classList.add('friday');
        };

        monthDaysList.appendChild(dayListItem);
    };
};

function createButton(text, id, parentNodeTarget) {
    const parent = document.querySelector(parentNodeTarget);
    const button = document.createElement('button');
    button.innerHTML = text;
    button.classList.add(id);
    parent.appendChild(button);
}

function changeBackgroundColor() {
    const targets = document.getElementsByClassName('holiday');
    for (let i = 0; i < targets.length; i += 1) {
        const target = targets[i];
        if (target.style.backgroundColor === 'white') {
            target.style.backgroundColor = '#eee';
        } else {
            target.style.backgroundColor = 'white';   
        }
    }
}

function changeFridayDays() {
    const targets = document.getElementsByClassName('friday');
    for (let i = 0; i < targets.length; i += 1) {
        const target = targets[i];
        if(target.innerText === 'Friday!') {
            target.innerText = augustFridays[i];
        } else {
            target.innerText = 'Friday!';
        }
    }
}

function daysZoomIn(event) {
    event.target.style.fontSize = '30px';
}
function daysZoomOut(event) {
    event.target.style.fontSize = '20px';
}

function addTask(task, parentNodeTarget) {
    const newTask = document.createElement('span');
    newTask.innerText = task;

    parentNodeTarget.appendChild(newTask);
}

function selectTask(event) {
    if(event.target.classList.contains('selected')) {
        event.target.classList.remove('selected');
        console.log('Selection removed.');
    } else {
        event.target.classList.add('selected');
        console.log('This task is now selected.');
    }
}

function addTaskLegend(cor) {
    const newLegend = document.createElement('div');
    newLegend.classList.add('task');
    newLegend.style.backgroundColor = cor;
    newLegend.addEventListener('click', selectTask);

    myTasks.appendChild(newLegend);
}

function addLegendToDay(event) {
    const taskSelected = document.querySelector('.selected');
    if (event.target.style.color === '' || event.target.style.color === 'rgb(119, 119, 119)' ) {
        event.target.style.color = taskSelected.style.backgroundColor;
    } else {
        event.target.style.color = 'rgb(119, 119, 119)';
    }
}

function getAppointments() {
    const taskInput = document.getElementById('task-input');
    let text = taskInput.value;
    taskInput.value = '';
    return text;
}

function addAppointment() {
    let text = getAppointments();
    if (text === '') {
        window.alert('TYPE IN A TASK BEFORE ADD');
    } else {
        addTask(text, myTasks);
    }
}

createDaysOfTheWeek();
createMonthDays(augustDaysList, 'days', augustFridays, augustHolidays);
createButton('Holidays', 'btn-holiday', '.buttons-container');
createButton('Fridays!', 'btn-friday', '.buttons-container');

const holidaysButton = document.querySelector('.btn-holiday');
holidaysButton.addEventListener('click', changeBackgroundColor);

const fridaysButton = document.querySelector('.btn-friday');
fridaysButton.addEventListener('click', changeFridayDays);

const days = document.getElementsByClassName('day');
for (let i = 0; i < days.length; i += 1) {
    const day = days[i];
    day.addEventListener('mouseenter', daysZoomIn);
    day.addEventListener('mouseleave', daysZoomOut);
    day.addEventListener('click', addLegendToDay);
}

const addButton = document.querySelector('#btn-add');
addButton.addEventListener('click', addAppointment);

const input = document.getElementById('task-input');
input.addEventListener('keypress', function(event) {
    if(event.key === 'Enter'){
        addButton.click();
    }
})

//testes
addTaskLegend('green');