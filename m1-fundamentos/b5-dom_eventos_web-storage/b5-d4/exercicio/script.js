const mainBgColorInput = document.getElementById('main-bg-color-input');
const artBgColorInput = document.getElementById('article-bg-color-input');

function setMainBgColor() {
    const sidebarColor = mainBgColorInput.value;
    const sidebarSections = document.getElementsByClassName('side-color');
    for (let i = 0; i < sidebarSections.length; i += 1) {
        let section = sidebarSections[i];
        section.style.backgroundColor = sidebarColor;
    }
}

function setArticleBgColor() {
    const articleColor = artBgColorInput.value;
    const articleSections = document.getElementsByTagName('article');
    for (let i = 0; i < articleSections.length; i += 1){
        let section = articleSections[i];
        section.style.backgroundColor = articleColor;
    }
}

// window.onload = function () {

// }

mainBgColorInput.addEventListener('change', setMainBgColor);
artBgColorInput.addEventListener('change', setArticleBgColor);
