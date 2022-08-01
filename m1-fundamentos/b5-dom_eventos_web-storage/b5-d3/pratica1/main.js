const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebPage = document.getElementById('my-spotrybefy');

function addTechClass(event) {
    let allLi = document.querySelectorAll('.container li');
    for (let i = 0; i < allLi.length; i += 1){
        if (allLi[i].className === "tech") {
            allLi[i].classList.remove("tech");
        }
    }
    event.target.className = "tech";
}

function addTextToTech(event) {
    let selectedTech = document.querySelector('.tech');
    selectedTech.innerText = event.target.value;
    event.target.value = "";
}

function redirectTo() {
    window.location.assign('https://github.com/brunoopinheiro'); //como fazer abrir em outra aba?
}

function createRandomColor() {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

function changeColor(event) {
    randomColor = createRandomColor();
    event.target.style.color = "#" + randomColor;
}

firstLi.addEventListener('click', addTechClass);
secondLi.addEventListener('click', addTechClass);
thirdLi.addEventListener('click', addTechClass);
input.addEventListener('change', addTextToTech);
myWebPage.addEventListener('dblclick', redirectTo);
myWebPage.addEventListener('mouseover', changeColor);