const counter = document.getElementById('counter');
const cookieMonster = document.getElementById('cookie-monster');
let clickCount;

function addClick() {
  clickCount += 1;
  counter.innerHTML = `Clicks: ${clickCount}`;
}

window.onload = () => {
  clickCount = 0;
  counter.innerHTML = `Clicks: ${clickCount}`;
}

cookieMonster.addEventListener('click', addClick);
