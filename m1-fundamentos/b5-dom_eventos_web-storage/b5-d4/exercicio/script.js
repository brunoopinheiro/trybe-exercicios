const mainBgColorInput = document.getElementById('main-bg-color-input');
const artBgColorInput = document.getElementById('article-bg-color-input');
const mainSections = document.getElementsByClassName('side-color');
const articleSections = document.getElementsByTagName('article');
const textColorOption1 = document.getElementById('text-color-op1');
const textColorOption2 = document.getElementById('text-color-op2');
const fontSizeOptions = document.getElementById('font-size-selector');
const textTargets = document.getElementsByClassName('text');

function loadTextFontSize(number) {
    let newSize = "";
    newSize += number + 'px';
    for (let i = 0; i < textTargets.length; i += 1) {
        let target = textTargets[i];
        target.style.fontSize = newSize;
    };
};

for (let f = 12; f <= 20; f += 2) {
    let option = document.createElement('li');
    option.innerText = f;
    option.addEventListener('click', function() {
        localStorage.setItem('fontSize', f);
        loadTextFontSize(f);
    });
    fontSizeOptions.appendChild(option);
};

function loadBgColor(color, targetList) {
    for (let i = 0; i < targetList.length; i += 1){
        let target = targetList[i];
        target.style.backgroundColor = color;
    };
};

function loadTextColor(color){
    for (let i = 0; i < textTargets.length; i += 1) {
        let target = textTargets[i];
        target.style.color = color;
    };
};

function setMainBgColor() {
    const mainSectionColors = mainBgColorInput.value;
    localStorage.setItem('mainBgColor', mainSectionColors);   
    loadBgColor(mainSectionColors, mainSections);
};

function setArticleBgColor() {
    const articleColor = artBgColorInput.value;
    localStorage.setItem('articleBgColor', articleColor);
    loadBgColor(articleColor, articleSections);
};


window.onload = function () {
    if (localStorage.getItem('mainBgColor') != null) {
        let color = localStorage.getItem('mainBgColor');
        loadBgColor(color, mainSections);
    };
    if (localStorage.getItem('articleBgColor') != null) {
        let color = localStorage.getItem('articleBgColor');
        loadBgColor(color, articleSections);
    };
    if (localStorage.getItem('textColor') != null) {
        let color = localStorage.getItem('textColor');
        loadTextColor(color);
    };
    if (localStorage.getItem('fontSize') != null) {
        let size = localStorage.getItem('fontSize');
        loadTextFontSize(size);
    };
};

mainBgColorInput.addEventListener('change', setMainBgColor);
artBgColorInput.addEventListener('change', setArticleBgColor);
textColorOption1.addEventListener('click', function () {
    loadTextColor('black');
    localStorage.setItem('textColor', 'black');
});
textColorOption2.addEventListener('click', function () {
    loadTextColor('white');
    localStorage.setItem('textColor', 'white');
});
