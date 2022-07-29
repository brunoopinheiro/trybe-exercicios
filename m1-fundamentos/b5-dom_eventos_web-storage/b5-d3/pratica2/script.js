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


createDaysOfTheWeek();
createMonthDays(augustDaysList, 'days', augustFridays, augustHolidays);
createButton('Holidays', 'btn-holiday', '.buttons-container');